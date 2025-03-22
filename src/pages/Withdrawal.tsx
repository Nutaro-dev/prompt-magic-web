
import { Calendar, FileText, ArrowRight, CornerDownRight, Mail, Home, Phone, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Withdrawal = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Widerrufsbelehrung</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Informationen zu Ihrem Widerrufsrecht bei der Beauftragung unserer Dienstleistungen
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Widerrufsrecht</h2>
              </div>
              <div className="mt-6 space-y-4">
                <p>
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                </p>
                <p>
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                </p>
                <p>
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
                </p>
                
                <Card className="bg-muted/30 border border-border">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="font-medium">Nutaro</p>
                      <p className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span>Beyerstieg 12, 21107 Hamburg</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>Telefon: auf Anfrage</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>E-Mail: <a href="mailto:info@nutaro.de" className="text-primary hover:underline">info@nutaro.de</a></span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <p>
                  mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren 
                  Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte 
                  Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
                <p>
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
                  Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Folgen des Widerrufs</h2>
              </div>
              <div className="mt-6 space-y-4">
                <p>
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
                  einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass 
                  Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), 
                  unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über 
                  Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe 
                  Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen 
                  wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung 
                  Entgelte berechnet.
                </p>
                <p>
                  Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben Sie 
                  uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von 
                  der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten 
                  Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Muster-Widerrufsformular</h2>
              </div>
              <div className="mt-6">
                <p className="italic mb-4">
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
                </p>
                
                <div className="border border-border rounded-lg p-6 bg-muted/30 space-y-4">
                  <p>
                    <span className="font-medium">An:</span><br />
                    Nutaro<br />
                    Beyerstieg 12<br />
                    21107 Hamburg<br />
                    E-Mail: info@nutaro.de
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der 
                    folgenden Dienstleistung (*)</span>
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Bestellt am (*)/erhalten am (*)</span>
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Name des/der Verbraucher(s)</span>
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Anschrift des/der Verbraucher(s)</span>
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</span>
                  </p>
                  
                  <p className="flex">
                    <CornerDownRight className="h-5 w-5 mr-2 shrink-0 mt-1" />
                    <span>Datum</span>
                  </p>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    (*) Unzutreffendes streichen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Besondere Hinweise</h2>
              </div>
              <div className="mt-6">
                <p>
                  Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn die 
                  Dienstleistung vollständig erbracht wurde und mit der Ausführung der Dienstleistung erst begonnen 
                  wurde, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig 
                  seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung 
                  durch den Unternehmer verliert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdrawal;
