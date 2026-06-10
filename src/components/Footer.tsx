export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/3Muskankhar"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-khar-139465257"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/muskaan_khar/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
