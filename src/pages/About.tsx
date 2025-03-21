
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind ein kleines, aber schlagkräftiges Team aus Hamburg mit der Leidenschaft, 
            digitale Lösungen zu entwickeln, die begeistern und Mehrwert schaffen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-muted-foreground mb-4">
                Gegründet aus der Überzeugung, dass digitale Lösungen nicht nur funktional, 
                sondern auch ästhetisch ansprechend und nutzerfreundlich sein sollten, haben 
                wir 2018 unser kleines Unternehmen in Hamburg ins Leben gerufen.
              </p>
              <p className="text-muted-foreground mb-4">
                Seitdem arbeiten wir mit Leidenschaft daran, Unternehmen dabei zu helfen, ihre 
                digitale Präsenz zu optimieren und durch maßgeschneiderte Websites und Web-Anwendungen 
                erfolgreich zu sein.
              </p>
              <p className="text-muted-foreground">
                Was uns auszeichnet, ist unsere persönliche Betreuung. Als kleines Team stehen 
                wir in direktem Kontakt mit unseren Kunden und können flexibel auf Wünsche und 
                Anforderungen eingehen.
              </p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Unser Büro in Hamburg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln und prägen die Zusammenarbeit mit unseren Kunden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Qualität</h3>
                <p className="text-muted-foreground">
                  Wir legen größten Wert auf technische Exzellenz und ästhetisches Design. 
                  Jedes Projekt wird mit höchster Sorgfalt umgesetzt.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Transparenz</h3>
                <p className="text-muted-foreground">
                  Offene Kommunikation und klare Absprachen sind uns wichtig. 
                  Wir halten, was wir versprechen.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Wir bleiben stets am Puls der Zeit und setzen neue Technologien 
                  gezielt ein, um optimale Ergebnisse zu erzielen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gemeinsam bringen wir die Expertise mit, um Ihr Projekt erfolgreich umzusetzen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Max Mustermann",
                role: "Geschäftsführer & Berater",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              },
              {
                name: "Laura Schmidt",
                role: "UI/UX Designerin",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              },
              {
                name: "Felix Weber",
                role: "Frontend-Entwickler",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="text-center py-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
