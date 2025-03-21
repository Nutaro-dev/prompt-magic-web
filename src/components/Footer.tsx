
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HamburgDevs</h3>
            <p className="text-muted-foreground mb-4">
              Wir gestalten digitale Erlebnisse, die begeistern und Unternehmen erfolgreicher machen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground">
              <p>Musterstraße 123</p>
              <p>20457 Hamburg</p>
              <p className="mt-2">Email: <a href="mailto:info@hamburgdevs.de" className="hover:text-primary">info@hamburgdevs.de</a></p>
              <p>Telefon: <a href="tel:+4940123456789" className="hover:text-primary">+49 (0) 40 123 456 789</a></p>
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
          <p>© {currentYear} HamburgDevs. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
