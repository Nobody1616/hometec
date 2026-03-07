import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "hometec-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [statistik, setStatistik] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ notwendig: true, statistik })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pb-8 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[420px] mx-4 rounded-xl border border-border bg-card p-6 shadow-elevated">
        <h3 className="font-heading text-base font-bold text-foreground mb-2">
          Cookie Einstellungen
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground mb-5">
          Bitte wählen Sie aus, in welchem Umfang wir und externe Dienste Cookies
          und ähnliche Technologien verwenden und die so erhobenen Daten
          verarbeiten dürfen. Ihre Einwilligung können Sie in unseren
          Cookie-Einstellungen widerrufen bzw. verwalten. Weitere Informationen
          finden Sie in unserem Impressum und in unserer Datenschutzerklärung.
        </p>

        <div className="space-y-3 mb-5">
          <label className="flex items-center gap-3 cursor-not-allowed">
            <Checkbox checked disabled />
            <span className="text-sm text-muted-foreground">Notwendige Cookies</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={statistik}
              onCheckedChange={(v) => setStatistik(v === true)}
            />
            <span className="text-sm text-foreground">Statistik Cookies</span>
          </label>
        </div>

        <Button onClick={handleSave} className="w-full">
          Auswahl speichern
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
