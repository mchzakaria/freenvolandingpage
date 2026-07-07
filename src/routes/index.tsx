import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/freenvo/Nav";
import { PhoneMock } from "@/components/freenvo/PhoneMock";
import { LaptopMock } from "@/components/freenvo/LaptopMock";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import freenvoLogo from "@/assets/freenvo-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freenvo — Get paid. Stay in control." },
      {
        name: "description",
        content:
          "Invoicing, WhatsApp delivery, expense tracking and cashflow for Morocco's freelancers and creators. One simple app.",
      },
      { property: "og:title", content: "Freenvo — Get paid. Stay in control." },
      {
        property: "og:description",
        content:
          "Built in Morocco for freelancers and influencers. Send invoices on WhatsApp, track every dirham, know your safe-to-spend.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-warm-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />

      <Nav />

      <main className="relative">
        <Hero />
        <Marquee />
        <DashboardShowcase />
        <Problem />
        <Features />
        <LogoGenerator />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBand />
        <Footer />
      </main>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-card/60 px-3 py-1 text-xs backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            <span className="font-medium tracking-wide">
              Made in Morocco for freelancers & creators
            </span>
          </div>

          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Get paid.
            <br />
            <span className="italic text-brand font-sans">Stay in control.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:mt-8 sm:text-lg">
            Create professional invoices in seconds, send them over WhatsApp,
            track every expense, and finally know your real cashflow — all from
            one beautifully simple app built for the way Morocco works.
          </p>

          <div id="waitlist" className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="https://app.freenvo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1da1ff] to-[#0077ff] px-8 py-3 text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <SparkIcon className="size-4" />
              <span className="font-display text-base tracking-wide uppercase">
                Try for free
              </span>
            </a>
            
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[testimonial1, testimonial2, testimonial3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  className="size-9 rounded-full object-cover ring-2 ring-background"
                />
              ))}
              <div className="grid size-9 place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground ring-2 ring-background">
                +500
              </div>
            </div>
            <div className="text-sm">
              <p className="font-medium">500+ freelancers on the waitlist</p>
              <p className="text-xs text-muted-foreground">
                Joined this month from Casablanca, Rabat, Marrakech
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-3xl" />
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

