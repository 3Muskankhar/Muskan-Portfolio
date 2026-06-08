import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
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
    <section className="relative flex min-h-[calc(100vh-4rem-1px)] items-center justify-center overflow-hidden px-6">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center animate-fade-in">
        <p className="mb-5 inline-block rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase backdrop-blur-sm">
          Software Developer · Open to Opportunities
        </p>

        <p className="mb-3 text-base text-muted-foreground sm:text-lg">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Muskan Khar
          </span>
        </h1>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          And I&apos;m a <Typewriter />
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I build AI-powered, full-stack web experiences with a focus on clean
          design, performance, and thoughtful user experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group w-full sm:w-auto">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact for Work
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto"
          >
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
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
