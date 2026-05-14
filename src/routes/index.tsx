import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroPlov from "@/assets/hero-plov.jpg";
import logo from "@/assets/logo.png";
import medovik from "@/assets/medovik.jpg";
import pelmeniImg from "@/assets/pelmeni.jpg";
import eggplant from "@/assets/eggplant-rolls.jpg";
import spread from "@/assets/spread.jpg";
import interior from "@/assets/interior.jpg";
import vareniki from "@/assets/vareniki.jpg";
import borscht from "@/assets/borscht.jpg";
import napoleon from "@/assets/napoleon.jpg";
import plovReal from "@/assets/plov.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalabok — Authentic Halal Eastern European & Central Asian Cuisine" },
      {
        name: "description",
        content:
          "Kalabok in Ahuntsic-Cartierville serves authentic Halal Russian, Uzbek and Ukrainian dishes — Plov, Pelmeni, Vareniki, Borscht, Medovik and more. 5.0 stars.",
      },
      { property: "og:title", content: "Kalabok — Authentic Halal Cuisine, Montréal" },
      { property: "og:description", content: "Plov, Pelmeni, Borscht, Medovik. 100% Halal, made from scratch." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

const mains = [
  { name: "Plov", desc: "Slow-cooked rice with lamb, carrots and spices.", img: plovReal },
  { name: "Pelmeni", desc: "Hand-folded dumplings with sour cream and dill.", img: pelmeniImg },
  { name: "Vareniki", desc: "Tender Ukrainian dumplings, potato or cherry.", img: vareniki },
  { name: "Borscht", desc: "Crimson beet soup with deep, rooted flavor.", img: borscht },
  { name: "Manty", desc: "Steamed Central Asian dumplings, juicy and bold.", img: eggplant },
  { name: "Lagman", desc: "Hand-pulled noodles in spiced lamb broth.", img: spread },
];

const desserts = [
  { name: "Medovik", desc: "Honey cake — eight layers of slow craft.", img: medovik },
  { name: "Napoleon", desc: "Crisp pastry leaves bound by silk cream.", img: napoleon },
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <img
          src={heroPlov}
          alt="Steaming plov on ornate plate"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        {/* Candlelight glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 candle-glow animate-candle" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              5.0 ★ Local Favorite · 100% Halal
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Discover the <span className="text-primary text-glow">Authentic</span> Taste of Home.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Russian, Uzbek and Ukrainian classics — slow-cooked, made from scratch, served with
              the warmth of family in Ahuntsic-Cartierville.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+15143340440"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
              >
                Order Now
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Explore Menu
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl" />
            <img
              src={logo}
              alt=""
              width={512}
              height={512}
              className="mx-auto h-[28rem] w-[28rem] animate-spin-slow opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-border/40 py-28">
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <img
            src={interior}
            alt="Inside the Kalabok dining room"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-2xl"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The Vibe</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A 5.0-star table set with family warmth.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every dish at Kalabok is made from scratch, every day. Our kitchen is fully
              <span className="text-primary"> Halal</span>, our recipes are heirlooms, and our
              hospitality is the kind you remember.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "5.0★", v: "Google rating" },
                { k: "100%", v: "Halal kitchen" },
                { k: "Daily", v: "Made from scratch" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary text-glow">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative border-t border-border/40 bg-card/30 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The Menu</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">House Favorites</h2>
            <p className="mt-4 text-muted-foreground">
              A curated selection from across the table — savory, slow, and unmistakably ours.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mains.map((m) => (
              <article
                key={m.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/60 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Desserts */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Custom Cakes</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">Famous Desserts</h3>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {desserts.map((d) => (
                <article
                  key={d.name}
                  className="group relative flex overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/60"
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-48 w-48 flex-shrink-0 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-col justify-center p-6">
                    <h4 className="font-display text-3xl">{d.name}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative border-t border-border/40 py-28">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          {[
            {
              title: "Address",
              body: (
                <>
                  11892 Blvd. Laurentien
                  <br />
                  Ahuntsic-Cartierville, QC
                  <br />
                  H4K 2V5
                </>
              ),
            },
            {
              title: "Phone",
              body: (
                <a href="tel:+15143340440" className="text-primary hover:text-glow">
                  (514) 334-0440
                </a>
              ),
            },
            {
              title: "Hours",
              body: (
                <>
                  Tue–Wed · 12 PM – 8 PM
                  <br />
                  Thu–Sat · 12 PM – 10 PM
                  <br />
                  Sun & Mon · Closed
                </>
              ),
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary">{c.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur">
            <h3 className="font-display text-2xl">Order for Delivery</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {["Uber Eats", "DoorDash", "SkipTheDishes"].map((p) => (
                <a
                  key={p}
                  href="#"
                  className="rounded-md border border-border px-6 py-3 text-sm font-medium transition-all hover:border-primary hover:text-primary"
                >
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 animate-spin-slow"
            />
            <span className="font-display text-lg">Kalabok</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kalabok. Made with warmth in Montréal.
          </p>
        </div>
      </footer>
    </div>
  );
}
