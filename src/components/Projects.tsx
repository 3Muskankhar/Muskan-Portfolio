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
      "Built an AI-powered career platform that helps users with market analysis, personalized career guidance, resume generation, and interview preparation.",
    tags: ["Next.js", "Gemini API", "Prisma", "PostgreSQL","clerk", "Tailwind"],
    href: "https://github.com/3Muskankhar/JobMate-AI-Career-Coach",
    icon: Brain,
    year: "2025",
    highlights: [
      "Generated real-time market insights, salary trends, and skill recommendations using automated AI-powered analytics.",
      "Built personalized career tools including ATS-friendly resume generation, mock interviews, technical assessments, and AI-driven feedback.",
      "Designed a secure full-stack platform with interactive dashboards, progress tracking, dynamic forms, and downloadable reports.",
    ],
  },
  {
    title: "Weekendly",
    description:
      "Built an AI-powered weekend planning platform with intelligent scheduling, drag-and-drop interactions, and personalized activity recommendations.",
    tags: ["React", "React", "Gemini API", "jspdf", "Tailwind"],
    href: "https://weekendly-project.vercel.app/",
    icon: Calendar,
    year: "2025",
    highlights: [
      "Developed a smart scheduling engine with real-time conflict detection and interactive drag-and-drop planning.",
      "Integrated Google Gemini AI and location-aware services to generate personalized itineraries and activity recommendations.",
      "Built customizable weekend templates with activity tracking, PDF exports, and persistent local storage for a seamless planning experience.",
    ],
  },
  {
    title: "MedBuddy – AI Medical Coach",
    description:
      "Built a multimodal AI medical assistant that combines real-time voice conversations, medical image analysis, and specialized AI agents to deliver preliminary clinical insights.",
    tags: ["LangChain", "groq", "Livekit", "Next.js", "LLMs","Deepgram"],
    href: "https://canva.link/d6rjjrc0qkhhmo6",
    icon: HeartPulse,
    year: "2026",
    highlights: [
      "Developed a 5-agent LangGraph workflow for symptom analysis, X-ray interpretation, prescription verification, and automated report generation.",
      "Integrated Vision-Language Models, LLMs, and RxNorm APIs to combine radiographic findings with conversational patient history.",
      "Enabled sub-second voice interactions and automated structured medical report generation",
    ],
  },
  {
    title: "OncoSense – Multi-Omics Cancer Survival Prediction",
    description:
      "Built an interpretable deep learning framework for kidney cancer survival prediction by integrating multi-omics and clinical data.",
    tags: ["Python", "PyTorch", "scikit-learn", "Pandas", "Multi-Omics"],
    href: "https://docs.google.com/document/d/13qRHywbEnKWE3IuJTUwUMsDANbdXdxYSl-pzcDF9eAs/edit?usp=sharing",
    icon: Activity,
    year: "2025",
    highlights: [
      "Fused mRNA, miRNA, DNA methylation, and clinical features from the TCGA-KIRC dataset.",
      "Designed a hybrid MAE-KAN architecture for interpretable survival prediction.",
      "Achieved a 0.758 C-Index, outperforming CoxPH, XGBoost, Transformer, and GNN baselines.",
    ],
  },
  {
    title: "Volunteer Matching Platform",
    description:
      "Hackathon MERN platform that pairs volunteers with NGOs through an ML model trained on location, language, and skill signals.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python ML"],
    href: "https://github.com/cfgbengaluru24/Team-59",
    icon: Code2,
    year: "JPMC CFG '24",
    highlights: [
      "Uses backend logic to parse and match volunteer profiles with NGO requirements based on location coordinates, languages spoken, and specific skill signals.",
      "ML matching model with multi-feature similarity scoring",
      "Role-based dashboards for volunteers and NGO admins",
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