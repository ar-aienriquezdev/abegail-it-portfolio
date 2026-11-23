import Image from "next/image";
import BackToTop from "../components/BackToTop";
import InteractiveDots from "../components/InteractiveDots";
import TypewriterText from "../components/TypewriterText";

type Project = {
  title: string;
  subtitle: string;
  role: string;
  image: string;
  description: string;
  stack: string[];
  imageFit?: "cover" | "contain";
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "PSE Pulse",
    subtitle: "Financial Analytics & Machine Learning",
    role: "System Design & QA",
    image: "/images/projects/pse-pulse.png",
    description:
      "An interactive Philippine stock-market analytics platform featuring validated market data, responsive interfaces, and Python-based forecasting. I contributed to system design, UI requirements, testing, and technical documentation.",
    stack: ["Next.js", "React", "Python", "Machine Learning", "UAT"],
    links: [{ label: "Explore live platform", href: "https://pse-pulse.vercel.app/" }],
  },
  {
    title: "MotorPH Payroll System",
    subtitle: "Java Development & Security Hardening",
    role: "Lead Developer & Project Coordinator",
    image: "/images/projects/motor-ph.png",
    description:
      "A Java/MySQL payroll application strengthened with BCrypt, role-based access control, parameterized JDBC, audit logging, TLS, and JUnit testing. I served as the primary developer.",
    stack: ["Java", "MySQL", "BCrypt", "JUnit", "Security"],
    links: [{ label: "View source code", href: "https://github.com/ar-aienriquezdev/MO-IT153-IAS2-S4101-Group8-MotorPHPayrollSystem" }],
  },
  {
    title: "FinMark Data Platform",
    subtitle: "Medallion Data Engineering & ETL",
    role: "Data Engineer",
    image: "/images/projects/finmark.png",
    description:
      "A collaborative Bronze–Silver–Gold data platform integrating ingestion, validation, transformation, orchestration, and analytics workflows.",
    stack: ["Python", "DuckDB", "dbt", "Airflow", "Streamlit"],
    links: [{ label: "View source code", href: "https://github.com/ar-aienriquezdev/finmark-data-engineering-platform" }],
  },
  {
    title: "Kaizen Logistics",
    subtitle: "IoT, Blockchain & Tableau Analytics",
    role: "Python Developer & Tableau Designer",
    image: "/images/projects/kaizen.png",
    description:
      "A smart-shipment prototype combining Python, Solidity, and blockchain integration with dashboards for routes, temperature conditions, and RFID reliability.",
    stack: ["Python", "Web3.py", "Solidity", "Tableau"],
    links: [
      { label: "Interactive dashboard", href: "https://public.tableau.com/views/MO-IT148Milestone2SmartTrackingSystemDashboardSubmissionS3101TeamKaizen/MAINDASHBOARD" },
      { label: "Source code", href: "https://github.com/ar-aienriquezdev/kaizen-logistics-iot-analytics" },
    ],
  },
  {
    title: "AI Impact on the IT Job Market",
    subtitle: "Data Analytics & Business Intelligence",
    role: "Data Analyst & Tableau Developer",
    image: "/images/projects/ai-job-market.png",
    description:
      "An interactive dashboard exploring IT employment, salary trends, and projected AI impact. Cleaned 30,000 source records to 178 verified IT-role records across eight countries.",
    stack: ["Python", "Excel", "Tableau", "Data Cleaning"],
    links: [{ label: "Interactive dashboard", href: "https://public.tableau.com/app/profile/abegail.imee.enriquez/viz/AIImpactontheITJobMarket2024-2030MO-IT117_Milestone2-InteractiveDashboardS3101_Group9/KPIOverviewDashboard" }],
  },
];

