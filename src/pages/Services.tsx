
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  Code, 
  Layout, 
  Compass, 
  Search, 
  LineChart, 
  ShoppingCart, 
  PenTool, 
  Smartphone 
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Entwicklung",
    description: "Maßgeschneiderte, responsive Websites mit modernem Design und optimaler Benutzerfreundlichkeit."
  },
  {
    icon: Code,
    title: "Web-Anwendungen",
    description: "Individuelle Webanwendungen, die Ihre Geschäftsprozesse optimieren und digitalisieren."
  },
  {
    icon: Compass,
    title: "Digitale Strategie",
    description: "Ganzheitliche Beratung für Ihren erfolgreichen Auftritt im digitalen Raum."
  },
  {
    icon: Search,
    title: "SEO-Optimierung",
    description: "Analyse und Optimierung Ihrer Website für bessere Sichtbarkeit in Suchmaschinen."
  },
  {
    icon: LineChart,
    title: "Performance-Analyse",
    description: "Datenbasierte Auswertungen zur kontinuierlichen Verbesserung Ihrer digitalen Präsenz."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce-Lösungen",
    description: "Professionelle Online-Shops mit benutzerfreundlichem Design und sicheren Zahlungsmöglichkeiten."
  },
  {
    icon: PenTool,
    title: "UX/UI-Design",
    description: "Nutzerorientiertes Design für eine optimale User Experience und intuitive Bedienung."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimierung",
    description: "Perfekte Darstellung und Funktionalität auf allen Endgeräten."
  }
];

const Services = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Konzeption bis zur Umsetzung bieten wir maßgeschneiderte digitale Lösungen 
            für Ihr Unternehmen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unser Ansatz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bei der Entwicklung digitaler Lösungen legen wir großen Wert auf einen strukturierten 
              und transparenten Prozess.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full">
                  <span className="font-bold text-xl text-primary">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Analyse & Beratung</h3>
                  <p className="text-muted-foreground">
                    Wir nehmen uns Zeit, Ihre Anforderungen und Ziele zu verstehen. Nach einer 
                    gründlichen Analyse erarbeiten wir gemeinsam mit Ihnen die optimale Strategie.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full">
                  <span className="font-bold text-xl text-primary">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Konzeption & Design</h3>
                  <p className="text-muted-foreground">
                    Basierend auf den erarbeiteten Anforderungen erstellen wir ein Konzept und 
                    erste Designentwürfe. Diese stimmen wir eng mit Ihnen ab.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full">
                  <span className="font-bold text-xl text-primary">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entwicklung & Test</h3>
                  <p className="text-muted-foreground">
                    Unsere Entwickler setzen das finalisierte Konzept technisch um. 
                    Qualitätssicherung und Tests sind ein integraler Bestandteil dieses Prozesses.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full">
                  <span className="font-bold text-xl text-primary">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                  <p className="text-muted-foreground">
                    Nach der finalen Abnahme geht Ihr Projekt live. Wir stehen Ihnen auch nach 
                    dem Launch mit Support und Wartung zur Seite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr Projekt?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
            Wir freuen uns darauf, Ihre Ideen in die Realität umzusetzen.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
