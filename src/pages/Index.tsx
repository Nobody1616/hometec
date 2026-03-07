import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users, Wrench, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";

const services = [
  { title: "Wohnungsbau", desc: "Professioneller Wohnungsbau in Elsdorf – von der Planung bis zur schlüsselfertigen Übergabe.", link: "/leistungen" },
  { title: "Renovierung & Sanierung", desc: "Fachgerechte Renovierung und Sanierung für Ihr Zuhause – zuverlässig und termingerecht.", link: "/leistungen" },
  { title: "Innenausbau", desc: "Hochwertiger Innenausbau nach Ihren Wünschen – Böden, Wände, Decken und mehr.", link: "/leistungen" },
  { title: "Individuelle Bauprojekte", desc: "Maßgeschneiderte Baulösungen für besondere Anforderungen und individuelle Projekte.", link: "/leistungen" },
];

const advantages = [
  { icon: Shield, title: "Qualität", desc: "Hochwertige Materialien und saubere Verarbeitung" },
  { icon: Clock, title: "Termintreue", desc: "Pünktliche Fertigstellung Ihrer Projekte" },
  { icon: Users, title: "Persönliche Betreuung", desc: "Direkter Ansprechpartner für Ihr Vorhaben" },
  { icon: Wrench, title: "Erfahrung", desc: "Kompetenz aus zahlreichen Projekten" },
];

const heroSlides = [
  { id: 1, label: "Hintergrundbild 1", src: hero1 },
  { id: 2, label: "Hintergrundbild 2", src: hero2 },
  { id: 3, label: "Hintergrundbild 3", src: hero3 },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
        {/* Background slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.label}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                animation: index === currentSlide ? "heroZoom 8s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/60 z-[1]" />

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary-foreground/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-[2] flex min-h-[600px] items-center lg:min-h-[700px]">
          <div className="container-narrow w-full px-4 md:px-8 lg:px-16">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
                Home-tec GbR – Ihr Partner für Wohnungsbau und Renovierung in Elsdorf
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
                Zuverlässige Beratung, saubere Umsetzung und professionelle Lösungen für Bau- und Renovierungsprojekte.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/kontakt">
                  <Button variant="hero" size="lg">
                    Angebot anfragen
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:017643338686">
                  <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                    Jetzt anrufen
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Kompetenz und Zuverlässigkeit aus Elsdorf
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Home-tec GbR steht für kompetente Beratung, zuverlässige Ausführung und persönliche Betreuung. Wir unterstützen unsere Kunden in Elsdorf und Umgebung bei Bau-, Renovierungs- und Modernisierungsprojekten.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Warum Home-tec?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-lg bg-card p-6 shadow-card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <a.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ backgroundColor: '#faf7f3' }}>
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Unsere Leistungen
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
                <ImagePlaceholder aspectRatio="aspect-video" label="Bild einfügen" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to={s.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Preview */}
      <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-narrow">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Unsere Projekte
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Einblicke in ausgewählte Bau- und Renovierungsprojekte aus Elsdorf und Umgebung.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
                <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Projektfoto einfügen" />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">Projekt {i}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Projektbeschreibung hier einfügen.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/projekte">
              <Button variant="outline" size="lg">
                Alle Projekte ansehen <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section-padding" style={{ backgroundColor: '#faf7f3' }}>
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Bereit für Ihr Projekt?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihr Vorhaben!
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/kontakt">
              <Button variant="hero" size="lg">
                Angebot anfragen <ArrowRight className="h-5 w-5" />
              </Button>
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

export default Index;
