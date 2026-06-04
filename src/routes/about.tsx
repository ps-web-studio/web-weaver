import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Section } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Life Care Hospital RCS Ltd." },
      { name: "description", content: "Life Care Hospital RCS Ltd. is an NGO/Trust multi-speciality hospital in Goalpara, Assam, empanelled under Ayushman Bharat PM-JAY." },
      { property: "og:title", content: "About — Life Care Hospital RCS Ltd." },
      { property: "og:description", content: "NGO/Trust multi-speciality hospital serving Goalpara, Assam." },
    ],
  }),
  component: AboutPage,
});

const features: [string, string][] = [
  ["Ayushman Bharat Empanelled", "Government health scheme coverage for affordable care"],
  ["24/7 Operation", "Open 24 hours, 7 days a week"],
  ["NGO/Trust Hospital", "Non-profit healthcare facility"],
  ["Multi-Speciality", "Multiple medical specialties under one roof"],
  ["Modern Technology", "Advanced medical diagnostic equipment"],
  ["High Patient Satisfaction", "28+ recommendations · 4.8 rating"],
  ["Experienced Doctors", "27+ years healthcare experience"],
  ["Comprehensive Services", "294+ surgeries, 114+ diseases, 86+ treatments"],
];

const notes = [
  "Ayushman Bharat PM-JAY Empanelled — patients with Ayushman card can avail free/affordable treatment.",
  "24/7 emergency services available.",
  "NGO/Trust operated — non-profit healthcare facility.",
  "Two locations — main hospital near Satsang Vihar and another near Bodoland Guest House.",
  "High patient satisfaction — 4.8 stars based on 29 reviews.",
  "Experienced specialists — 27 years healthcare experience in gynaecology/obstetrics.",
];

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About us"
        title="A trusted multi-speciality hospital in Goalpara"
        description="Life Care Hospital RCS Ltd. is a reputed NGO/Trust hospital in Goalpara, Assam — empanelled under Ayushman Bharat PM-JAY and offering 294+ surgeries, 114+ diseases treated, 29+ diagnostic tests, 36+ emergency services and 86+ treatment options."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="min-w-full divide-y divide-border text-sm">
                <tbody className="divide-y divide-border">
                  {([
                    ["Full Name", "Life Care Hospital RCS Ltd."],
                    ["Type", "NGO/Trust Hospital"],
                    ["Specialization", "Multi-Speciality Hospital"],
                    ["Ayushman Bharat PM-JAY", "Empanelled (government health scheme)"],
                    ["Patient Recommendations", "28+ patients recommended"],
                  ] as [string, string][]).map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-secondary/40" : "bg-card"}>
                      <td className="px-4 py-3 font-medium">{k}</td>
                      <td className="px-4 py-3 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Key Features & Strengths</h2>
            <ul className="mt-4 space-y-3">
              {features.map(([t, d]) => (
                <li key={t} className="rounded-lg border border-border bg-card p-4">
                  <div className="font-medium text-foreground">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Important Notes</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {notes.map((n, i) => (
              <li key={n} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i + 1}</span>
                <span>{n}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-6">
          <h3 className="text-lg font-semibold">Related Healthcare Facility</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Critical Care Superspeciality Hospital</span> — a premier 110-bedded multi-specialty hospital in Goalpara, possibly part of the same healthcare network.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
