import { Link, Outlet } from "@tanstack/react-router";
import { Heart, Phone, MapPin, Clock } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Heart className="h-5 w-5" />
          </span>
          <span className="text-base sm:text-lg">Life Care Hospital</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-secondary text-foreground" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:9435314642"
          className="hidden items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
        >
          <Phone className="h-4 w-4" /> 9435314642
        </a>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 md:hidden">
        {navItems.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-1.5 text-sm bg-secondary text-foreground" }}
            activeOptions={{ exact: i.to === "/" }}
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold text-foreground">Life Care Hospital RCS Ltd.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            NGO/Trust multi-speciality hospital empanelled under Ayushman Bharat PM-JAY.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <h4 className="mb-2 font-medium text-foreground flex items-center gap-2"><MapPin className="h-4 w-4" /> Address</h4>
          <p>Near Satsang Vihar, Agia Road,<br />Baladmari, Goalpara-783121, Assam</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <h4 className="mb-2 font-medium text-foreground flex items-center gap-2"><Clock className="h-4 w-4" /> Hours</h4>
          <p>Open 24 Hours · 7 Days a Week</p>
          <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4" /> 9435314642 · 7039970399</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Life Care Hospital RCS Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border bg-primary-soft/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {eyebrow && <p className="text-xs font-medium uppercase tracking-wider text-primary">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base text-muted-foreground">{description}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>{children}</section>
  );
}
