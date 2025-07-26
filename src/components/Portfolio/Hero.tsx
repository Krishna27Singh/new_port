import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const roles = [
  "FULL STACK DEVELOPER",
  "MERN STACK DEVELOPER",
  "PYTHON DEVELOPER",
  "COMPETITIVE PROGRAMMER",
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingTimeout: NodeJS.Timeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      typingTimeout = setTimeout(() => {
        setText((prev) => currentRole.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && text === currentRole) {
      typingTimeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative p-0 m-0">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="portfolio-heading mb-6">HELLO, I'M KRISHNA SINGH</h1>

          {/* Typing animation with black cursor */}
          <h2 className="portfolio-subheading mb-8 text-xl md:text-2xl font-semibold">
            {text}
            <span className="ml-1 inline-block w-1 h-6 bg-black animate-blink align-middle" />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            CRAFTING DIGITAL EXPERIENCES WITH MODERN TECHNOLOGIES. PASSIONATE ABOUT BUILDING
            SEAMLESS APPLICATIONS WITH CLEAN CODE, ELEGANT DESIGN, AND INNOVATIVE SOLUTIONS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-3">
              VIEW MY WORK
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              DOWNLOAD RESUME
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Scoped CSS for blinking animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
