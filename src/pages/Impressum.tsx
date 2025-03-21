
const Impressum = () => {
  return (
    <div className="animate-fade-in py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">Andre Stierl</p>
            <p className="mb-2">Beyerstieg 14</p>
            <p>21107 Hamburg</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="mb-2">E-Mail: info@nutaro.de</p>
            <p className="mb-2">Telefon: auf Anfrage</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Inhaltlich verantwortlich</h2>
            <p>Andre Stierl</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-primary ml-1 hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
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
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
