import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "Web" | "AI/ML" | "Full-Stack";

type Project = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  image: string;
  href: string;
};

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
    title: "CSIO Student Portal",
    description:
      "Secure registration portal with OTP login, PDF previews, and role-based admin access.",
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Topic Modeling Pipeline",
    description:
      "End-to-end embedding generation pipeline in Python supporting Microsoft topic workflows.",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with TanStack Start, Tailwind, and a custom dark design system.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    href: "#",
  },
  {
    title: "Realtime Chat App",
    description:
      "WebSocket-based chat with rooms, typing indicators, and Postgres-backed message history.",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    href: "#",
  },
];

const categories: Category[] = ["All", "Web", "AI/ML", "Full-Stack"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A collection of things I&apos;ve designed, built, and shipped.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 animate-fade-in"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
