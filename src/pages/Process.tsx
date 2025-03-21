
import { 
  ArrowRight, 
  Code, 
  Compass, 
  Layout, 
  Database,
  MessageSquare, 
  Rocket, 
  Server,
  GitBranch,
  Terminal
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
                  <h3 className="text-xl font-bold mb-2">Konzeption & Entwicklungsplanung</h3>
                  <p className="text-muted-foreground mb-4">
                    Basierend auf den gesammelten Informationen erarbeiten wir ein detailliertes technisches Konzept 
                    und definieren Datenmodelle, APIs und Systemarchitektur.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Technische Architektur</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Datenmodellierung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">API-Design</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">03</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Backend-Entwicklung</h3>
                  <p className="text-muted-foreground mb-4">
                    Wir implementieren die Server-Logik, Datenbanken und APIs, die als Grundlage 
                    für Ihre Anwendung dienen. Dabei setzen wir auf bewährte Technologien wie Firebase, 
                    Supabase, MongoDB oder PostgreSQL.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Datenbank-Setup</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">API-Entwicklung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Server-Logik</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">04</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Frontend-Entwicklung</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere Entwickler setzen die Benutzeroberfläche mit React oder Next.js um 
                    und implementieren alle benötigten Funktionen und Interaktionen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">React/Next.js</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Responsive Layout</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Interaktive Elemente</span>
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
                  <h3 className="text-xl font-bold mb-2">Testing & Qualitätssicherung</h3>
                  <p className="text-muted-foreground mb-4">
                    Umfassende Tests stellen sicher, dass Ihre Anwendung zuverlässig funktioniert 
                    und frei von Fehlern ist. Wir optimieren auch die Performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Funktionalitätstests</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Performance-Optimierung</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Bugfixing</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">06</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%+2rem)] w-0.5 bg-border"></div>
                  <h3 className="text-xl font-bold mb-2">Deployment & Launch</h3>
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
                  <h3 className="text-xl font-bold mb-2">Übergabe & Einrichtung</h3>
                  <p className="text-muted-foreground mb-4">
                    Wir übergeben Ihnen Ihr Projekt und unterstützen Sie bei der initialen Einrichtung.
                    Bei Bedarf bieten wir ein Schulungsgespräch zur Nutzung an.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Projektübergabe</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Einrichtungshilfe</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Wissensvermittlung</span>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bg-primary/10 p-2 rounded-full">
                    <span className="font-bold text-primary">08</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Optionale Weiterentwicklung</h3>
                  <p className="text-muted-foreground mb-4">
                    Auf Wunsch entwickeln wir Ihr Projekt weiter oder stehen für Bugfixes und
                    Updates zur Verfügung (nach Vereinbarung).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Erweiterungen</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Updates</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-md">Wartung (optional)</span>
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
            <h2 className="text-3xl font-bold mb-4">Unsere Technologien</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir setzen auf moderne Technologien, um optimale Ergebnisse zu erzielen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Query</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Backend & Datenbanken</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Firebase</li>
                <li>Supabase</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Server & Hosting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Vercel</li>
                <li>Netlify</li>
                <li>Firebase Hosting</li>
                <li>AWS</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="mb-4">
                <GitBranch className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Entwicklungstools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
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
