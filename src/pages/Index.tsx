import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users, Wrench, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
                Home-tec GbR – Ihr Partner für Wohnungsbau und Renovierung in Elsdorf
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
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
                  <Button variant="heroOutline" size="lg">
                    <Phone className="h-5 w-5" />
                    Jetzt anrufen
                  </Button>
                </a>
              </div>
            </div>
            <ImagePlaceholder aspectRatio="aspect-[4/3]" label="Bild einfügen" className="min-h-[280px] lg:min-h-[380px]" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
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
      <section className="section-padding bg-secondary">
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
      <section className="section-padding">
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
      <section className="section-padding bg-secondary">
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
      <section className="section-padding">
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
