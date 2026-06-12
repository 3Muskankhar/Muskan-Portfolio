import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Code2, Brain, Calendar, HeartPulse, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    title: "JOBMATE – AI Career Coach",
    description:
      "Next.js platform with Gemini-powered industry analysis, AI quizzes, and resume enhancement to guide users through their career journey.",
    tags: ["Next.js", "Gemini API", "AI/ML"],
    href: "https://github.com/3Muskankhar",
    icon: Brain,
  },
  {
    title: "Volunteer Matching Platform",
    description:
      "MERN-stack platform with ML-based pairing of volunteers to NGOs by location and language. Built for J.P. Morgan Code for Good '24.",
    tags: ["MERN", "ML", "Full-Stack"],
    href: "https://github.com/3Muskankhar",
    icon: Code2,
  },
  {
    title: "Weekendly",
    description:
      "Smart weekend scheduler that curates activities, meals, and outings into a shareable itinerary tailored to your mood and time.",
    tags: ["React", "Node.js", "Full-Stack"],
    href: "https://github.com/3Muskankhar",
    icon: Calendar,
  },
  {
    title: "MedBuddy – AI Medical Coach",
    description:
      "AI-powered medical companion that explains symptoms, surfaces trusted guidance, and helps users track health in plain language.",
    tags: ["LangChain", "Gemini API", "AI/ML"],
    href: "https://github.com/3Muskankhar",
    icon: HeartPulse,
  },
  {
    title: "OncoSense – Multi-Omics Cancer Prediction",
    description:
      "Optimized ML pipeline that fuses multi-omics signals to predict cancer subtypes with improved accuracy and interpretability.",
    tags: ["Link"],
    href: "https://github.com/3Muskankhar",
    icon: Activity,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 pb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="font-script inline-block bg-gradient-to-br from-primary via-accent to-primary bg-clip-text pr-3 text-transparent italic font-normal leading-[1.2]">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A collection of things I&apos;ve designed, built, and shipped.
          </p>
        </div>

        <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto w-full"
          >
            <CarouselContent>
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <CarouselItem
                    key={project.title}
                    className="sm:basis-1/2 lg:basis-1/2"
                  >
                    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-7">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${project.title} on GitHub`}
                        className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[11px] tracking-wide text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
      </div>
    </section>
  );
}