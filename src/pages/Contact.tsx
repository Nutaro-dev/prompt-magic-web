
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Nachricht erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt mit uns besprechen? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schreiben Sie uns</h2>
              <p className="text-muted-foreground mb-8">
                Füllen Sie das Formular aus, und wir melden uns innerhalb eines Werktages bei Ihnen.
                Für dringende Anfragen kontaktieren Sie uns gerne auch telefonisch.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">E-Mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Betreff</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Worum geht es?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Nachricht</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht an uns"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              <p className="text-muted-foreground mb-8">
                Sie können uns auf verschiedenen Wegen erreichen. Wählen Sie die für Sie 
                bequemste Methode.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <address className="not-italic text-muted-foreground">
                      <p>Musterstraße 123</p>
                      <p>20457 Hamburg</p>
                      <p>Deutschland</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@hamburgdevs.de" className="hover:text-primary">
                        info@hamburgdevs.de
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+4940123456789" className="hover:text-primary">
                        +49 (0) 40 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Bürozeiten</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>09:00 - 18:00 Uhr</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Samstag & Sonntag:</span>
                    <span>Geschlossen</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="border border-border rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18898.10736358957!2d9.9643783937699!3d53.54763837533581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f0ce5bf9bb7%3A0xf3b8aae4c3202484!2sHafenCity%2C%20Hamburg!5e0!3m2!1sde!2sde!4v1627456834846!5m2!1sde!2sde" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
