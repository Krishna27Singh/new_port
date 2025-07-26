import { ArrowUp, Heart } from "lucide-react";
import VisitorTracker from "./VisitorTracker";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        {/* Visitor Tracker */}
        <VisitorTracker />
        
        {/* Main Footer Content */}
        <div className="border-box-thick bg-background p-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">
                KRISHNA SINGH
              </h3>
              <button 
                onClick={scrollToTop} 
                className="border-box px-4 py-2 bg-background text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-background transition-colors flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                BACK TO TOP
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                QUICK LINKS
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "#home", label: "HOME" },
                  { href: "#about", label: "ABOUT" },
                  { href: "#skills", label: "SKILLS" },
                  { href: "#projects", label: "PROJECTS" },
                  { href: "#experience", label: "EXPERIENCE" },
                  { href: "#contact", label: "CONTACT" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                CONTACT INFO
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium uppercase tracking-wide">EMAIL:</span><br />
                  krishnasingh97857@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium uppercase tracking-wide">PHONE:</span><br />
                  +91 9785748390
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium uppercase tracking-wide">LOCATION:</span><br />
                  JAIPUR, RAJASTHAN
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t-2 border-black pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}

              {/* Made with Love */}
              <div className="flex items-center gap-2 px-14 text-sm text-muted-foreground uppercase">
                <span>MADE WITH</span>
                <Heart className="w-4 h-4 text-black fill-current" />
                <span>HARE KRISHNA</span>
              </div>

              {/* Resume Download */}
              <button className="border-box px-4 py-2 bg-background text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-background transition-colors">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed Position */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 border-box w-7 h-10 bg-black text-background hover:bg-background hover:text-black transition-colors"
        title="SCROLL TO TOP"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;