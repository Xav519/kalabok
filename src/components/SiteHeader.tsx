import logo from "@/assets/logo.png";

const nav = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kalabok"
            width={40}
            height={40}
            className="h-10 w-10 animate-spin-slow"
          />
          <span className="font-display text-2xl tracking-wide">Kalabok</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+15143340440"
          className="rounded-md border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-neon"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
