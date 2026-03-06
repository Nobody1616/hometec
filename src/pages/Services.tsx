import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Wohnungsbau",
    desc: "Von der Grundsteinlegung bis zur schlüsselfertigen Übergabe – wir realisieren Wohnbauprojekte in Elsdorf und Umgebung mit höchster Sorgfalt und Qualität. Unsere Erfahrung garantiert einen reibungslosen Ablauf.",
  },
  {
    title: "Renovierung & Sanierung",
    desc: "Ob Komplettrenovierung oder gezielte Sanierungsmaßnahmen – wir bringen Ihre Immobilie auf den neuesten Stand. Energetische Sanierung, Badsanierung und mehr gehören zu unserem Portfolio.",
  },
  {
    title: "Innenausbau",
    desc: "Wir gestalten Innenräume nach Ihren Vorstellungen. Trockenbau, Bodenverlegung, Malerarbeiten und individuelle Einbauten – alles aus einer Hand.",
  },
  {
    title: "Individuelle Bauprojekte",
    desc: "Ihr Projekt ist einzigartig? Wir bieten maßgeschneiderte Lösungen für besondere Anforderungen. Sprechen Sie uns an – gemeinsam finden wir den besten Weg.",
  },
];

const ServicesPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Unsere Leistungen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Home-tec GbR bietet ein breites Spektrum an Bau- und Renovierungsleistungen in Elsdorf. Qualität, Zuverlässigkeit und persönliche Betreuung stehen bei uns an erster Stelle.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Bild einfügen" className="min-h-[240px]" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-2xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <Link to="/kontakt" className="mt-6 inline-block">
                  <Button className="gap-2">
                    Angebot anfragen <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Wir beraten Sie gerne persönlich und unverbindlich.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/kontakt">
              <Button variant="hero" size="lg">Kontakt aufnehmen</Button>
            </Link>
            <a href="tel:017643338686">
              <Button variant="heroOutline" size="lg">
                <Phone className="h-5 w-5" />
                0176 43338686
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
