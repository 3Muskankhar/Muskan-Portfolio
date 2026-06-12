import { Mail, Phone } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muskan-khar-139465257", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/3Muskankhar", icon: SiGithub },
  { label: "LeetCode", href: "https://leetcode.com/u/muskaan_khar/", icon: SiLeetcode },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-background py-20 sm:py-28"
    >
      {/* Subtle grid + glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
          Contact
        </p>
        <h2 className="mt-4 pb-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Let&apos;s{" "}
          <span className="font-script inline-block bg-gradient-to-br from-primary via-accent to-primary bg-clip-text pr-3 text-transparent italic font-normal leading-[1.2]">
            talk
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m actively looking for full-time SDE opportunities starting
          2026. Happy to chat about systems, AI, or a good engineering problem.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:muskankhar2004@gmail.com"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-primary/60 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            muskankhar2004@gmail.com
          </a>
          <a
            href="tel:+919541290879"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            +91 95412 90879
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
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
  );
}