const skills = [
  { title: "Development", items: ["Python", "Java", "SQL", "TypeScript", "HTML", "CSS", "JavaScript", "React", "Next.js", "Django REST Framework"] },
  { title: "Data & Analytics", items: ["Pandas", "scikit-learn", "Streamlit", "Tableau", "Power BI", "MS Excel", "Jupyter Notebook", "JASP", "DuckDB", "dbt", "Airflow"] },
  { title: "Systems & Tools", items: ["MySQL", "SQLite", "Git & GitHub", "JUnit", "Maven", "Docker", "AWS Cloud Foundations", "Windows Server"] },
];

const experiences = [
  {
    role: "Multimedia Virtual Assistant",
    company: "Pineapple VA Hub",
    dates: "Aug 2024 – Sep 2025",
    details:
      "Created branded visuals, digital content, and video assets for a US-based client, using AI-assisted tools and remote production workflows.",
  },
  {
    role: "Architectural Project Manager",
    company: "Gravis Design Studio",
    dates: "Nov 2023 – Jun 2024",
    details:
      "Coordinated requirements, deliverables, budget considerations, stakeholder communication, and quality reviews.",
  },
  {
    role: "Architectural Technologist",
    company: "UR Studio",
    dates: "Oct 2019 – Nov 2023",
    details:
      "Produced CAD/Revit documentation and 3D visualizations for US-based teams; managed revisions and translated technical requirements into precise deliverables.",
  },
  {
    role: "Senior Associate — Lead Generation & Data Processing",
    company: "Pareto.ai",
    dates: "Jun 2020 – Jul 2021",
    details:
      "Led lead-generation research workflows, reviewed prospect data quality, and supported investment research, reporting, and team coordination.",
  },
  {
    role: "Junior Architect",
    company: "JBros Construction Corp.",
    dates: "Sep 2017 – Jan 2019",
    details:
      "Prepared architectural drawings, models, and project documentation, supporting site work and delivery teams.",
  },
];

const credentials = [
  {
    image: "/images/logos/aws-cloud-badge.png",
    imageAlt: "AWS Academy Cloud Foundations training badge",
    category: "Cloud Foundations",
    name: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Mar 2026",
    url: "https://www.credly.com/badges/7bff632c-919e-413a-a75f-a24b37725fab/linked_in_profile",
    linkText: "Verify training badge",
  },
  {
    image: "/images/logos/google-logo.webp",
    imageAlt: "Google logo",
    category: "IT Support",
    name: "Technical Support Fundamentals",
    issuer: "Google · Coursera",
    date: "Issued Jan 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/EZR6YMCQ2G93",
    linkText: "View credential",
  },
  {
    image: "/images/logos/excelhelpline-logo.png",
    imageAlt: "Excel Helpline logo",
    category: "Professional Training",
    name: "Full-Stack Data Analytics Bootcamp",
    issuer: "Excel Helpline",
    date: "Issued Apr 2024",
    url: "https://drive.google.com/file/d/1AejqLWt0jwNDLAwkVOpK3U1Nzk-qf-Nr/view?usp=drive_link",
    linkText: "View certificate",
  },
];

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#ff86c4]">
      {number} / {title}
    </p>
  );
}

