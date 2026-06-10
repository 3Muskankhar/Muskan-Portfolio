import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muskan Khar — Software Developer" },
      {
        name: "description",
        content:
          "Muskan Khar — Software Developer building AI-powered, full-stack web experiences.",
      },
      { property: "og:title", content: "Muskan Khar — Software Developer" },
      {
        property: "og:description",
        content:
          "Muskan Khar — Software Developer building AI-powered, full-stack web experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
    <section className="relative flex min-h-[calc(100vh-4rem-1px)] items-center justify-center overflow-hidden px-6 py-20">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center animate-fade-in">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to Opportunities
        </div>

        <p className="mb-4 text-base font-light tracking-wide text-muted-foreground sm:text-lg">
          Hello, I&apos;m
        </p>
        <h1 className="font-script text-7xl leading-[1.1] tracking-wide sm:text-8xl md:text-9xl lg:text-[10rem]">
          <span className="group inline-block cursor-default bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent transition-all duration-500 hover:[transform:perspective(600px)_rotateX(8deg)_scale(1.04)] hover:drop-shadow-[0_8px_40px_rgba(139,92,246,0.55)]">
            Muskan Khar
          </span>
        </h1>

        <h2 className="mt-8 text-xl font-light tracking-tight text-muted-foreground sm:text-2xl md:text-3xl">
          And I&apos;m a{" "}
          <span className="font-medium text-foreground">
            <Typewriter />
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build AI-powered, full-stack web experiences with a focus on clean
          design, performance, and thoughtful user experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group w-full rounded-full px-7 shadow-lg shadow-primary/20 sm:w-auto">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact for Work
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group w-full rounded-full px-7 sm:w-auto"
          >
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {[
            { label: "GitHub", href: "https://github.com/3Muskankhar", icon: SiGithub },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/muskan-khar-139465257", icon: FaLinkedin },
            { label: "Email", href: "mailto:muskankhar2004@gmail.com", icon: Mail },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

const ROLES = [
  "Web Developer",
  "Software Developer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    const atEnd = !deleting && text === current;
    const atStart = deleting && text === "";

    if (atEnd) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (atStart) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? 50 : 90,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
      {text}
      <span className="ml-1 inline-block w-[2px] animate-pulse bg-primary align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-4000" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
