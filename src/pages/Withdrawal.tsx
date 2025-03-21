
const Withdrawal = () => {
  return (
    <div className="animate-fade-in py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Widerrufsbelehrung</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Widerrufsrecht</h2>
            <p className="mb-4">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            </p>
            <p className="mb-4">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="mb-4">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
            </p>
            <div className="mb-4 pl-4">
              <p className="mb-2">HamburgDevs GmbH</p>
              <p className="mb-2">Musterstraße 123</p>
              <p className="mb-2">20457 Hamburg</p>
              <p className="mb-2">Telefon: +49 (0) 40 123 456 789</p>
              <p className="mb-2">E-Mail: info@hamburgdevs.de</p>
            </div>
            <p className="mb-4">
              mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren 
              Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte 
              Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="mb-4">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
              Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Folgen des Widerrufs</h2>
            <p className="mb-4">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, 
              einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass 
              Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), 
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über 
              Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe 
              Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen 
              wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung 
              Entgelte berechnet.
            </p>
            <p className="mb-4">
              Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben Sie 
              uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von 
              der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten 
              Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Muster-Widerrufsformular</h2>
            <p className="mb-4 italic">
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
            </p>
            <div className="border border-border rounded-lg p-6 bg-muted/30">
              <p className="mb-4">
                An:<br />
                HamburgDevs GmbH<br />
                Musterstraße 123<br />
                20457 Hamburg<br />
                E-Mail: info@hamburgdevs.de
              </p>
              <p className="mb-4">
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der 
                folgenden Dienstleistung (*)
              </p>
              <p className="mb-4">
                Bestellt am (*)/erhalten am (*)
              </p>
              <p className="mb-4">
                Name des/der Verbraucher(s)
              </p>
              <p className="mb-4">
                Anschrift des/der Verbraucher(s)
              </p>
              <p className="mb-4">
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
              </p>
              <p>
                Datum
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                (*) Unzutreffendes streichen.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Besondere Hinweise</h2>
            <p className="mb-4">
              Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn die 
              Dienstleistung vollständig erbracht wurde und mit der Ausführung der Dienstleistung erst begonnen 
              wurde, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig 
              seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung 
              durch den Unternehmer verliert.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
