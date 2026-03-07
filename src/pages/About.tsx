import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Max Mustermann",
    role: "Geschäftsführung",
    description: "Verantwortlich für die strategische Ausrichtung und Kundenbetreuung des Unternehmens.",
  },
  {
    name: "Thomas Müller",
    role: "Projektleitung",
    description: "Koordiniert die Bauvorhaben vor Ort und sorgt für termingerechte Umsetzung.",
  },
  {
    name: "Anna Schmidt",
    role: "Verwaltung & Organisation",
    description: "Kümmert sich um Planung, Angebotserstellung und die interne Organisation.",
  },
];

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Page Header */}
      <section className="section-padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Über Home-tec GbR
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Lernen Sie uns kennen – Ihr Bauunternehmen aus Elsdorf für zuverlässige Bau- und Renovierungsarbeiten.
          </p>
        </div>
      </section>

      {/* Section 1 – Unternehmensgeschichte */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Unsere Geschichte</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Home-tec GbR wurde mit dem Ziel gegründet, Bauvorhaben in Elsdorf und Umgebung mit höchster Qualität und persönlicher Betreuung umzusetzen. Als lokales Unternehmen kennen wir die Bedürfnisse unserer Kunden und die Anforderungen der Region.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Unser Fokus liegt auf dem Wohnungsbau, Renovierungen und der zuverlässigen Umsetzung von Bauprojekten jeder Größenordnung. Was als kleine Initiative begann, hat sich zu einem leistungsstarken Team entwickelt, das für Qualität, Termintreue und transparente Zusammenarbeit steht.
              </p>
            </div>
            <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Bild: Bauprojekt / Bauarbeiten" className="min-h-[280px]" />
          </div>
        </div>
      </section>

      {/* Section 2 – Unser Team */}
      <section className="section-padding" style={{ backgroundColor: "#faf7f3" }}>
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Unser Team
          </h2>
          <div className="mt-8">
            <ImagePlaceholder aspectRatio="aspect-[21/9]" label="Teamfoto einfügen" className="min-h-[260px]" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground leading-relaxed">
            Hinter Home-tec GbR steht ein Team aus erfahrenen Handwerkern und Projektkoordinatoren, die gemeinsam daran arbeiten, jedes Bauvorhaben in höchster Qualität umzusetzen. Wir vereinen handwerkliches Können mit moderner Planung – für Ergebnisse, die überzeugen.
          </p>
        </div>
      </section>

      {/* Section 3 – Geschäftsführung / Ansprechpartner */}
      <section className="section-padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Geschäftsführung & Ansprechpartner
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Ihre direkten Kontaktpersonen für alle Fragen rund um Ihr Bauprojekt.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <ImagePlaceholder
                  aspectRatio="aspect-square"
                  label="Profilfoto"
                  className="mb-4 h-28 w-28 !rounded-full"
                />
                <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                <span className="mt-1 text-sm font-medium text-primary">{member.role}</span>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.description}</p>
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
