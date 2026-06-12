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
  year?: string;
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: "JOBMATE – AI Career Coach",
    description:
      "Full-stack AI career platform that delivers industry insights, adaptive quizzes, and resume optimization tailored to each user's role.",
    tags: ["Next.js 14", "Gemini API", "Prisma", "PostgreSQL", "Tailwind"],
    href: "https://github.com/3Muskankhar",
    icon: Brain,
    year: "2025",
    highlights: [
      "Gemini-powered industry analysis & resume scoring",
      "Adaptive AI quizzes with performance analytics",
      "Server actions + Prisma ORM for type-safe data flow",
    ],
  },
  {
    title: "Volunteer Matching Platform",
    description:
      "Hackathon-winning MERN platform that pairs volunteers with NGOs through an ML model trained on location, language, and skill signals.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python ML"],
    href: "https://github.com/3Muskankhar",
    icon: Code2,
    year: "JPMC CFG '24",
    highlights: [
      "Top 200 / 53K applicants — J.P. Morgan Code for Good",
      "ML matching model with multi-feature similarity scoring",
      "Role-based dashboards for volunteers and NGO admins",
    ],
  },
  {
    title: "Weekendly",
    description:
      "Smart weekend planner that curates activities, meals, and outings into a shareable itinerary tuned to mood, time, and budget.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind"],
    href: "https://github.com/3Muskankhar",
    icon: Calendar,
    year: "2024",
    highlights: [
      "Drag-and-drop itinerary builder with persisted state",
      "Mood + time-of-day based activity recommendations",
      "Shareable plans via unique itinerary links",
    ],
  },
  {
    title: "MedBuddy – AI Medical Coach",
    description:
      "Conversational health assistant that explains symptoms, surfaces trusted medical guidance, and tracks user health in plain language.",
    tags: ["LangChain", "LangGraph", "Gemini API", "Next.js", "RAG"],
    href: "https://github.com/3Muskankhar",
    icon: HeartPulse,
    year: "2025",
    highlights: [
      "LangGraph agent with tool-use for trusted medical sources",
      "RAG pipeline grounded on curated health knowledge base",
      "Conversation memory + symptom tracking over time",
    ],
  },
  {
    title: "OncoSense – Multi-Omics Cancer Prediction",
    description:
      "Research-grade ML pipeline that fuses genomic, transcriptomic, and clinical signals to predict cancer subtypes with improved interpretability.",
    tags: ["Python", "PyTorch", "scikit-learn", "Pandas", "Multi-Omics"],
    href: "https://github.com/3Muskankhar",
    icon: Activity,
    year: "2024",
    highlights: [
      "Late-fusion architecture across 3 omics modalities",
      "Outperformed single-omics baselines on subtype accuracy",
      "SHAP-based feature attribution for model interpretability",
    ],
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

                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                          <Icon className="h-5 w-5" />
                        </div>
                        {project.year && (
                          <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-5 pr-12 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {project.highlights && (
                        <ul className="mt-4 flex-1 space-y-1.5">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-2 text-[13px] leading-snug text-foreground/80"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2 border-t border-border/50 pt-4">
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