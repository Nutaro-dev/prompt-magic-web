
import { Mail, MapPin, User, Shield, AlertTriangle, Link, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impressum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere rechtlichen Angaben nach § 5 TMG
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-primary text-primary-foreground p-4">
                  <MapPin className="h-8 w-8 mb-2" />
                  <h2 className="text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
                </div>
                <div className="p-6 space-y-2">
                  <p className="flex items-start gap-2">
                    <User className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <span>Andre Stierl</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <span>Beyerstieg 14<br/>21107 Hamburg</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-primary text-primary-foreground p-4">
                  <Mail className="h-8 w-8 mb-2" />
                  <h2 className="text-2xl font-bold">Kontakt</h2>
                </div>
                <div className="p-6 space-y-2">
                  <p className="flex items-start gap-2">
                    <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <span>E-Mail: <a href="mailto:info@nutaro.de" className="text-primary hover:underline">info@nutaro.de</a></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <span>Telefon: auf Anfrage</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <User className="h-6 w-6 text-primary" />
                Inhaltlich verantwortlich
              </h2>
              <p className="ml-8">Andre Stierl</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Streitschlichtung
              </h2>
              <div className="ml-8 space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary ml-1 hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                Haftung für Inhalte
              </h2>
              <div className="ml-8 space-y-4">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem 
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von 
                  entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <Link className="h-6 w-6 text-primary" />
                Haftung für Links
              </h2>
              <div className="ml-8">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
