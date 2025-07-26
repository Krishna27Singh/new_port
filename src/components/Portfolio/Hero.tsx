import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="portfolio-heading mb-6">
            HELLO, I'M YOUR NAME
          </h1>
          <h2 className="portfolio-subheading mb-8">
            FULL STACK DEVELOPER & CREATIVE TECHNOLOGIST
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            CRAFTING DIGITAL EXPERIENCES WITH MODERN TECHNOLOGIES. 
            PASSIONATE ABOUT CLEAN CODE, ELEGANT DESIGN, AND INNOVATIVE SOLUTIONS.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-3">
              VIEW MY WORK
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              DOWNLOAD RESUME
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;