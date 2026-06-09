import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Briefcase } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; icon: "cert" | "site" | "more" }[];
};

const experiences: Experience[] = [
  {
    company: "Microsoft",
    role: "SDE Intern",
    period: "Summer 2024",
    description:
      "Worked on internal ML tooling powering topic-modeling workflows across product teams.",
    highlights: [
      "Built embedding generation pipelines for large-scale topic workflows.",
      "Developed ML infrastructure to streamline experimentation and deployment.",
      "Created local testing frameworks to validate pipelines end-to-end.",
    ],
    tech: ["Python", "ML", "Internal Tools"],
    links: [
      { label: "View Certificate", href: "#", icon: "cert" },
      { label: "Learn More", href: "#", icon: "more" },
    ],
  },
  {
    company: "CSIR-CSIO",
    role: "SDE Intern",
    period: "2023",
    description:
      "Built a complete digital ecosystem for academic management and administration.",
    highlights: [
      "Official Website",
      "Student Registration Portal",
      "Student Management System",
    ],
    tech: ["Next.js", "Prisma", "MySQL"],
    links: [
      { label: "Visit Website", href: "#", icon: "site" },
      { label: "View Certificate", href: "#", icon: "cert" },
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
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Career
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Roles where I&apos;ve shipped real software for real users.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-3xl"
        >
          <CarouselContent>
            {experiences.map((exp) => (
              <CarouselItem key={exp.company}>
                <article className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur transition-all hover:border-primary/50 sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  )}

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

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.links.map((l) => (
                      <Button
                        key={l.label}
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer noopener"
                        >
                          {l.icon === "cert" ? (
                            <Award className="mr-1 h-4 w-4" />
                          ) : (
                            <ExternalLink className="mr-1 h-4 w-4" />
                          )}
                          {l.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}