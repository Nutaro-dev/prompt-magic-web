
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText, Users, Server, Bell } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            
            <AccordionItem value="section-1" className="border rounded-lg p-2 shadow-sm">
              <AccordionTrigger className="px-4 py-2 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xl font-semibold">1. Datenschutz auf einen Blick</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-4 pb-2 space-y-4">
                <h3 className="text-xl font-bold mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                
                <h3 className="text-xl font-bold mb-2">Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-bold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-muted-foreground mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>
                
                <h4 className="text-lg font-bold mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-muted-foreground mb-4">
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
                  vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                  Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                
                <h4 className="text-lg font-bold mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <h4 className="text-lg font-bold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="text-muted-foreground mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz 
                  können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren 
                  steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="section-2" className="border rounded-lg p-2 shadow-sm">
              <AccordionTrigger className="px-4 py-2 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xl font-semibold">2. Allgemeine Hinweise und Pflichtinformationen</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-4 pb-2 space-y-4">
                <h3 className="text-xl font-bold mb-2">Datenschutz</h3>
                <p className="text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                  Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                  sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. 
                  Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
                
                <h3 className="text-xl font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <div className="bg-muted/50 p-4 rounded-lg border mb-4">
                  <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="mb-1 font-medium">Andre Stierl</p>
                  <p className="mb-1">Beyerstieg 14</p>
                  <p className="mb-1">21107 Hamburg</p>
                  <p className="mb-1">E-Mail: info@nutaro.de</p>
                  <p>Telefon: auf Anfrage</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                  anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
                  E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="section-3" className="border rounded-lg p-2 shadow-sm">
              <AccordionTrigger className="px-4 py-2 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xl font-semibold">3. Datenerfassung auf dieser Website</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-4 pb-2 space-y-4">
                <h3 className="text-xl font-bold mb-2">Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
                  keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
                  effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt 
                  werden und die Ihr Browser speichert.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende 
                  Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie 
                  diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und 
                  Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
                  ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. 
                  Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
                
                <h3 className="text-xl font-bold mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
                  ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf 
                  Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit 
                  widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis 
                  zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
                  auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
                  entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche 
                  Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
