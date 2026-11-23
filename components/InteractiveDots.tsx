
"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive dot background with an automatic diagonal wave.
 *
 * Features:
 * - Soft dots remain visible without mouse movement.
 * - A wave travels from upper-left to lower-right.
 * - Dots brighten around the cursor.
 * - Off-screen sections pause their animations.
 * - Reduced-motion visitors see static dots.
 */

export default function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !section || !ctx) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const pointer = {
      x: -1000,
      y: -1000,
    };

    // ANIMATION SETTINGS
    const spacing = 36;
    const waveCycleMs = 10000;
    const waveBrightness = 0.53;

    let width = 0;
    let height = 0;
    let inView = false;
    let animationId = 0;
    let lastFrame = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!desktop.matches) return;

      const still = reducedMotion.matches;

      // AUTOMATIC DIAGONAL WAVE
      // Starts outside the upper-left corner.
      // Travels toward the lower-right corner.
      // Fades away and repeats.

      const diagonalExtent = (width + height) * 0.72;

      const progress = still
        ? -1
        : (time % waveCycleMs) / waveCycleMs;

      const waveHead =
        -260 + progress * (diagonalExtent + 520);

      // CURSOR SPOTLIGHT
      if (pointer.x >= 0 && pointer.y >= 0) {
        const radius = 180;

        const halo = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          radius
        );

        halo.addColorStop(
          0,
          "rgba(255,100,178,0.12)"
        );

        halo.addColorStop(
          1,
          "rgba(255,100,178,0)"
        );

        ctx.fillStyle = halo;

        ctx.fillRect(
          pointer.x - radius,
          pointer.y - radius,
          radius * 2,
          radius * 2
        );
      }

      // DRAW DOT GRID
      for (let y = 20; y < height; y += spacing) {
        for (let x = 20; x < width; x += spacing) {

          // Gentle movement
          const drift = still
            ? 0
            : Math.sin(
                time * 0.0006 +
                x * 0.017 +
                y * 0.02
              ) * 1.8;

          const dotX = x + drift;
          const dotY = y - drift;

          // Cursor-reactive glow
          const cursorDistance = Math.hypot(
            dotX - pointer.x,
            dotY - pointer.y
          );

          const cursorGlow = Math.max(
            0,
            1 - cursorDistance / 170
          );

          // Position along the diagonal wave
          const positionOnDiagonal =
            (x + y) * 0.72;

          const distanceBehindWave =
            waveHead - positionOnDiagonal;

          // Short, soft leading edge.
          // Longer fading trail.
          const waveWidth =
            distanceBehindWave >= 0
              ? 205
              : 95;

          const wave = still
            ? 0
            : Math.exp(
                -0.5 *
                Math.pow(
                  distanceBehindWave / waveWidth,
                  2
                )
              );

          // Ambient brightness
          // Keeps the background from looking empty.
          const ambient = still
            ? 0.19
            : 0.17 +
              0.025 *
              Math.sin(
                time * 0.0007 +
                x * 0.01
              );

          // Combine automatic wave and mouse glow.
          const opacity = Math.min(
            0.96,
            ambient +
            wave * waveBrightness +
            cursorGlow * 0.68
          );

          const radius =
            1 +
            wave * 0.7 +
            cursorGlow * 1.55;

          ctx.beginPath();

          ctx.arc(
            dotX,
            dotY,
            radius,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            `rgba(255,145,205,${opacity})`;

          ctx.fill();
        }
      }
    };

    // APPROXIMATELY 30 FPS
    const animate = (time: number) => {
      if (time - lastFrame >= 33) {
        lastFrame = time;
        draw(time);
      }

      animationId =
        window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      window.cancelAnimationFrame(animationId);
      animationId = 0;
    };

    // PAUSE WHEN OFF-SCREEN OR TAB IS HIDDEN
    const syncAnimation = () => {
      stopAnimation();

      if (!desktop.matches) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      if (!inView || document.hidden) return;

      draw(
        reducedMotion.matches
          ? 0
          : performance.now()
      );

      if (!reducedMotion.matches) {
        lastFrame = 0;

        animationId =
          window.requestAnimationFrame(animate);
      }
    };

    // RESPONSIVE CANVAS
    const resize = () => {
      width = section.clientWidth;
      height = section.clientHeight;

      const ratio = Math.min(
        window.devicePixelRatio || 1,
        1.5
      );

      canvas.width = Math.round(
        width * ratio
      );

      canvas.height = Math.round(
        height * ratio
      );

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );

      syncAnimation();
    };

    // MOUSE TRACKING
    const movePointer = (
      event: PointerEvent
    ) => {
      if (event.pointerType === "touch") {
        return;
      }

      const rect =
        section.getBoundingClientRect();

      pointer.x =
        event.clientX - rect.left;

      pointer.y =
        event.clientY - rect.top;

      if (
        reducedMotion.matches &&
        inView
      ) {
        draw(0);
      }
    };

    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;

      if (
        reducedMotion.matches &&
        inView
      ) {
        draw(0);
      }
    };

    // OBSERVE VISIBLE SECTIONS
    const observer = new IntersectionObserver(
      (entries) => {
        inView =
          entries[0]?.isIntersecting ?? false;

        if (!inView) {
          clearPointer();
        }

        syncAnimation();
      },
      {
        rootMargin: "100px 0px",
        threshold: 0,
      }
    );

    const resizeObserver =
      new ResizeObserver(resize);

    observer.observe(section);
    resizeObserver.observe(section);

    section.addEventListener(
      "pointermove",
      movePointer
    );

    section.addEventListener(
      "pointerleave",
      clearPointer
    );

    desktop.addEventListener(
      "change",
      syncAnimation
    );

    reducedMotion.addEventListener(
      "change",
      syncAnimation
    );

    document.addEventListener(
      "visibilitychange",
      syncAnimation
    );

    resize();

    // CLEANUP
    return () => {
      stopAnimation();

      observer.disconnect();
      resizeObserver.disconnect();

      section.removeEventListener(
        "pointermove",
        movePointer
      );

      section.removeEventListener(
        "pointerleave",
        clearPointer
      );

      desktop.removeEventListener(
        "change",
        syncAnimation
      );

      reducedMotion.removeEventListener(
        "change",
        syncAnimation
      );

      document.removeEventListener(
        "visibilitychange",
        syncAnimation
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-0 z-0
        hidden h-full w-full
        opacity-80
        md:block
      "
    />
  );
}
