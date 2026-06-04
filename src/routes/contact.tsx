import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Section } from "@/components/Layout";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Life Care Hospital Goalpara" },
      { name: "description", content: "Call 9435314642 or 7039970399. Visit Life Care Hospital near Satsang Vihar, Agia Road, Baladmari, Goalpara-783121, Assam. Open 24/7." },
      { property: "og:title", content: "Contact — Life Care Hospital Goalpara" },
      { property: "og:description", content: "Reach Life Care Hospital — 24/7 phone, address and online appointment options." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Layout>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Life Care Hospital"
        description="Reach us 24/7 by phone, visit one of our two Goalpara locations, or send us a message and we’ll respond shortly."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <InfoCard icon={Phone} title="Phone">
              <a href="tel:9435314642" className="block text-foreground hover:text-primary">9435314642 — General Enquiry</a>
              <a href="tel:7039970399" className="block text-foreground hover:text-primary">7039970399 — Alternative</a>
            </InfoCard>

            <InfoCard icon={MapPin} title="Primary Address">
              C/O Life Care Hospital, Near Satsang Vihar,<br />
              Agia Road, Baladmari, Goalpara-783121, Assam
            </InfoCard>

            <InfoCard icon={MapPin} title="Alternative Address">
              Opposite Bodoland Guest House,<br />
              Uday Nagar, Khanapara, Baladmari, Goalpara
            </InfoCard>

            <InfoCard icon={Clock} title="Hours">
              Open 24 Hours · 7 Days a Week
            </InfoCard>

            <InfoCard icon={Calendar} title="Online Appointment">
              Available via the Meddco platform. For Ayushman Bharat queries, visit the hospital or the Drlogy listing.
            </InfoCard>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="text-lg font-semibold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details and we’ll get back to you. For emergencies, please call directly.
            </p>

            <div className="mt-6 space-y-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="Optional" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message / Notes</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Send message
              </button>
              {sent && (
                <p className="rounded-md bg-accent/15 px-3 py-2 text-sm text-foreground">
                  Thank you — your message has been recorded. We’ll be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>
    </Layout>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
