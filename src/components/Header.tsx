import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon-cropped.png";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Leistungen", path: "/leistungen" },
  { label: "Projekte", path: "/projekte" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container-narrow flex h-20 items-center justify-between px-4 md:h-24 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoIcon} alt="Home-tec Logo" className="h-[18rem] w-auto max-h-full" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:017643338686" className="ml-3">
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:017643338686" className="mt-2 block">
            <Button className="w-full gap-2">
              <Phone className="h-4 w-4" />
              0176 43338686
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
