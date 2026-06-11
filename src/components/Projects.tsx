import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award, ExternalLink, Briefcase } from "lucide-react";

type Tab = "Experience" | "Projects";

type Project = {
  title: string;
  description: string;
  category: "Web" | "AI/ML" | "Full-Stack";
  image: string;
  href: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; icon: "cert" | "site" | "more" }[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Microsoft",
    role: "SDE Intern",
    period: "May – July 2025",
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
    period: "Jan – May 2025",
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

const projects: Project[] = [
  {
    title: "JOBMATE – AI Career Coach",
    description:
      "Next.js platform with Gemini-powered industry analysis, AI quizzes, and resume enhancement.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Volunteer Matching Platform",
    description:
      "MERN-stack platform with ML-based pairing by location and language for JPMC CFG'24.",
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Weekendly",
    description:
      "Plan your perfect weekend — a smart scheduler that curates activities, meals, and outings into a shareable itinerary.",
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "MedBuddy – AI Medical Coach",
    description:
      "AI-powered medical companion that explains symptoms, surfaces guidance, and helps users track health in plain language.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "OncoSense – Multi-Omics Cancer Prediction",
    description:
      "Optimized ML pipeline that fuses multi-omics signals to predict cancer subtypes with improved accuracy and interpretability.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "ShopSphere – E-commerce Clone",
    description:
      "Full-stack Amazon-inspired storefront with cart, auth, search, and checkout, built on a modern web stack.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
    href: "#",
  },
];

const tabs: Tab[] = ["Experience", "Projects"];

export function Projects() {
  const [active, setActive] = useState<Tab>("Experience");

  return (
    <section
      id="projects"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            My Work
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {active === "Experience" ? (
              <>
                My{" "}
                <span className="font-script bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent italic font-normal">
                  Experience
                </span>
              </>
            ) : (
              <>
                Selected{" "}
                <span className="font-script bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent italic font-normal">
                  Projects
                </span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {active === "Experience"
              ? "Roles where I've shipped real software for real users."
              : "A collection of things I've designed, built, and shipped."}
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-full border border-border bg-card/50 p-1 backdrop-blur">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${
                  active === tab
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {active === "Experience" ? (
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
        ) : (
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                        {project.category}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-5 w-fit group/btn"
                      >
                        <a href={project.href}>
                          View Project
                          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        )}
      </div>
    </section>
  );
}