"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "experience", "work", "thoughts", "connect"].map((section: string) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  ZULHIJAYA
                  <br />
                  <span className="block text-2xl sm:text-3xl lg:text-3xl text-muted-foreground">Web Frontend & Flutter Mobile Engineer</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  React Frontend & Flutter Mobile Developer with 5+ years building modern, scalable, and user-friendly
                  applications. Passionate about impactful products that bridge technology with real-world needs, and
                  continuously adopting new tools and workflows to deliver high-quality results. Currently a Product
                  Engineer at Zero One Group (Jakarta, Remote), collaborating in Agile/Scrum teams across
                  <span className="text-foreground"> e-commerce</span>,<span className="text-foreground"> fintech</span>, and
                  <span className="text-foreground"> healthcare</span>. Contributes to CI/CD, code reviews, and custom CMS & e‑commerce solutions.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Indonesia</div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href="https://drive.google.com/file/d/1Ca9Y4-XmHtG6gx_FzKjlIi76nT7TUDkN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M8 12l4 4m0 0l4-4m-4 4V4" />
                    </svg>
                    View CV
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Product Engineer</div>
                  <div className="text-muted-foreground">@ Zero One Group</div>
                  <div className="text-xs text-muted-foreground">2022 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">SKILLS</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Flutter",
                    "Dart",
                    "React Native",
                    "Node.js",
                    "Laravel",
                    "PHP",
                    "WordPress",
                    "Shopify"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="experience"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[1] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  role: "Product Engineer",
                  company: "Zero One Group (Jakarta, Remote)",
                  period: "2022 — Present",
                  points: [
                    "Build and ship web/mobile apps across e‑commerce, fintech, and healthcare.",
                    "Collaborate with cross-functional teams in Agile/Scrum environments.",
                    "Contribute to CI/CD pipelines and code reviews to uphold quality.",
                    "Deliver custom solutions for CMS and e‑commerce platforms.",
                  ],
                  stack: ["React", "Next.js", "TypeScript", "Flutter", "Shopify", "Node.js"],
                },
                {
                  role: "Flutter Mobile Apps Instructor",
                  company: "Makassar Coding",
                  period: "2023",
                  points: [
                    "Mentored students in Android app development and best practices.",
                    "Introduced real-world workflows and clean architecture concepts.",
                  ],
                  stack: ["Flutter", "Dart"],
                },
                {
                  role: "Flutter Mobile Developer",
                  company: "Wedew",
                  period: "2022",
                  points: [
                    "Built production mobile features with performance and UX in mind.",
                  ],
                  stack: ["Flutter", "Dart"],
                },
                {
                  role: "Full Stack Developer",
                  company: "Kumala Motor Group",
                  period: "2021 - 2022",
                  points: [
                    "Developed systems for multi-brand dealerships and employee portals.",
                    "Implemented geolocation-secured attendance apps.",
                  ],
                  stack: ["Laravel", "PHP", "React"],
                },
                {
                  role: "Web Developer",
                  company: "Makassar Website",
                  period: "2019 - 2021",
                  points: [
                    "Delivered school management systems and CMS integrations.",
                    "Built WordPress–Flutter hybrid applications.",
                  ],
                  stack: ["WordPress", "PHP", "Flutter"],
                },
              ].map((job, idx) => (
                <div
                  key={idx}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-3">
                    <div className="text-sm text-muted-foreground font-mono">{job.period}</div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <ul className="list-disc pl-5 text-muted-foreground leading-relaxed space-y-1">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">2021 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "GitHub Search",
                  company: "Next.js + TypeScript app to explore repositories",
                  description: "Search and explore GitHub repositories with filters and clean UI.",
                  tech: ["Next.js", "TypeScript", "React"],
                },
                {
                  year: "2024",
                  role: "E-Pilkada",
                  company: "Campaign management app",
                  description: "Manage campaign content and engage voters during regional elections.",
                  tech: ["Flutter", "Firebase", "REST"],
                },
                {
                  year: "2023",
                  role: "Gowa Pintar",
                  company: "High school CMS by local government",
                  description: "Administrative dashboards and content workflows for school operations.",
                  tech: ["React", "Next.js", "Node.js"],
                },
                {
                  year: "2022",
                  role: "Bantaeng Tourism Information Centre",
                  company: "Regional tourism portal",
                  description: "Discover attractions and local insights via a performant, content-driven site.",
                  tech: ["Next.js", "Tailwind CSS", "Map API"],
                },
                {
                  year: "2021",
                  role: "15 Menit Mengaji",
                  company: "Quran learning app",
                  description: "Guided daily Qur'an learning with audio support and progress tracking.",
                  tech: ["Flutter", "Dart", "Audio"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Highlights</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Education",
                  excerpt:
                    "Bachelor of Education in Informatics & Computer Engineering Education — Universitas Negeri Makassar. Active in student orgs, designed newsletters, led WordPress workshops, and joined national competitions.",
                  date: "—",
                  readTime: "Degree",
                },
                {
                  title: "Honors & Awards",
                  excerpt:
                    "Silver Medal — PIMNAS 2019; 1st Place — TTG Makassar 2019; 3rd Place — Kemah Budaya Kaum Muda 2020 (Ministry of Education & Culture).",
                  date: "2019 — 2020",
                  readTime: "Awards",
                },
                {
                  title: "Languages",
                  excerpt: "Indonesian (native), English (basic).",
                  date: "—",
                  readTime: "Communication",
                },
                {
                  title: "Interests",
                  excerpt: "Exploring Large Language Models (LLM) and practical AI implementations in applications.",
                  date: "2025",
                  readTime: "R&D",
                },
                {
                  title: "Flutter Instructor",
                  excerpt: "Mentored learners on mobile app development, best practices, and real-world workflows.",
                  date: "—",
                  readTime: "Teaching",
                },
                {
                  title: "CI/CD & Code Quality",
                  excerpt: "Pipeline contributions, automated checks, and reviews to uphold standards across teams.",
                  date: "—",
                  readTime: "Engineering",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:32.zulhijaya@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">32.zulhijaya@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@zulhijaya18", url: "https://github.com/zulhijaya18" },
                  { name: "LinkedIn", handle: "zulhijaya", url: "https://www.linkedin.com/in/zulhijaya-zulhijaya/" },
                  { name: "Instagram", handle: "@zulhijaya", url: "https://www.instagram.com/zul_hijaya/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Zulhijaya. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