/* ---------- Dashboard Showcase ---------- */
function DashboardShowcase() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-[500px] max-w-5xl bg-warm-glow opacity-70" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
            The dashboard
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Your whole business,
            <span className="italic text-brand"> at a glance.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground text-pretty sm:mt-6 sm:text-lg">
            Invoices, payments, cashflow and AI insights — all in one calm,
            focused workspace built for independents.
          </p>
        </div>
        <LaptopMock />
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [
    "Auto-Entrepreneur ready",
    "MAD · USD · EUR",
    "WhatsApp delivery",
    "VAT calculator",
    "Cashflow forecasts",
    "Receipt scanner",
    "Recurring invoices",
    "AI insights",
  ];
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-8 pr-8 sm:gap-12 sm:pr-12">
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap font-display text-base text-muted-foreground sm:gap-3 sm:text-xl"
            >
              <span className="size-1.5 rounded-full bg-brand" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const pains = [
    { n: "01", title: "Forgetting who paid", body: "Losing track of which clients have settled and which still owe you." },
    { n: "02", title: "Chasing reminders", body: "Wasting hours every week sending polite follow-ups that never land." },
    { n: "03", title: "Money disappears", body: "Expenses pile up with no clear picture of where your dirhams went." },
    { n: "04", title: "Tax-season dread", body: "Scrambling to find receipts and reconstruct a year of cashflow." },
  ];
  return (
    <section className="relative bg-ink py-20 text-ink-foreground sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
              The problem
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Freelancing in Morocco
              <br />
              <span className="italic opacity-60">shouldn't feel this messy.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-foreground/70 text-pretty sm:text-lg">
            Notebooks, spreadsheets, WhatsApp screenshots, lost receipts — most
            independent workers are stitching their finances together by hand.
            Freenvo replaces the chaos with one system designed for how you
            actually work.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <div key={p.n} className="bg-ink p-6 sm:p-8">
              <p className="font-mono text-xs text-brand">{p.n}</p>
              <h3 className="mt-4 font-display text-xl sm:mt-6 sm:text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60 sm:mt-3">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
            The solution
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Everything you need to run your money — nothing you don't.
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-6 lg:grid-rows-2">
          {/* Big feature: invoicing */}
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft sm:p-8 lg:col-span-3 lg:row-span-2">
            <div className="flex h-full flex-col">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  <span className="size-1.5 rounded-full bg-brand" />
                  Invoicing
                </span>
                <h3 className="mt-6 font-display text-3xl tracking-tight">
                  Beautiful invoices in 60 seconds.
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground text-pretty">
                  Pre-filled client data, your logo, your branding, MAD or
                  multi-currency. Send a polished PDF before your coffee gets
                  cold.
                </p>
              </div>

              {/* Mini invoice */}
              <div className="mt-8 flex-1 rounded-2xl bg-background p-6 ring-1 ring-border">
                <div className="flex items-start justify-between">
                  <div className="grid size-10 place-items-center rounded-lg bg-ink text-ink-foreground">
                    <span className="block size-2 rotate-45 bg-brand" />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg">Invoice</p>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      #INV-2026-042
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Bill to
                    </p>
                    <p className="mt-1 font-medium">Atlas Studio</p>
                    <p className="text-muted-foreground">Casablanca</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Due
                    </p>
                    <p className="mt-1 font-medium">May 28, 2026</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Brand identity</span>
                    <span className="tabular-nums">5,400.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Social pack</span>
                    <span className="tabular-nums">2,000.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>VAT (20%)</span>
                    <span className="tabular-nums">1,480.00</span>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between border-t-2 border-ink pt-4">
                  <span className="font-display">Total</span>
                  <span className="font-display text-2xl tracking-tight">
                    8,880 MAD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft sm:p-8 lg:col-span-3">
            <div className="flex items-start justify-between">
              <div className="max-w-sm">
                <h3 className="font-display text-2xl tracking-tight">
                  Send it where your clients already are.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  One tap to WhatsApp. Polite reminders go out automatically.
                </p>
              </div>
              <WhatsAppGlyph className="size-12 text-[#25D366]" />
            </div>
            <div className="mt-6 space-y-2">
              <ChatBubble
                from="you"
                text="Invoice #042 — 8,880 MAD due May 28. Shukran 🙏"
              />
              <ChatBubble from="them" text="Paid. Merci!" />
            </div>
          </div>

          {/* Safe to spend */}
          <div className="overflow-hidden rounded-3xl bg-brand p-6 text-brand-foreground shadow-soft sm:p-8 lg:col-span-2">
            <h3 className="font-display text-2xl tracking-tight">
              Safe to spend.
            </h3>
            <p className="mt-2 text-sm opacity-80">
              After bills, taxes & savings.
            </p>
            <p className="mt-8 font-display text-5xl tracking-tight">
              12,500
              <span className="ml-1 text-lg opacity-70">MAD</span>
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-3/4 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Expenses */}
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft sm:p-8 lg:col-span-2">
            <h3 className="font-display text-2xl tracking-tight">
              Every dirham, categorised.
            </h3>
            <div className="mt-6 space-y-3">
              {[
                ["Software", 1240, "bg-brand"],
                ["Travel", 820, "bg-ink"],
                ["Meals", 460, "bg-muted-foreground"],
              ].map(([label, amt, color]) => (
                <div key={label as string}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{label}</span>
                    <span className="tabular-nums text-muted-foreground">
                      {amt} MAD
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full ${color as string}`}
                      style={{ width: `${((amt as number) / 1240) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI */}
          <div className="rounded-3xl bg-ink p-6 text-ink-foreground shadow-soft sm:p-8 lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <SparkIcon className="size-3.5 text-brand" />
              AI insights
            </span>
            <p className="mt-6 font-display text-xl leading-snug">
              "Your March income was 22% lower than February. Want to send
              follow-ups to your 3 overdue clients?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ from, text }: { from: "you" | "them"; text: string }) {
  const mine = from === "you";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
          mine
            ? "rounded-br-sm bg-[#DCF8C6] text-[#0F1F0E]"
            : "rounded-bl-sm bg-background text-foreground ring-1 ring-border"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

/* ---------- Logo Generator ---------- */
function LogoGenerator() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-ink p-6 text-ink-foreground shadow-elevated ring-1 ring-hairline sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                <SparkIcon className="size-3.5 text-brand" />
                New · Brand kit
              </span>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                No logo?
                <br />
                <span className="italic text-brand">Generate one in seconds.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/70 text-pretty">
                Freenvo crafts polished logo directions from your business name
                and applies the one you pick — straight onto your invoices,
                receipts and client PDFs. Already have a logo? Drop it in and
                we'll use that instead.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "6 unique gradient & monogram directions",
                  "Square, circle and blob shapes",
                  "One-click apply to every invoice",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span
                      className={`size-1.5 rounded-full ${
                        i === 0 ? "bg-brand" : i === 1 ? "bg-[#c084fc]" : "bg-[#4ade80]"
                      }`}
                    />
                    <span className="text-ink-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual mock */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Orbiting glow */}
              <div className="pointer-events-none absolute -inset-8 -z-10 animate-spin-slow rounded-[3rem] bg-[conic-gradient(from_0deg,transparent,oklch(0.68_0.22_255/0.45),transparent_30%,oklch(0.75_0.18_320/0.35),transparent_70%)] opacity-70 blur-2xl" />

              <div className="group relative aspect-square overflow-hidden rounded-3xl bg-card text-card-foreground ring-1 ring-hairline shadow-elevated transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02]">
                {/* Animated gradient halo */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.68_0.22_255/0.25),transparent_60%)] animate-pulse-glow" />

                {/* Floating spark particles */}
                <span className="pointer-events-none absolute left-[20%] top-[25%] size-1.5 rounded-full bg-brand/80 animate-float-particle" />
                <span
                  className="pointer-events-none absolute right-[18%] top-[35%] size-1 rounded-full bg-[#c084fc] animate-float-particle"
                  style={{ animationDelay: "1.2s" }}
                />
                <span
                  className="pointer-events-none absolute left-[30%] bottom-[28%] size-1 rounded-full bg-[#4ade80] animate-float-particle"
                  style={{ animationDelay: "2.4s" }}
                />

                {/* Sheen sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-full" />

                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <SparkIcon className="size-9 text-brand drop-shadow-[0_0_18px_oklch(0.68_0.22_255/0.7)] animate-spark" />
                  <p className="mt-4 font-display text-xl tracking-tight">
                    Generate with AI
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    From your name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "Step 01",
      title: "Add your client",
      body: "Save details once. Reuse them on every invoice with one tap.",
    },
    {
      n: "Step 02",
      title: "Build the invoice",
      body: "Pick line items from your library. Tax and totals calculate themselves.",
    },
    {
      n: "Step 03",
      title: "Send on WhatsApp",
      body: "A clean PDF lands in your client's chat. We nudge them politely if they forget.",
    },
    {
      n: "Step 04",
      title: "Watch cashflow live",
      body: "Mark as paid, log expenses, and see what's safe to spend — in real time.",
    },
  ];
  return (
    <section id="how" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
              How it works
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Four steps. Zero spreadsheets.
            </h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-background p-6 transition-colors hover:bg-card sm:p-8"
            >
              <p className="font-mono text-xs text-brand">{s.n}</p>
              <div className="mt-8 font-display text-6xl font-medium text-muted/40 transition-colors group-hover:text-brand/20 sm:mt-12 sm:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl sm:mt-6">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    {
      img: testimonial1,
      name: "Younes B.",
      role: "Freelance designer · Casablanca",
      quote:
        "I billed 18k MAD in my first week. Sending invoices on WhatsApp changed everything — clients actually open them.",
    },
    {
      img: testimonial2,
      name: "Salma E.",
      role: "Content creator · Marrakech",
      quote:
        "Finally an app that speaks my reality. I know exactly what's safe to spend before I book a flight.",
    },
    {
      img: testimonial3,
      name: "Mehdi R.",
      role: "Photographer · Rabat",
      quote:
        "Tax season used to take a week. Last year it took an afternoon. That alone paid for the year.",
    },
  ];
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
            Loved by independents
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Words from the people we built it for.
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft sm:p-8"
            >
              <blockquote className="font-display text-xl leading-snug text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-hairline pt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
            Pricing
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Honest pricing.
            <br />
            <span className="italic text-brand">No hidden commissions.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Starter
            </p>
            <p className="mt-4 font-display text-5xl tracking-tight">Free</p>
            <p className="mt-2 text-sm text-muted-foreground">
              For freelancers just getting paid.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Up to 5 invoices / month",
                "WhatsApp delivery",
                "Basic expense tracking",
                "1 client profile",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-secondary px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Start free
            </a>
          </div>

          <div className="relative rounded-3xl bg-ink p-6 text-ink-foreground shadow-elevated sm:p-10">
            <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground sm:left-10">
              Most popular
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              Pro
            </p>
            <p className="mt-4 font-display text-5xl tracking-tight">
              99
              <span className="ml-2 font-sans text-lg font-normal opacity-60">
                MAD / month
              </span>
            </p>
            <p className="mt-2 text-sm opacity-70">
              For freelancers and creators serious about growth.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Unlimited invoices & clients",
                "AI cashflow insights",
                "Auto VAT & tax engine",
                "Multi-currency (MAD · USD · EUR)",
                "Receipt scanner & exports",
                "Priority support in Darija",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckIcon className="size-4 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Get Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const items = [
    {
      q: "Is Freenvo really made for Morocco?",
      a: "Yes — built in Casablanca. Native MAD, VAT 20%, Auto-Entrepreneur tax rules, and bilingual invoices (French / English) are all built-in.",
    },
    {
      q: "Do I need a bank account?",
      a: "No. Freenvo helps you invoice, track and forecast. Settlements happen however you and your client agree — bank transfer, cash, or card.",
    },
    {
      q: "Can clients receive invoices without the app?",
      a: "Absolutely. You send a PDF over WhatsApp, email or SMS. They don't need to install anything.",
    },
    {
      q: "When is iOS and Android launching?",
      a: "Public beta opens this quarter. Join the waitlist and we'll send you a code the day it goes live in your city.",
    },
    {
      q: "Is my data safe?",
      a: "Bank-grade encryption at rest and in transit. We never sell your data and you can export everything any time.",
    },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Can't find what you need?{" "}
            <a href="#" className="text-brand underline underline-offset-4">
              Talk to a human →
            </a>
          </p>
        </div>
        <div className="divide-y divide-hairline">
          {items.map((it, i) => (
            <details key={i} className="group py-6">
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none sm:gap-6">
                <span className="font-display text-lg sm:text-xl">{it.q}</span>
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-hairline text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA Band ---------- */
function CtaBand() {
  return (
    <section className="px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink p-6 text-ink-foreground sm:p-10 lg:p-16">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-10">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Run your money like a pro.
              <br />
              <span className="italic opacity-70">Starting today.</span>
            </h2>
            <p className="mt-6 max-w-md text-ink-foreground/70">
              Join 500+ freelancers and creators on the waitlist. Get early
              access and lifetime founder pricing.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "https://app.freenvo.com";
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Try for free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={freenvoLogo}
                alt="Freenvo"
                className="h-7 w-auto"
                loading="lazy"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Built in Casablanca for the next generation of Moroccan
              freelancers and creators.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={["Features", "Pricing", "Roadmap", "Changelog"]}
          />
          <FooterCol
            title="Company"
            links={["About", "Manifesto", "Careers", "Press"]}
          />
          <FooterCol
            title="Legal"
            links={["Privacy", "Terms", "Security", "Contact"]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Freenvo. Made with care in Morocco.</p>
          <p className="font-mono uppercase tracking-widest">
            v 1.0 · Beta
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-foreground">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-brand">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Icons ---------- */
function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.6 105.3c30.3-36 27.5-68.8 26.6-80.7-26.7 1.5-57.5 18.1-75.1 38.6-19.4 22-30.8 49.2-28.4 79.7 28.9 2.2 55.3-12.6 76.9-37.6z" />
    </svg>
  );
}
function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l9.9-9.7L3.6 2.3zM14.7 13.3l2.5 2.5-12 6.8 9.5-9.3zm0-2.6L5.2 1.4l12 6.8-2.5 2.5zm5.9 1.3c0 .7-.4 1.4-1 1.7l-2.4 1.4-2.7-2.7L17 9.7l2.6 1.4c.6.3 1 1 1 1.7z"
      />
    </svg>
  );
}
function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 5 2 7.1L3 29l6.5-2.2c2 1.1 4.2 1.7 6.5 1.7 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1.3 1.3-3.8-.3-.4c-1.2-1.8-1.8-3.9-1.8-6 0-5.9 4.8-10.7 10.7-10.7 5.9 0 10.7 4.8 10.7 10.7s-4.7 10.7-10.6 10.7zm5.9-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
    </svg>
  );
}
function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
    </svg>
  );
}
