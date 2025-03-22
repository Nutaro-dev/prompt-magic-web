
import { FileText, Shield, Calendar, Scale, Clock, Copyright, Settings, AlertCircle, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere vertraglichen Bedingungen für die Zusammenarbeit
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">1. Geltungsbereich</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für sämtliche Verträge zwischen 
                  Nutaro, Beyerstieg 12, 21107 Hamburg (nachfolgend "Anbieter") und seinen Kunden
                  (nachfolgend "Auftraggeber") über die Erbringung von Dienstleistungen im Bereich der Webentwicklung 
                  und Online-Beratung.
                </p>
                <p className="text-muted-foreground">
                  Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Anbieter stimmt 
                  ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">2. Vertragsschluss</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot, 
                  sondern eine Aufforderung zur Abgabe eines Angebots dar.
                </p>
                <p className="text-muted-foreground">
                  Der Vertrag kommt durch die Auftragsbestätigung des Anbieters oder mit Beginn der Ausführung der 
                  Dienstleistungen zustande.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">3. Leistungsumfang</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung des Angebots, des Auftrags oder 
                  sonstigen Auftragsunterlagen.
                </p>
                <p className="text-muted-foreground">
                  Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">4. Mitwirkungspflichten des Auftraggebers</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Der Auftraggeber ist verpflichtet, den Anbieter bei der Erbringung der vereinbarten Leistungen 
                  angemessen zu unterstützen. Dazu gehört insbesondere die rechtzeitige Bereitstellung von 
                  Informationen, Materialien und Daten, die für die Leistungserbringung erforderlich sind.
                </p>
                <p className="text-muted-foreground">
                  Kommt der Auftraggeber seinen Mitwirkungspflichten nicht nach, so kann dies zu Verzögerungen und 
                  Mehrkosten führen, die vom Auftraggeber zu tragen sind.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">5. Vergütung und Zahlungsbedingungen</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Die Vergütung für die Leistungen des Anbieters richtet sich nach den im jeweiligen Auftrag 
                  vereinbarten Preisen.
                </p>
                <p className="text-muted-foreground">
                  Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung 
                  ohne Abzug zur Zahlung fällig.
                </p>
                <p className="text-muted-foreground">
                  Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über 
                  dem Basiszinssatz zu berechnen.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">6. Termine und Fristen</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Liefer- und Leistungstermine sind nur verbindlich, wenn sie vom Anbieter ausdrücklich als 
                  verbindlich bestätigt wurden.
                </p>
                <p className="text-muted-foreground">
                  Verzögert sich die Leistungserbringung aus Gründen, die der Auftraggeber zu vertreten hat, kann 
                  der Anbieter eine angemessene Verschiebung der Termine verlangen.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Copyright className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">7. Nutzungsrechte</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Der Anbieter räumt dem Auftraggeber mit vollständiger Bezahlung das ausschließliche, zeitlich und 
                  räumlich unbeschränkte Recht ein, die für ihn erstellten Leistungen zu nutzen.
                </p>
                <p className="text-muted-foreground">
                  Die Übertragung der Nutzungsrechte an Dritte bedarf der schriftlichen Zustimmung des Anbieters.
                </p>
                <p className="text-muted-foreground">
                  Der Anbieter ist berechtigt, auf die für den Auftraggeber erstellten Leistungen in geeigneter Weise 
                  als Referenz hinzuweisen, sofern nicht ausdrücklich etwas anderes vereinbart wurde.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">8. Gewährleistung und Haftung</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Der Anbieter haftet für Mängel der erbrachten Leistungen nach den gesetzlichen Vorschriften.
                </p>
                <p className="text-muted-foreground">
                  Die Haftung für leicht fahrlässige Pflichtverletzungen ist ausgeschlossen, sofern diese keine 
                  vertragswesentlichen Pflichten, Schäden aus der Verletzung des Lebens, des Körpers oder der 
                  Gesundheit oder Garantien betreffen oder Ansprüche nach dem Produkthaftungsgesetz berührt sind.
                </p>
                <p className="text-muted-foreground">
                  Die Haftung ist der Höhe nach auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">9. Schlussbestimmungen</h2>
              </div>
              <Separator className="my-4" />
              <div className="ml-12 space-y-4">
                <p className="text-muted-foreground">
                  Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-muted-foreground">
                  Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang 
                  mit diesem Vertrag ist Hamburg, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen 
                  Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
                <p className="text-muted-foreground">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird dadurch die Wirksamkeit 
                  der übrigen Bestimmungen nicht berührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame 
                  Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-right">
            <p className="text-sm text-muted-foreground">
              Stand: Juli 2023
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
