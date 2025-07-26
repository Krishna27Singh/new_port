import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="border-box-thick bg-background p-8">
              <div className="aspect-square bg-background border-box flex items-center justify-center">
                <span className="text-6xl text-foreground font-bold">PHOTO</span>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide">
              PASSIONATE DEVELOPER WITH A VISION
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'M A FULL STACK DEVELOPER WITH OVER X YEARS OF EXPERIENCE CREATING 
              DIGITAL SOLUTIONS THAT MAKE A DIFFERENCE. MY JOURNEY IN TECHNOLOGY 
              STARTED WITH A CURIOSITY ABOUT HOW THINGS WORK AND EVOLVED INTO A 
              PASSION FOR BUILDING EXCEPTIONAL USER EXPERIENCES.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              WHEN I'M NOT CODING, YOU CAN FIND ME EXPLORING NEW TECHNOLOGIES, 
              CONTRIBUTING TO OPEN SOURCE PROJECTS, OR SHARING KNOWLEDGE WITH 
              THE DEVELOPER COMMUNITY. I BELIEVE IN CONTINUOUS LEARNING AND 
              STAYING AHEAD OF THE CURVE IN THIS RAPIDLY EVOLVING FIELD.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  PROJECTS COMPLETED
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">X+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  YEARS EXPERIENCE
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  HAPPY CLIENTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;