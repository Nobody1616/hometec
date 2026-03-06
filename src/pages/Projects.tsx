import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  { title: "Komplettsanierung Einfamilienhaus", desc: "Umfassende Sanierung eines Einfamilienhauses in Elsdorf – von der Fassade bis zum Innenausbau." },
  { title: "Wohnungsbau Neubau", desc: "Neubau einer Wohneinheit mit moderner Ausstattung und energieeffizienter Bauweise." },
  { title: "Badsanierung", desc: "Komplettrenovierung eines Badezimmers mit barrierefreier Gestaltung und hochwertigen Materialien." },
  { title: "Innenausbau Gewerbe", desc: "Ausbau von Gewerberäumen nach individuellen Anforderungen des Kunden." },
  { title: "Dachgeschossausbau", desc: "Ausbau eines Dachgeschosses zu vollwertigem Wohnraum mit Trockenbau und Dämmung." },
  { title: "Fassadensanierung", desc: "Erneuerung und Dämmung einer Gebäudefassade für verbesserte Energieeffizienz." },
];

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Unsere Projekte
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hier finden Sie eine Auswahl unserer Bau- und Renovierungsprojekte aus Elsdorf und Umgebung. Echte Projektfotos werden in Kürze ergänzt.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-elevated">
                <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Projektfoto einfügen" />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Ihr Projekt ist das nächste?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrem Vorhaben.
          </p>
          <div className="mt-8">
            <Link to="/kontakt">
              <Button variant="hero" size="lg">
                Kontakt aufnehmen <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
