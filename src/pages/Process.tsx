
import { 
  ArrowRight, 
  Code, 
  Compass, 
  Layout, 
  LayoutGrid, 
  MessageSquare, 
  Rocket, 
  Search 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Arbeitsweise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparenz, Kollaboration und Qualität prägen unseren Arbeitsprozess von der ersten 
            Idee bis zum fertigen Projekt.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Der Weg zum erfolgreichen Projekt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unser bewährter Prozess sorgt für effiziente Zusammenarbeit und 
              herausragende Ergebnisse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">01</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Erstkontakt & Beratung</h3>
                  <p className="text-muted-foreground mb-4">
                    Im ersten Gespräch lernen wir uns kennen und erfassen Ihre Anforderungen und Ziele. 
                    Wir beraten Sie zu den technischen Möglichkeiten und erarbeiten erste Lösungsansätze.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Beratungsgespräch</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Anforderungsanalyse</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Zieldefinition</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">02</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Konzeption & Strategie</h3>
                  <p className="text-muted-foreground mb-4">
                    Basierend auf den gesammelten Informationen erarbeiten wir ein detailliertes Konzept 
                    und eine Strategie zur Umsetzung. Dies umfasst Struktur, Funktionalität und Design-Richtlinien.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Sitemap</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Wireframes</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Funktionsspezifikation</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">03</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Design & Prototyping</h3>
                  <p className="text-muted-foreground mb-4">
                    Wir gestalten das visuelle Erscheinungsbild Ihrer Website oder Anwendung. 
                    Interaktive Prototypen ermöglichen es Ihnen, die Bedienung und das Look & Feel 
                    bereits vor der Entwicklung zu erleben.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">UI Design</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">UX Optimierung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Interaktive Prototypen</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">04</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Entwicklung & Test</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere Entwickler setzen das Design in Code um und implementieren alle 
                    gewünschten Funktionen. Durch kontinuierliche Tests stellen wir sicher, 
                    dass alles einwandfrei funktioniert.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Frontend-Entwicklung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Backend-Implementierung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Qualitätssicherung</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">05</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Review & Feedback</h3>
                  <p className="text-muted-foreground mb-4">
                    Sie erhalten Zugang zu einer Testumgebung, um das Projekt zu prüfen. 
                    Ihr Feedback wird aufgenommen und in das Projekt eingearbeitet.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Testumgebung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Feedbackrunde</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Anpassungen</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">06</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Launch & Übergabe</h3>
                  <p className="text-muted-foreground mb-4">
                    Nach finaler Abnahme geht Ihr Projekt live. Wir sorgen für eine reibungslose 
                    Veröffentlichung und übergeben Ihnen alle notwendigen Zugänge und Dokumentationen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Deployment</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Dokumentation</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Einweisung</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">07</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Support & Wartung</h3>
                  <p className="text-muted-foreground mb-4">
                    Wir stehen Ihnen auch nach dem Launch zur Seite. Regelmäßige Wartung und 
                    Support sorgen dafür, dass Ihre Website oder Anwendung stets aktuell und sicher bleibt.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Updates</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Sicherheit</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Wartung</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">08</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Weiterentwicklung</h3>
                  <p className="text-muted-foreground mb-4">
                    Digitale Projekte entwickeln sich stetig weiter. Wir beraten Sie zu 
                    Optimierungen und neuen Funktionen, um Ihr Projekt langfristig erfolgreich zu halten.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Analyse</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Optimierung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Erweiterung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Tools & Methoden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir setzen auf moderne Technologien und bewährte Methoden, um optimale Ergebnisse zu erzielen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <LayoutGrid className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Design</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>Sketch</li>
                <li>InVision</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Entwicklung</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React & Next.js</li>
                <li>WordPress</li>
                <li>PHP & Laravel</li>
                <li>Node.js</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">SEO & Analytics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Analytics</li>
                <li>Searchmetrics</li>
                <li>SEMrush</li>
                <li>Hotjar</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Kommunikation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Slack</li>
                <li>Microsoft Teams</li>
                <li>Trello</li>
                <li>Asana</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Starten Sie Ihr Projekt mit uns</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Überzeugen Sie sich selbst von unserer strukturierten Arbeitsweise und dem Mehrwert, 
            den wir für Ihr Unternehmen schaffen können.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Unsere Leistungen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
