import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Nachricht gesendet", description: "Vielen Dank! Wir melden uns in Kürze bei Ihnen." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Haben Sie Fragen oder möchten Sie ein Angebot anfragen? Wir sind für Sie da!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">So erreichen Sie uns</h2>
              <div className="mt-6 flex flex-col gap-5">
                <a href="tel:017643338686" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-elevated">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Telefon</p>
                    <p className="font-semibold text-foreground">0176 43338686</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Adresse</p>
                    <p className="font-semibold text-foreground">Birkenweg 7-11, 50189 Elsdorf</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6">
                <ImagePlaceholder aspectRatio="aspect-video" label="Kartenansicht einfügen" className="min-h-[200px]" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Telefonnummer</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">E-Mail *</label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Nachricht *</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Vorhaben..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2 gap-2">
                  <Send className="h-4 w-4" />
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
