
import { ArrowRight, Code, Compass, Layout, MessageSquare, Rocket, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Layout,
    title: "Website Entwicklung",
    description: "Maßgeschneiderte Websites, die Ihre Marke perfekt repräsentieren und Besucher begeistern."
  },
  {
    icon: Code,
    title: "Web-Anwendungen",
    description: "Individuelle Webanwendungen, die Ihre Geschäftsprozesse optimieren und digitalisieren."
  },
  {
    icon: Database,
    title: "Backend-Lösungen",
    description: "Skalierbare Server- und Datenbanklösungen mit Firebase, Supabase, MongoDB oder PostgreSQL."
  }
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Wir entwickeln <span className="text-primary">digitale Lösungen</span>, die begeistern
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Unsere kleine, aber feine Agentur aus Hamburg kreiert Websites und digitale Strategien, 
              die Ihrem Unternehmen zum Erfolg verhelfen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Projekt anfragen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Unsere Leistungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte digitale Lösungen für Ihr Unternehmen - von der Konzeption bis zur Umsetzung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/services">
                Alle Leistungen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unser Arbeitsprozess</h2>
              <p className="text-muted-foreground mb-8">
                Wir arbeiten transparent und kollaborativ. Unsere bewährte Methodik sorgt dafür, dass Ihr Projekt 
                pünktlich, im Budget und in höchster Qualität umgesetzt wird.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Compass className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">1. Beratung & Strategie</h3>
                    <p className="text-muted-foreground text-sm">Wir analysieren Ihre Bedürfnisse und entwickeln eine maßgeschneiderte Strategie.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Layout className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">2. Konzeption & Entwicklungsplanung</h3>
                    <p className="text-muted-foreground text-sm">Wir planen die technische Struktur und die notwendigen Entwicklungsschritte.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">3. Entwicklung & Test</h3>
                    <p className="text-muted-foreground text-sm">Unsere Entwickler setzen Ihr Projekt technisch perfekt um und testen gründlich.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">4. Launch & Einrichtung</h3>
                    <p className="text-muted-foreground text-sm">Wir begleiten Sie beim Start und der initialen Einrichtung Ihres Projekts.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="mt-8">
                <Link to="/process">Mehr über unsere Arbeitsweise</Link>
              </Button>
            </div>
            
            <div className="bg-muted rounded-lg p-8 border border-border">
              <h3 className="text-xl font-medium mb-4">Warum Kunden uns vertrauen</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Technische Expertise</h4>
                    <p className="text-muted-foreground text-sm">Als Informatik-Studenten bringen wir aktuelles Fachwissen und innovative Ansätze mit.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Moderne Technologien</h4>
                    <p className="text-muted-foreground text-sm">Wir setzen auf React, Next.js und andere moderne Frameworks für zukunftssichere Lösungen.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 h-fit rounded-lg">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Transparente Kommunikation</h4>
                    <p className="text-muted-foreground text-sm">Regelmäßige Updates und offener Austausch in jeder Projektphase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr nächstes Projekt?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
