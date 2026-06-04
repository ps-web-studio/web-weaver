import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader, Section } from "@/components/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Life Care Hospital Goalpara" },
      { name: "description", content: "294+ surgeries, 114+ diseases, 86+ treatments, cardiology, gynaecology, laparoscopic surgery and 24/7 emergency care." },
      { property: "og:title", content: "Services — Life Care Hospital Goalpara" },
      { property: "og:description", content: "Comprehensive multi-speciality services at Life Care Hospital." },
    ],
  }),
  component: ServicesPage,
});

const serviceGroups = [
  {
    title: "Emergency Services",
    items: [
      ["Emergency Services", "36+ emergency service options"],
      ["24/7 Operation", "Hospital open 24 hours"],
    ],
  },
  {
    title: "Surgical Services",
    items: [
      ["Surgeries Available", "294+ surgical procedures"],
      ["Laparoscopic Surgery", "Specialized laparoscopic procedures"],
    ],
  },
  {
    title: "Medical Specialties & Treatments",
    items: [
      ["Diseases Treated", "114+ diseases"],
      ["Treatment Options", "86+ treatment options"],
    ],
  },
  {
    title: "Diagnostic Services",
    items: [
      ["Diagnostic Tests", "29+ advanced diagnostic tests"],
      ["Technology", "Modern medical technology"],
    ],
  },
];

const cardiology = [
  ["Hypertension Treatment", "High blood pressure management"],
  ["Heart Attack Treatment", "Emergency cardiac care"],
  ["Heart Diseases Treatment", "Comprehensive cardiac care"],
  ["Syncope Treatment", "Fainting / loss of consciousness"],
  ["Balloon Angioplasty", "Cardiac intervention procedure"],
];

const gynae = [
  "Gynaecology services",
  "Obstetric services (pregnancy care)",
  "Laparoscopic surgical procedures",
];

function Table({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full divide-y divide-border text-sm">
        <tbody className="divide-y divide-border">
          {rows.map(([k, v], i) => (
            <tr key={k} className={i % 2 ? "bg-secondary/40" : "bg-card"}>
              <td className="px-4 py-3 font-medium text-foreground">{k}</td>
              <td className="px-4 py-3 text-muted-foreground">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="What we offer"
        title="Services Offered"
        description="A multi-speciality offering combining emergency care, surgery, diagnostics, cardiology and women's health."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceGroups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{g.title}</h2>
              <Table rows={g.items as [string, string][]} />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Cardiology Services</h2>
            <p className="mb-3 text-sm text-muted-foreground">Led by Dr. Mustafa Ahmed Mazumder</p>
            <Table rows={cardiology as [string, string][]} />
          </div>
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Gynaecology & Obstetrics</h2>
            <p className="mb-3 text-sm text-muted-foreground">Led by Dr. Julfikkar Rahman Borah</p>
            <ul className="space-y-2 rounded-xl border border-border bg-card p-5 text-sm">
              {gynae.map((g) => (
                <li key={g} className="flex gap-2 text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
