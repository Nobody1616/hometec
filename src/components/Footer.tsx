import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-narrow px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold">
              Home-tec <span className="text-primary">GbR</span>
            </h3>
            <p className="mt-3 text-sm text-background/70">
              Ihr zuverlässiger Partner für Wohnungsbau und Renovierung in Elsdorf und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/60">
              Navigation
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-primary transition-colors">Startseite</Link>
              <Link to="/leistungen" className="text-sm text-background/70 hover:text-primary transition-colors">Leistungen</Link>
              <Link to="/projekte" className="text-sm text-background/70 hover:text-primary transition-colors">Projekte</Link>
              <Link to="/ueber-uns" className="text-sm text-background/70 hover:text-primary transition-colors">Über uns</Link>
              <Link to="/kontakt" className="text-sm text-background/70 hover:text-primary transition-colors">Kontakt</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/60">
              Kontakt
            </h4>
            <div className="mt-3 flex flex-col gap-3">
              <a href="tel:017643338686" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                0176 43338686
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Birkenweg 7-11, 50189 Elsdorf
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Home-tec GbR. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
