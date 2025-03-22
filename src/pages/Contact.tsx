import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    recipient: "info@nutaro.de" // Default recipient
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecipientChange = (value) => {
    setFormData((prev) => ({ ...prev, recipient: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use a relative URL to maintain the same protocol (HTTPS)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Before trying to parse as JSON, verify the content type
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error sending message');
      }

      toast.success("Nachricht erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        recipient: "info@nutaro.de"
      });
    } catch (error) {
      toast.error("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.");
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
      <div className="animate-fade-in">
        {/* Hero Section with animated background */}
        <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '10s' }}></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              Kontakt
            </motion.h1>
            <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              Haben Sie Fragen oder möchten Sie ein Projekt mit uns besprechen?
              Wir freuen uns auf Ihre Nachricht!
            </motion.p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Schreiben Sie uns</h2>
                <p className="text-muted-foreground mb-8">
                  Füllen Sie das Formular aus, und wir melden uns innerhalb von 1-2 Werktagen bei Ihnen.
                  Für dringende Anfragen kontaktieren Sie uns gerne auch direkt per E-Mail.
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Empfänger</label>
                    <RadioGroup
                        defaultValue="info@nutaro.de"
                        value={formData.recipient}
                        onValueChange={handleRecipientChange}
                        className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="info@nutaro.de" id="info" />
                        <Label htmlFor="info">Allgemeine Anfrage (info@nutaro.de)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="booking@nutaro.de" id="booking" />
                        <Label htmlFor="booking">Projektanfrage (booking@nutaro.de)</Label>
                      </div>
                    </RadioGroup>
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
                <p className="text-muted-foreground mb-8">
                  Sie können uns auf verschiedenen Wegen erreichen. Wählen Sie die für Sie
                  bequemste Methode.
                </p>

                <div className="space-y-8">
                  <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Adresse</h3>
                      <address className="not-italic text-muted-foreground">
                        <p>Beyerstieg 12</p>
                        <p>21107 Hamburg</p>
                        <p>Deutschland</p>
                      </address>
                    </div>
                  </motion.div>

                  <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">E-Mail</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>
                          <a href="mailto:info@nutaro.de" className="hover:text-primary transition-colors">
                            info@nutaro.de
                          </a> (Allgemein)
                        </p>
                        <p>
                          <a href="mailto:booking@nutaro.de" className="hover:text-primary transition-colors">
                            booking@nutaro.de
                          </a> (Anfragen)
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefon</h3>
                      <p className="text-muted-foreground">
                        Auf Anfrage verfügbar
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Antwortzeit</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      Wir haben keine festen Öffnungszeiten, antworten aber in der Regel innerhalb von 1–2 Tagen auf Ihre Anfrage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
                className="border border-border rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38313.11683599199!2d9.960861899732662!3d53.55349859651315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ee1caa18aaf%3A0x9f29138464e75e63!2sHamburg%20Hauptbahnhof!5e0!3m2!1sen!2sde!4v1711023690532!5m2!1sen!2sde"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Contact;