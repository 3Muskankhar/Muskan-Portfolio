import { Briefcase } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Microsoft",
    role: "SDE Intern",
    period: "May – July 2025",
    highlights: [
      "Built embedding generation pipelines for large-scale topic workflows.",
      "Developed ML infrastructure to streamline experimentation and deployment.",
      "Created local testing frameworks to validate pipelines end-to-end.",
    ],
  },
  {
    company: "CSIR-CSIO",
    role: "SDE Intern",
    period: "Jan – May 2025",
    highlights: [
      "Built the official website for the institute.",
      "Developed a student registration portal end-to-end.",
      "Engineered a student management system with Next.js, Prisma & MySQL.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Career
          </p>
          <h2 className="mt-3 pb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="font-script inline-block bg-gradient-to-br from-primary via-accent to-primary bg-clip-text pr-3 text-transparent italic font-normal leading-[1.2]">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A timeline of internships where I&apos;ve shipped real software.
          </p>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <span className="block h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_16px_rgba(139,92,246,0.6)]" />
                  </span>

                  {/* Card */}
                  <article
                    className={`ml-12 md:ml-0 ${
                      leftSide ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 sm:p-7">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60">
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-5 space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  {/* Period label opposite */}
                  <div
                    className={`mt-3 ml-12 md:mt-0 md:ml-0 md:flex md:items-center ${
                      leftSide
                        ? "md:col-start-2 md:justify-start md:pl-10"
                        : "md:col-start-1 md:row-start-1 md:justify-end md:pr-10"
                    }`}
                  >
                    <span className="inline-flex rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur">
                      {exp.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}