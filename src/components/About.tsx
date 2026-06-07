import { Code2, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: Briefcase,
    value: "2x",
    label: "SDE Internships",
  },
  {
    icon: GraduationCap,
    value: "9.05",
    label: "CGPA / 10",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A bit about my journey
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-5">
          {/* Profile photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/10 blur-2xl" />
              <div className="relative aspect-square w-64 overflow-hidden rounded-3xl border border-border bg-card sm:w-72">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
                  alt="Muskan Khar portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m{" "}
              <span className="font-semibold text-foreground">Muskan Khar</span>
              , a final-year Computer Science student at Punjab Engineering
              College passionate about building thoughtful, AI-powered web
              products. I&apos;ve interned as an SDE at{" "}
              <span className="text-foreground">Microsoft</span> and{" "}
              <span className="text-foreground">CSIR-CSIO</span>, shipping
              full-stack systems and ML pipelines that real users rely on.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I love working across the stack — from React and Next.js
              interfaces to PostgreSQL, Prisma, and LLM integrations with
              LangChain and the Gemini API.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/50"
            >
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-4xl font-bold tracking-tight">
                {value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
