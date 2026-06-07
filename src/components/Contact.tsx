import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si/index.js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: SiLinkedin },
  { label: "GitHub", href: "https://github.com", icon: SiGithub },
  { label: "LeetCode", href: "https://leetcode.com", icon: SiLeetcode },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  }

  return (
    <section
      id="contact"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Have a project, role, or idea in mind? Send a note — I&apos;ll get
            back to you soon.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                maxLength={1000}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-end">
              <Send className="mr-2 h-4 w-4" />
              Send message
            </Button>
            {status === "sent" && (
              <p className="text-center text-sm text-primary">
                Thanks — your message has been sent.
              </p>
            )}
          </div>
        </form>

        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
