
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };
  
  const declineCookies = () => {
    // Only essential cookies, if any
    localStorage.setItem("cookiesAccepted", "false");
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            <p>
              Diese Website verwendet Cookies, um Ihr Nutzererlebnis zu verbessern. 
              Weitere Informationen finden Sie in unserer{" "}
              <Link to="/privacy-policy" className="underline hover:text-primary">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Ablehnen
            </Button>
            <Button size="sm" onClick={acceptCookies}>
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
