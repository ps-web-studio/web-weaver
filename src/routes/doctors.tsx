import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Section } from "@/components/Layout";
import { Stethoscope, Star, Clock, GraduationCap } from "lucide-react";
import doctorCare from "@/assets/doctor-care.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors & Specialists — Life Care Hospital" },
      { name: "description", content: "Meet our specialists: Gynaecologist Dr. Julfikkar Rahman Borah, Dr. Ekram, and Cardiologist Dr. Mustafa Ahmed Mazumder." },
      { property: "og:title", content: "Doctors & Specialists — Life Care Hospital" },
      { property: "og:description", content: "Experienced specialists across gynaecology, surgery and cardiology." },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    name: "Dr. Julfikkar Rahman Borah",
    specialty: "Gynaecologist & Obstetrician · Laparoscopic Surgeon",
    rows: [
      ["Qualification", "M.D. — Guwahati University (1999)"],
      ["Registration", "12687 (AMC)"],
      ["Experience", "27 Years in Healthcare"],
      ["Rating", "4.8 stars (29 customer reviews)"],
      ["Consultation Timing", "Open 24 Hours"],
    ],
  },
  {
    name: "Dr. Ekram",
    specialty: "Specialist Doctor",
    rows: [
      ["Qualification", "MBBS, MS"],
      ["Role", "Specialist Doctor at Life Care Hospital"],
    ],
  },
  {
    name: "Dr. Mustafa Ahmed Mazumder",
    specialty: "Cardiologist",
    rows: [
      ["Consultation Fee", "₹500 (clinic) / ₹500 (online)"],
      ["Timing", "10:00 AM – 12:00 PM & 2:00 PM – 4:00 PM"],
    ],
  },
];

function DoctorsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our team"
        title="Doctors & Specialists"
        description="Experienced consultants across gynaecology, surgery and cardiology."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Stethoscope className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{d.name}</h3>
              <p className="mt-1 text-sm text-primary">{d.specialty}</p>
              <dl className="mt-4 space-y-2 text-sm">
                {d.rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Feature icon={Star} title="4.8 Patient Rating" desc="Based on 29 verified reviews" />
          <Feature icon={GraduationCap} title="27+ Years Experience" desc="Senior specialist leadership" />
          <Feature icon={Clock} title="24/7 Availability" desc="Consultations every day" />
        </div>
      </Section>
    </Layout>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: typeof Star; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
      <Icon className="mt-0.5 h-5 w-5 text-primary" />
      <div>
        <div className="font-medium text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}
