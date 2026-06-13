import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "text-lg font-semibold tracking-tight text-foreground",
          children: "Muskan's Portfolio"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: link.href,
          className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          children: link.label
        },
        link.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden",
          onClick: () => setMobileOpen((o) => !o),
          "aria-label": "Toggle menu",
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/50 bg-background px-4 pb-4 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-4 pt-4", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: link.href,
        className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        onClick: () => setMobileOpen(false),
        children: link.label
      },
      link.label
    )) }) })
  ] });
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "w-full border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      year,
      " Portfolio. All rights reserved."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/3Muskankhar",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
          children: "GitHub"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/muskan-khar-139465257",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
          children: "LinkedIn"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://leetcode.com/u/muskaan_khar/",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
          children: "LeetCode"
        }
      )
    ] })
  ] }) });
}
const appCss = "/assets/styles-B-pTyzbP.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio" },
      { name: "description", content: "A personal portfolio website" },
      { name: "author", content: "Portfolio" },
      { property: "og:title", content: "Portfolio" },
      { property: "og:description", content: "A personal portfolio website" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Yellowtail&family=Great+Vibes&family=Dancing+Script:wght@600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter = () => import("./index-Dnt0oqrr.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Muskan Khar — Software Developer"
    }, {
      name: "description",
      content: "Muskan Khar — Software Developer building AI-powered, full-stack web experiences."
    }, {
      property: "og:title",
      content: "Muskan Khar — Software Developer"
    }, {
      property: "og:description",
      content: "Muskan Khar — Software Developer building AI-powered, full-stack web experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
