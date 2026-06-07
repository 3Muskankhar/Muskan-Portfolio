import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

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

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Muskan Khar
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          Full-stack developer crafting AI-powered web experiences with React,
          Next.js, and modern cloud tools.
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
            <a href="#projects">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
    <About />
    <Projects />
    </>
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
