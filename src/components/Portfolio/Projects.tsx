import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-COMMERCE PLATFORM",
      description: "A FULL-STACK E-COMMERCE SOLUTION WITH MODERN FEATURES INCLUDING REAL-TIME INVENTORY, PAYMENT PROCESSING, AND ADMIN DASHBOARD.",
      image: "/placeholder.svg",
      technologies: ["REACT", "NODE.JS", "POSTGRESQL", "STRIPE", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "TASK MANAGEMENT APP",
      description: "COLLABORATIVE PROJECT MANAGEMENT TOOL WITH REAL-TIME UPDATES, DRAG-AND-DROP INTERFACE, AND TEAM COLLABORATION FEATURES.",
      image: "/placeholder.svg",
      technologies: ["NEXT.JS", "TYPESCRIPT", "PRISMA", "SOCKET.IO"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "WEATHER DASHBOARD",
      description: "RESPONSIVE WEATHER APPLICATION WITH LOCATION-BASED FORECASTS, INTERACTIVE MAPS, AND PERSONALIZED ALERTS.",
      image: "/placeholder.svg",
      technologies: ["REACT", "TYPESCRIPT", "REST API", "CHARTS.JS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "MODERN PORTFOLIO WEBSITE WITH SMOOTH ANIMATIONS, RESPONSIVE DESIGN, AND OPTIMIZED PERFORMANCE.",
      image: "/placeholder.svg",
      technologies: ["REACT", "TAILWIND", "FRAMER MOTION", "VITE"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "SOCIAL MEDIA ANALYTICS",
      description: "COMPREHENSIVE ANALYTICS DASHBOARD FOR SOCIAL MEDIA PERFORMANCE WITH DATA VISUALIZATION AND REPORTING.",
      image: "/placeholder.svg",
      technologies: ["PYTHON", "DJANGO", "REACT", "D3.JS", "REDIS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "BLOCKCHAIN EXPLORER",
      description: "DECENTRALIZED APPLICATION FOR EXPLORING BLOCKCHAIN TRANSACTIONS WITH REAL-TIME DATA AND ANALYTICS.",
      image: "/placeholder.svg",
      technologies: ["WEB3", "ETHEREUM", "SOLIDITY", "REACT", "NODE.JS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A SHOWCASE OF MY BEST WORK, DEMONSTRATING MY ABILITY TO CREATE 
            INNOVATIVE SOLUTIONS ACROSS VARIOUS DOMAINS AND TECHNOLOGIES.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="border-box-thick bg-background">
              <div className="aspect-video bg-background border-b-2 border-black flex items-center justify-center">
                <span className="text-4xl text-foreground font-bold">PROJECT</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="border border-black px-2 py-1 text-xs font-medium uppercase tracking-wide bg-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="border-box px-4 py-2 bg-black text-background font-bold uppercase text-sm tracking-wide hover:bg-background hover:text-black transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    LIVE DEMO
                  </button>
                  <button className="border-box px-4 py-2 bg-background text-black font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-background transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    CODE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground uppercase tracking-wide mb-8">
            OTHER PROJECTS
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="border-box bg-background p-6">
                <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">
                  {project.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="border border-black text-xs px-2 py-1 uppercase bg-background"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="border border-black text-xs px-2 py-1 bg-background">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button className="border border-black p-2 hover:bg-black hover:text-background transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="border border-black p-2 hover:bg-black hover:text-background transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="border-box-thick px-8 py-3 bg-background text-black font-bold uppercase tracking-wide hover:bg-black hover:text-background transition-colors">
            VIEW ALL PROJECTS ON GITHUB
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
