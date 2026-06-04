import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, Section } from "@/components/Layout";
import { ShieldCheck, Stethoscope, Activity, Clock, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Life Care Hospital RCS Ltd. — Goalpara, Assam" },
      { name: "description", content: "24/7 multi-speciality NGO/Trust hospital in Goalpara empanelled under Ayushman Bharat PM-JAY. 294+ surgeries, 114+ diseases treated." },
      { property: "og:title", content: "Life Care Hospital RCS Ltd. — Goalpara, Assam" },
      { property: "og:description", content: "24/7 multi-speciality hospital empanelled under Ayushman Bharat PM-JAY." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Surgeries", value: "294+" },
  { label: "Diseases Treated", value: "114+" },
  { label: "Treatment Options", value: "86+" },
  { label: "Emergency Services", value: "36+" },
  { label: "Diagnostic Tests", value: "29+" },
  { label: "Patient Recommendations", value: "28+" },
];

const highlights = [
  { icon: ShieldCheck, title: "Ayushman Bharat Empanelled", desc: "Government PM-JAY health scheme accepted for affordable, cashless care." },
  { icon: Clock, title: "Open 24 Hours · 7 Days", desc: "Round-the-clock emergency and consultation services every day of the week." },
  { icon: Stethoscope, title: "Multi-Speciality Care", desc: "Gynaecology, cardiology, laparoscopic surgery and more — all under one roof." },
  { icon: Activity, title: "Modern Technology", desc: "Advanced diagnostic equipment supporting 29+ tests and 294+ surgical procedures." },
];

function Index() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-soft via-background to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Ayushman Bharat PM-JAY Empanelled
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Compassionate, 24/7 multi-speciality care in Goalpara
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Life Care Hospital RCS Ltd. is an NGO/Trust hospital offering surgeries, emergency
              services, diagnostics and specialist consultations — every hour of every day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:9435314642" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
                <Phone className="h-4 w-4" /> Call 9435314642
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                <div className="text-2xl font-semibold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Why patients choose Life Care</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">A non-profit hospital trusted for affordable, comprehensive healthcare in Assam.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-border bg-card p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{h.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-2xl border border-border bg-accent/10 p-6 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Need urgent care or want to book a consultation?</h2>
              <p className="mt-1 text-muted-foreground">Our emergency team is available 24 hours, every day of the week.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Contact the hospital <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