function ProjectLinks({ links }: { links: Project["links"] }) {
  return (
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff8bc7] underline decoration-[#ff8bc7]/70 underline-offset-4 hover:text-white"
        >
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function TechnologyTags({ values }: { values: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {values.map((value) => (
        <span
          key={value}
          className="rounded-full border border-[#6b3455] bg-[#42263e] px-3 py-1.5 text-xs font-medium text-[#ffc4e1]"
        >
          {value}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, spotlight = false }: { project: Project; spotlight?: boolean }) {
  return (
    <article className={`project-surface group overflow-hidden rounded-[26px] transition duration-300 ${spotlight ? "lg:grid lg:grid-cols-[1.15fr_.85fr]" : ""}`}>
      <div
        className={`relative overflow-hidden bg-[#120e17] ${spotlight ? "min-h-[280px] sm:min-h-[390px]" : "aspect-[16/10]"}`}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={spotlight ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
          className={project.imageFit === "contain" ? "object-contain p-5" : "object-cover object-top transition duration-500 group-hover:scale-[1.035]"}
        />
      </div>
      <div className={`flex flex-col p-6 sm:p-8 ${spotlight ? "lg:justify-center lg:p-10" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff86c4]">{project.subtitle}</p>
        <h3 className={`mt-3 font-extrabold tracking-tight text-white ${spotlight ? "text-3xl sm:text-4xl" : "text-2xl sm:text-[27px]"}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-sm font-semibold text-[#ffd4e7]">My role: {project.role}</p>
        <p className="mt-4 text-sm leading-7 text-[#d6c9d7]">{project.description}</p>
        <TechnologyTags values={project.stack} />
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#6b3a5a]/50 bg-[#110d17]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="text-xl font-black tracking-[-0.04em] text-white">
            abegail<span className="text-[#ff64b2]">.</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-[#e5dce8] md:flex">
            <a href="#about" className="hover:text-[#ff86c4]">About</a>
            <a href="#projects" className="hover:text-[#ff86c4]">Projects</a>
            <a href="#skills" className="hover:text-[#ff86c4]">Skills</a>
            <a href="#experience" className="hover:text-[#ff86c4]">Experience</a>
            <a href="#credentials" className="hover:text-[#ff86c4]">Credentials</a>
          </nav>
          <div className="flex items-center gap-3">
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#754262] px-4 py-2 text-sm font-bold text-white">Menu</summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-50 flex w-44 flex-col gap-4 rounded-xl border border-[#74405d] bg-[#211727] p-5 text-sm text-white shadow-xl">
                <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a>
              </nav>
            </details>
            <a href="#contact" className="hidden rounded-full bg-[#ff64b2] px-5 py-2.5 text-sm font-extrabold text-[#231123] hover:bg-[#ffa2d3] sm:inline-block">Let's Connect ↗</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-surface relative isolate overflow-hidden bg-[#1b1224]" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute -right-28 -top-32 h-[460px] w-[460px] rounded-full bg-[#f34d9b]/15 blur-3xl" />
        <InteractiveDots />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-16 sm:px-8 lg:min-h-[690px] lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-20">
          <div className="relative z-10">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff96ce] sm:text-sm">
              Software Development · Data Analytics · Design
            </p>
            <h1 id="hero-title" className="max-w-[760px] text-5xl font-black leading-[1.075] tracking-[-0.05em] text-white sm:text-6xl lg:text-[72px]">
              Where Code,<br />
              <span className="text-[#ff64b2]">Data</span> & Design<br />Meet.
            </h1>
            {/* Animated typewriter — complements the permanent headline */}
            <div className="mt-6 flex min-h-10 flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:text-base">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#ff9fd1]">
                I create
              </span>
              <TypewriterText />
            </div>
            <p className="mt-5 max-w-[570px] text-base leading-8 text-[#eadce8] sm:text-lg">
              I build data-driven applications, analytical systems, and digital experiences through software engineering, structured problem-solving, and thoughtful design.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[#ff64b2] px-7 py-3.5 text-sm font-extrabold text-[#241022] shadow-[0_12px_35px_rgba(243,55,146,.25)] hover:-translate-y-1 hover:bg-[#ffa2d3]">Explore My Work ↗</a>
              <a href="https://drive.google.com/file/d/1gNzBfPAYMl0n-KG0Ds-ggjv4-Cra7qo1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#c77ba6] bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:-translate-y-1 hover:bg-white/20">View My CV ↗</a>
            </div>
            <p className="mt-10 text-sm font-medium tracking-wide text-[#d9b9d0]">
              Python · Java · SQL · Next.js · Django · Tableau
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="absolute inset-x-4 bottom-8 top-8 rounded-[46%_46%_24%_24%] border border-[#ffbddf]/40 bg-gradient-to-b from-[#f47aba] via-[#bc397d] to-[#713054] shadow-[0_20px_100px_rgba(241,62,150,.25)]" />
            <div className="pointer-events-none absolute right-3 top-10 h-28 w-28 rounded-full border-2 border-[#ffa3d0]/60" />
            <div className="relative h-[430px] sm:h-[540px]">
              <Image
                src="/images/profile/hero-portrait.png"
                alt="Professional portrait of Abegail"
                fill
                preload
                sizes="(max-width: 1024px) 90vw, 530px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="glass-panel absolute bottom-10 left-1 rounded-2xl px-5 py-4 shadow-2xl sm:left-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ffa2d3]">My Focus</p>
              <p className="mt-1 text-sm font-bold text-white">Code · Data · Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT: cut-out portrait + soft circular halo; no solid rectangular photo panel */}
      <section id="about" className="section-glow relative isolate overflow-hidden bg-[#100d16] py-20 sm:py-28">
        <InteractiveDots />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16 lg:px-10">
          <div className="relative mx-auto w-full max-w-[430px]" aria-label="About portrait">
            {/* Soft circular background instead of a full pink rectangle */}
            <div className="pointer-events-none absolute inset-x-[6%] top-[14%] h-[72%] rounded-full bg-[#ff64b2]/20 blur-[68px]" aria-hidden="true" />
            <div className="pointer-events-none absolute left-[13%] top-[12%] aspect-square w-[75%] rounded-full border border-[#f58abc]/35 bg-[radial-gradient(circle_at_35%_30%,#783657_0%,#3a1c36_43%,#170f1d_80%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-1 top-[30%] h-20 w-20 rounded-full border border-[#ffa2d3]/30 sm:-left-5" aria-hidden="true" />
            <div className="pointer-events-none absolute right-0 top-[16%] h-9 w-9 rounded-full bg-[#ff74b9]/70 blur-[1px]" aria-hidden="true" />
            <div className="relative z-10 h-[410px] sm:h-[510px]">
              <Image
                src="/images/profile/about-portrait.png"
                alt="Professional portrait of Abegail Imee Enriquez"
                fill
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="glass-panel absolute bottom-4 right-1 z-20 rounded-full px-5 py-3 text-xs font-bold tracking-wide text-[#ffd1e8] shadow-xl sm:right-0">
              Design-minded. Data-driven.
            </div>
          </div>
          <div>
            <SectionLabel number="01" title="About Me" />
            <div className="accent-line" />
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              A developer&apos;s mindset.<br />
              <span className="text-[#ff86c4]">A designer&apos;s eye.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#d7cad9]">
              I&apos;m a Registered and Licensed Architect completing a second degree in Information Technology, majoring in Data Analytics. My technical work spans Python and Java development, SQL database architecture, REST APIs, data engineering, machine learning, and responsive web applications.
            </p>
            <p className="mt-4 text-base leading-8 text-[#d7cad9]">
              In collaborative projects, I&apos;ve served as a lead developer, database designer, data analyst, project coordinator, and QA contributor. I enjoy taking an idea from requirements and data structures through implementation, testing, and an interface people can actually use.
            </p>
            <p className="mt-4 text-base leading-8 text-[#d7cad9]">
              Before focusing on IT, I worked with international clients in architectural technology, research and data processing, project management, and digital content. That experience shaped the way I communicate, organize complex work, and pay attention to quality.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Software development', 'Database design', 'Data analytics', 'QA & testing', 'User-centered design'].map((item) => (
                <span key={item} className="rounded-full border border-[#673c5b] bg-[#2a1b30] px-4 py-2 text-xs font-semibold text-[#f0cee2]">{item}</span>
              ))}
            </div>
            <a href="https://github.com/ar-aienriquezdev" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex font-bold text-[#ff8bc7] underline underline-offset-4 hover:text-white">
              Explore all my technical projects ↗
            </a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="projects" className="relative isolate overflow-hidden border-y border-[#513349] bg-[#1a1221] py-20 sm:py-24">
        <InteractiveDots />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="02" title="Selected Work" />
          <div className="accent-line" />
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">Projects with purpose<span className="text-[#ff64b2]">.</span></h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#cbbbd0]">A closer look at systems I've helped design, develop, test, and visualize. Each project links to a working demo, a dashboard, or its source repository.</p>
          <div className="mt-11 space-y-6">
            <ProjectCard project={projects[0]} spotlight />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.slice(1).map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="https://github.com/ar-aienriquezdev" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-[#ff7aba] px-7 py-3 text-sm font-bold text-[#ffb6d9] hover:bg-[#ff64b2] hover:text-[#241022]">See more projects on GitHub ↗</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-glow relative isolate overflow-hidden bg-[#100d16] py-20 sm:py-24">
        <InteractiveDots />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="03" title="Technical Skills" />
          <div className="accent-line" />
          <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">Tools I work with<span className="text-[#ff64b2]">.</span></h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#cbbbd0]">A practical toolkit shaped by backend development, analytical projects, software testing, and real-world problem-solving.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skills.map((group, i) => (
              <div key={group.title} className="rounded-3xl border border-[#5b3752] bg-[#211827] p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff8bc7]">0{i+1} / {group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => <span key={skill} className="rounded-lg border border-[#52344d] bg-[#302239] px-3 py-2 text-sm font-medium text-[#f2e5ef]">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE — editorial timeline inspired by the reference */}
      <section
        id="experience"
        className="timeline-surface relative isolate overflow-hidden border-y border-[#513349] bg-[#17111d] py-20 sm:py-28"
      >
        <InteractiveDots />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20 lg:px-10">
          {/* Left: introduction, stays in place as the timeline scrolls */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel number="04" title="Professional Experience" />
            <div className="accent-line" />
            <h2 className="mt-6 max-w-md text-4xl font-black leading-[1.13] tracking-tight text-white sm:text-5xl">
              Experience
              <br />
              beyond the <span className="text-[#ff64b2]">code.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#cbbbd0]">
              I bring years of experience in technical documentation, research,
              data quality, project delivery, and remote collaboration into the
              software and data work I do today.
            </p>
            <a
              href="#projects"
              className="mt-7 inline-flex text-sm font-bold text-[#ff9fd1] underline decoration-[#ff9fd1]/60 underline-offset-4 hover:text-white"
            >
              See how I apply these skills ↗
            </a>
          </div>

          {/* Right: clean dated rows, separated with rules instead of cards */}
          <div className="border-t border-[#554057]">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="group relative grid gap-3 border-b border-[#554057] py-7 sm:grid-cols-[155px_minmax(0,1fr)] sm:gap-7 sm:py-9"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff9fd1]">
                    {item.dates}
                  </span>
                  <span className="font-mono text-xs text-[#77677f] sm:mt-3 sm:block">
                    / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold leading-snug tracking-tight text-[#fff7fc] transition-colors group-hover:text-[#ff9fd1] sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#dfb5d0]">
                    {item.company}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#c7b9cb]">
                    {item.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
{/* EDUCATION — spacious school-first editorial rows */}
<section
  id="education"
  className="section-glow relative isolate overflow-hidden bg-[#100d16] py-20 sm:py-24"
>
  <InteractiveDots />
  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <SectionLabel number="05" title="Education & Licensure" />

    <div className="accent-line" />

    <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
      Learning across disciplines
      <span className="text-[#ff64b2]">.</span>
    </h2>

    {/* EDUCATION TIMELINE */}
    <div className="mt-12 divide-y divide-[#563650] border-y border-[#563650]">

      {/* MAPÚA MALAYAN DIGITAL COLLEGE */}
      <article className="grid gap-6 py-9 lg:grid-cols-[255px_minmax(0,1fr)_170px] lg:items-center lg:gap-10 lg:py-12">

        
      {/* Mapúa logo — smaller circular badge matching UP seal */}
      <div className="flex h-[156px] w-full max-w-[270px] items-center justify-center">
        <div
          className="
            flex
            h-[156px]
            w-[156px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border border-[#f2dce8]
            bg-[#fff9fc]
            p-3
            shadow-[0_8px_28px_rgba(0,0,0,0.20)]
          "
        >
          <Image
            src="/images/logos/mmdc-logo.png"
            alt="Mapúa Malayan Digital College logo"
            width={240}
            height={120}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>


        {/* Institution and degree */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff99ca]">
            Current studies
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-[#fff7fc] sm:text-[29px]">
            Mapúa Malayan Colleges Laguna
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#dcaecb]">
            Mapúa Malayan Digital College
          </p>

          <h4 className="mt-5 text-xl font-bold text-white sm:text-[23px]">
            BS Information Technology
          </h4>

          <p className="mt-1 text-sm text-[#decfdf]">
            Major in{" "}
            <span className="font-semibold text-[#ffadd6]">
              Data Analytics
            </span>
          </p>

          <p className="mt-3 text-xs leading-6 text-[#ae9dad]">
            Projected GWA:{" "}
            <span className="font-semibold text-[#dfc6d9]">
              1.0395
            </span>
            <span> · Subject to final grades</span>
          </p>
        </div>

        {/* Expected graduation */}
        <div className="lg:self-center lg:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff99ca]">
            Expected graduation
          </p>

          <p className="mt-1 text-base font-semibold text-[#f5e4f1]">
            March 2027
          </p>
        </div>
      </article>

      {/* UNIVERSITY OF THE PHILIPPINES MINDANAO */}
      <article className="grid gap-6 py-9 lg:grid-cols-[255px_minmax(0,1fr)_170px] lg:items-center lg:gap-10 lg:py-12">

        {/* UP logo — centered with transparent background */}
        <div className="flex h-[156px] w-full max-w-[270px] items-center justify-center">
          <Image
            src="/images/logos/up-logo.png"
            alt="University of the Philippines Mindanao seal"
            width={168}
            height={168}
            className="
              h-[156px]
              w-[156px]
              object-contain
              drop-shadow-[0_6px_22px_rgba(255,185,223,0.14)]
            "
          />
        </div>

        {/* Institution and degree */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff99ca]">
            Completed degree
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-[#fff7fc] sm:text-[29px]">
            University of the Philippines Mindanao
          </h3>

          <h4 className="mt-5 text-xl font-bold text-white sm:text-[23px]">
            BS Architecture
          </h4>

          <p className="mt-2 text-sm text-[#decfdf]">
            Best Thesis Award in Architecture
          </p>

          <p className="mt-2 text-sm font-semibold text-[#ffadd6]">
            Registered and Licensed Architect
          </p>
        </div>

        {/* Graduation and licensure dates */}
        <div className="lg:self-center lg:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff99ca]">
            Graduated
          </p>

          <p className="mt-1 text-base font-semibold text-[#f5e4f1]">
            2017
          </p>

          <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#ff99ca]">
            Licensed
          </p>

          <p className="mt-1 text-base font-semibold text-[#f5e4f1]">
            2019
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* CREDENTIALS */}
      <section id="credentials" className="relative isolate overflow-hidden border-y border-[#513349] bg-[#1a1221] py-20 sm:py-24">
        <InteractiveDots />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="06" title="Credentials & Training" />
          <div className="accent-line" />
          <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">Credentials that back the work<span className="text-[#ff64b2]">.</span></h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#cbbbd0]">Verified training and coursework supporting my technical foundation. The cards link to the issuing platform or supporting certificate.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {credentials.map((credential) => (
              <article key={credential.name} className="project-surface flex h-full flex-col rounded-3xl p-7 transition duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative flex h-[88px] w-[104px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#fff9fd] p-3 shadow-sm">
                    <Image
                      src={credential.image}
                      alt={credential.imageAlt}
                      fill
                      sizes="104px"
                      className="object-contain p-3"
                    />
                  </div>
                  <span className="rounded-full border border-[#804869] bg-[#3d253d] px-3 py-1.5 text-[11px] font-bold text-[#ffc8e3]">{credential.category}</span>
                </div>
                <h3 className="mt-6 text-xl font-black leading-snug text-white">{credential.name}</h3>
                <p className="mt-3 text-sm text-[#e1cfdd]">{credential.issuer}</p>
                <p className="mt-1 text-xs font-semibold text-[#ad9aac]">{credential.date}</p>
                <a href={credential.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit text-sm font-bold text-[#ff8bc7] underline underline-offset-4 hover:text-white">{credential.linkText} ↗</a>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#b9a7bc]">The AWS Academy Cloud Foundations badge represents completed training; it is not an AWS professional certification.</p>
        </div>
      </section>

      
    {/* CONTACT — PERSONAL CALL TO ACTION */}
    <section
      id="contact"
      className="hero-surface relative isolate overflow-hidden border-t border-[#513349] bg-[#1b1224] py-20 sm:py-24"
    >
      <InteractiveDots />
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-[#9f397e]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">

        {/* LEFT — CALL TO ACTION */}
        <div className="relative z-10 text-center lg:text-left">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff99ca]">
            07 / Let's Connect
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ff64b2] lg:mx-0" />

          <h2 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have something
            <br />
            in mind
            <span className="text-[#ff64b2]">?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#eadce8] lg:mx-0 lg:text-lg">
            I'm always interested in thoughtful collaborations
            and opportunities to create software, analytics,
            and digital experiences that solve real problems.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#c9afc6] lg:mx-0">
            Whether you have an opportunity, a project idea,
            or simply want to connect, I'd love to hear from you.
          </p>

          {/* CONTACT BUTTONS */}
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">

            <a
              href="mailto:ar.abegailenriquez@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-[#ff64b2] px-7 py-3.5 text-sm font-extrabold text-[#241022] shadow-[0_12px_30px_rgba(255,100,178,0.2)] hover:-translate-y-1 hover:bg-[#ffa2d3]"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/arenriquez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#bc729b] bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:-translate-y-1 hover:border-[#ff9fd1] hover:bg-white/20"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/ar-aienriquezdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#bc729b] bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:-translate-y-1 hover:border-[#ff9fd1] hover:bg-white/20"
            >
              GitHub ↗
            </a>

          </div>

          {/* SMALL PERSONAL BRANDING DETAIL */}
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-[#b997b0]">
            Code · Data · Design
          </p>

        </div>

        {/* RIGHT — PROFESSIONAL PORTRAIT */}
        <div className="relative isolate mx-auto w-full max-w-[510px]">

          {/* Background pink glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 bottom-7 top-12 -z-10 rounded-full bg-[#ff64b2]/20 blur-[55px]"
          />

          {/* Circular gradient backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-1/2 h-[76%] w-[84%] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#fa72b9] via-[#bb458f] to-[#54274e] shadow-[0_25px_80px_rgba(255,70,163,0.17)]"
          />

          {/* Decorative accent ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-10 h-24 w-24 rounded-full border-2 border-[#ffafd7]/45 sm:right-7"
          />

          {/* Professional photo */}
          <div className="relative h-[390px] w-full sm:h-[480px] lg:h-[520px]">
            <Image
              src="/images/profile/contact-portrait.png"
              alt="Abegail Imee Enriquez holding a notebook"
              fill
              sizes="(max-width: 1024px) 90vw, 510px"
              className="object-contain object-bottom"
            />
          </div>

        </div>

      </div>
    </section>


      <footer className="border-t border-[#493047] bg-[#100d16] px-5 py-7 text-center text-xs text-[#bda8bc]">
        © 2026 Abegail Imee Enriquez. All rights reserved.
      </footer>
      <BackToTop />
    </main>
  );
}
