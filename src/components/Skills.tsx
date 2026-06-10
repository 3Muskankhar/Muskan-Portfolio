import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiLangchain,
  SiGooglegemini,
  SiGit,
  SiGithub,
  SiDocker,
  SiMysql,
  SiBootstrap,
  SiLinux,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";
import { Brain, Network, Database, Cpu, GitBranch, Sparkles, Bot, Eye, MessageSquare, Workflow, Code2 } from "lucide-react";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType | React.ComponentType<{ className?: string }>; color: string };
type Group = { title: string; skills: Skill[]; reverse?: boolean };

const groups: Group[] = [
  {
    title: "Languages & Web",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Databases & Developer Tools",
    reverse: true,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "SQL", icon: Database, color: "#00758F" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux / Unix", icon: SiLinux, color: "#FCC624" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "AI / ML & Core CS",
    skills: [
      { name: "LangChain", icon: SiLangchain, color: "#1C3A3A" },
      { name: "LangGraph", icon: Workflow, color: "#FF6B6B" },
      { name: "Gemini API", icon: SiGooglegemini, color: "#4796E3" },
      { name: "Prompt Engineering", icon: Sparkles, color: "#A855F7" },
      { name: "Machine Learning", icon: Bot, color: "#FF9F1C" },
      { name: "Deep Learning", icon: Brain, color: "#EF4444" },
      { name: "Computer Vision", icon: Eye, color: "#10B981" },
      { name: "NLP", icon: MessageSquare, color: "#8B5CF6" },
      { name: "Data Structures & Algorithms", icon: GitBranch, color: "#F59E0B" },
      { name: "OOPs", icon: Cpu, color: "#06B6D4" },
      { name: "DBMS", icon: Database, color: "#3B82F6" },
      { name: "Operating Systems", icon: Cpu, color: "#EC4899" },
      { name: "Computer Networks", icon: Network, color: "#22D3EE" },
      { name: "Distributed Systems", icon: Network, color: "#F472B6" },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Technologies, tools, and concepts I work with — hover any pill to
            see it light up in its true colors.
          </p>
        </div>

        <div className="space-y-6">
          {groups.map((group, idx) => (
            <MarqueeRow key={group.title} skills={group.skills} reverse={group.reverse} speed={idx === 1 ? "slow" : "normal"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  skills,
  reverse,
  speed,
}: {
  skills: Skill[];
  reverse?: boolean;
  speed?: "normal" | "slow";
}) {
  const animClass = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className="group/marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max gap-4 ${animClass} group-hover/marquee:[animation-play-state:paused]`}>
        {[...skills, ...skills].map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div
      className="group/pill flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-card/40 px-5 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
      style={
        {
          ["--brand" as string]: skill.color,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = skill.color;
        e.currentTarget.style.boxShadow = `0 8px 24px -8px ${skill.color}66`;
        e.currentTarget.style.backgroundColor = `${skill.color}1a`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.backgroundColor = "";
      }}
    >
      <Icon
        aria-hidden
        className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover/pill:[color:var(--brand)]"
      />
      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover/pill:text-foreground whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}