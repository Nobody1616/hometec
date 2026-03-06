import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  "Qualität und Sorgfalt in jedem Detail",
  "Transparente Kommunikation mit unseren Kunden",
  "Termintreue und zuverlässige Umsetzung",
  "Faire Preise und ehrliche Beratung",
  "Persönlicher Ansprechpartner für jedes Projekt",
  "Regionale Verbundenheit mit Elsdorf",
];

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Über Home-tec GbR
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Lernen Sie uns kennen – Ihr Bauunternehmen aus Elsdorf für zuverlässige Bau- und Renovierungsarbeiten.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Unsere Geschichte</h2>
              <p className="mt-4 text-muted-foreground">
                Home-tec GbR wurde mit dem Ziel gegründet, Bauvorhaben in Elsdorf und Umgebung mit höchster Qualität und persönlicher Betreuung umzusetzen. Als lokales Unternehmen kennen wir die Bedürfnisse unserer Kunden und die Anforderungen der Region.
              </p>
              <p className="mt-3 text-muted-foreground">
                Unsere Philosophie ist einfach: Wir arbeiten so, wie wir es uns selbst für unser eigenes Zuhause wünschen würden – sorgfältig, ehrlich und mit Leidenschaft für gutes Handwerk.
              </p>
            </div>
            <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Team- / Firmenfoto einfügen" className="min-h-[280px]" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Unsere Werte
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-card">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Überzeugt? Sprechen Sie uns an!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Wir freuen uns darauf, Sie und Ihr Projekt kennenzulernen.
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

export default AboutPage;
