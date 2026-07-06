import { Link } from "@tanstack/react-router";
import freenvoLogo from "@/assets/freenvo-logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Freenvo home">
          <img
            src={freenvoLogo}
            alt="Freenvo"
            className="h-6 w-auto sm:h-7"
            loading="eager"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#how"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </div>

        <a
          href="https://app.freenvo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1da1ff] to-[#0077ff] px-4 py-2 text-xs font-medium text-white shadow-sm transition-transform hover:-translate-y-px sm:gap-3 sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Try for free</span>
          <span className="hidden sm:inline">Try for free — 14 days free</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}
