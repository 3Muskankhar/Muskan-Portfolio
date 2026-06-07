import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiTensorflow,
  SiLangchain,
  SiOpenai,
  SiGooglegemini,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType };
type Group = { title: string; description: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Backend & Databases",
    description: "APIs, data modeling, and full-stack systems.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "AI / ML & Tools",
    description: "LLM-powered features and developer tooling.",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "OpenAI", icon: SiOpenai },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tools I build with
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            A curated set of technologies I reach for across frontend, backend,
            and AI-powered work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-background/40 p-3 text-center transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
                    title={name}
                  >
                    <Icon
                      aria-hidden
                      className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                    <span className="text-[11px] font-medium leading-tight text-muted-foreground group-hover:text-foreground">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}