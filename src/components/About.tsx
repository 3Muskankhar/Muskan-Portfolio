import { Code2, Briefcase, GraduationCap } from "lucide-react";
import muskanPhoto from "@/assets/muskan-new.jpeg.asset.json";

const stats = [
  { icon: Code2, value: "5+", label: "Projects Delivered" },
  { icon: Briefcase, value: "2", label: "SDE Internships" },
  { icon: GraduationCap, value: "9.05", label: "CGPA / 10" },
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
                  src={muskanPhoto.url}
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
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              About <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent italic">Me</span>
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

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
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
