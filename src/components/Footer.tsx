
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nutaro</h3>
            <p className="text-muted-foreground mb-4">
              Wir gestalten digitale Lösungen, die Unternehmen beim Einstieg in die digitale Welt unterstützen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground">
              <p>Beyerstieg 12</p>
              <p>21107 Hamburg</p>
              <div className="mt-2">
                <p>Allgemein: <a href="mailto:info@nutaro.de" className="hover:text-primary">info@nutaro.de</a></p>
                <p>Anfragen: <a href="mailto:booking@nutaro.de" className="hover:text-primary">booking@nutaro.de</a></p>
              </div>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/impressum" className="hover:text-primary">Impressum</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Datenschutzerklärung</Link></li>
              <li><Link to="/terms" className="hover:text-primary">AGB</Link></li>
              <li><Link to="/withdrawal" className="hover:text-primary">Widerrufsbelehrung</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Nutaro. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
