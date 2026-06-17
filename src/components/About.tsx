import { Layers, GraduationCap, Briefcase } from "lucide-react";
import muskanPhoto from "@/assets/portfolio.jpeg";

const stats = [
  {
    icon: Layers,
    eyebrow: "JPMC CFG '24",
    value: "Top 200 / 53K",
    sub: "Selected among the top 200 applicants out of 53,000 in J.P. Morgan Code for Good.",
  },
  {
    icon: GraduationCap,
    eyebrow: "B.TECH CSE",
    value: "9.13 CGPA",
    sub: "Punjab Engineering College — consistent academic performance across semesters.",
  },
  {
    icon: Briefcase,
    eyebrow: "INTERNSHIPS",
    value: "2× SWE Intern",
    sub: "Software engineering internships at Microsoft and CSIR-CSIO.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          {/* Profile photo — circular with blue gradient glow */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-primary/40" />
              <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:w-80 md:w-96">
                <img
                  src={muskanPhoto}
                  alt="Muskan Khar portrait"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-widest text-primary uppercase">
              About Me
            </p>
            <h2 className="mt-3 pb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About{" "}
              <span className="font-script inline-block bg-gradient-to-br from-primary via-accent to-primary bg-clip-text pr-3 text-transparent italic font-normal leading-[1.2]">
                Me
              </span>
            </h2>
            <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
              Software Engineer · AI &amp; Full-Stack Developer
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-foreground">Muskan Khar</span>
                , a Computer Science graduate from{" "}
                <span className="text-foreground">Punjab Engineering College</span>{" "}
                with a passion for building technology that solves real-world
                problems. My interests lie in full-stack development, artificial
                intelligence, and designing scalable software that delivers
                meaningful user experiences.
              </p>
              <p>
                Through my academic journey and industry internships — including
                at <span className="text-foreground">Microsoft</span> — I&apos;ve
                worked on AI-driven applications, modern web platforms, and
                end-to-end software solutions.
              </p>
              <p>
                I enjoy exploring new technologies, tackling challenging
                problems, and continuously improving my skills as a developer.
                I&apos;m always excited to build impactful products and
                contribute to innovative engineering teams.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements — icon-left, eyebrow + value style */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map(({ icon: Icon, eyebrow, value, sub }) => (
            <div
              key={eyebrow}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:gap-4 sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px]">
                  {eyebrow}
                </p>
                <div className="mt-1 text-base font-bold tracking-tight sm:text-lg">
                  {value}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
