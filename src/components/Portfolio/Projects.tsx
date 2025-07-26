import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ECOSANGAM",
      description: "ECOSANGAM IS AN AI-DRIVEN SUSTAINABILITY PLATFORM THAT EMPOWERS INDIVIDUALS TO TRACK, MANAGE AND OFFSET THEIR CARBON FOOTPRINT. ",
      image: "/ecc.png",
      technologies: ["REACT", "NODE.JS", "MONGODB", "TAILWINDCSS", "FRAMER MOTION", "LANGCHAIN", "GEMINI API"],
      liveUrl: "https://github.com/Krishna27Singh/EcoSangam",
      githubUrl: "https://github.com/Krishna27Singh/EcoSangam",
      featured: true
    },
    {
      title: "BreateSafe",
      description: "BREATHESAFE IS A ONE-STOP PLATFORM THAT TRANSFORMS REAL-TIME POLLUTION DATA INTO MEANINGFUL HEALTH ADVICE AND COMMUNITY ACTION.",
      image: "/aqttt.jpeg",
      technologies: ["REACT", "NODE.JS", "NODEMAILER", "MONGODB", "LANGCHAIN", "OAUTH", "GEMINI API"],
      liveUrl: "https://github.com/Krishna27Singh/breathsafe",
      githubUrl: "https://github.com/Krishna27Singh/breathsafe",
      featured: true
    },
    {
      title: "BIDBUDDY",
      description: "A REAL-TIME, VOICE-DRIVEN AUCTION PLATFORM POWERED BY OMNIDIMENSION. IT ENABLES USERS TO DISCOVER PRODUCTS, RECEIVE LIVE BID UPDATES, AND PLACE NEW BIDS — ALL VIA NATURAL VOICE COMMANDS.",
      image: "/biddd.png",
      technologies: ["REACT", "TYPESCRIPT", "REST API", "NODEJS", "OMNIDIMENSION"],
      liveUrl: "https://github.com/Krishna27Singh/BidBuddy",
      githubUrl: "https://github.com/Krishna27Singh/BidBuddy",
      featured: true
    },
    {
      title: "HOSTEL ATTENDANCE SYSTEM",
      description: "THE ONLINE HOSTEL ATTENDANCE SYSTEM IS AN INNOVATIVE PROJECT AIMED AT AUTOMATING HOSTEL ATTENDANCE TRACKING. THIS SYSTEM OFFERS A SECURE, EFFICIENT, AND SCALABLE SOLUTION TO MANAGE HOSTEL ATTENDANCE RECORDS.",
      image: "/hostatt.jpeg",
      technologies: ["REACT", "TAILWINDCSS", "PYTHON", "FLASK","MONGODB", "OPENCV"],
      liveUrl: "https://github.com/Krishna27Singh/hostel-attendance-system",
      githubUrl: "https://github.com/Krishna27Singh/hostel-attendance-system",
      featured: true
    },
    {
      title: "MOODBLOOM",
      description: "MOODBLOOM IS A COMPREHENSIVE MOOD-TRACKING APP DESIGNED TO PROMOTE MENTAL WELL-BEING BY COMBINING MULTIPLE FEATURES.",
      image: "/mdd.jpeg",
      technologies: ["REACT", "EJS", "NODEJS", "D3.JS", "MONGODB","SOCKET.IO", "GEMINI API"],
      liveUrl: "https://github.com/Krishna27Singh/moodbloom",
      githubUrl: "https://github.com/Krishna27Singh/moodbloom",
      featured: true
    },
    {
      title: "ECOSPHERE",
      description: "ECHOSPHERE IS A DYNAMIC BLOGGING PLATFORM WHERE USERS CAN SECURELY SIGN UP, LOG IN, AND SHARE THEIR THOUGHTS THROUGH BLOGS.",
      image: "/blgg.jpeg",
      technologies: ["NODEJS", "EXPRESSJS", "EJS", "BOOTSTRAP", "MONGODB"],
      liveUrl: "https://github.com/Krishna27Singh/blogging_app",
      githubUrl: "https://github.com/Krishna27Singh/blogging_app",
      featured: true
    },
    {
      title: "LINKLOOM",
      description: "THIS URL SHORTENER APP SIMPLIFIES LINK SHARING BY ALLOWING USERS TO CONVERT LENGTHY URLS INTO COMPACT, EASY-TO-SHARE LINKS.",
      image: "/lll.jpeg",
      technologies: ["NODEJS", "EJS", "MONGODB", "EXPRESSJS"],
      liveUrl: "https://github.com/Krishna27Singh/Url-Generator",
      githubUrl: "https://github.com/Krishna27Singh/Url-Generator",
      featured: true
    },
    {
      title: "TASK MANAGEMENT",
      description: "THE TASK MANAGEMENT APP IS A PRACTICAL TOOL FOR ORGANIZING DAILY ACTIVITIES. IT ENABLES USERS TO ADD, UPDATE, AND DELETE TASKS EFFORTLESSLY.",
      image: "/tdd.jpeg",
      technologies: ["PYTHON", "FLASK", "POSTGRESQL", "NUMPY"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "SNAKE GAME",
      description: "THIS JAVASCRIPT-BASED SNAKE GAME MADE FROM SCRATCH RECREATES THE CLASSIC GAMING EXPERIENCE WITH SMOOTH CONTROLS AND DYNAMIC GAMEPLAY.",
      image: "/snn.jpeg",
      technologies: ["HTML5", "CSS3", "JAVASCRIPT"],
      liveUrl: "https://github.com/Krishna27Singh/snake-game",
      githubUrl: "https://github.com/Krishna27Singh/snake-game",
      featured: true
    },
    {
      title: "TIC TAC TOE",
      description: "THE TIC-TAC-TOE GAME IS A JAVASCRIPT-POWERED INTERACTIVE APPLICATION WHERE TWO PLAYERS CAN COMPETE IN REAL-TIME.",
      image: "/tkk.jpeg",
      technologies: ["HTML5", "CSS3", "JAVASCRIPT"],
      liveUrl: "https://github.com/Krishna27Singh/Tic-Tac-Toe",
      githubUrl: "https://github.com/Krishna27Singh/Tic-Tac-Toe",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">PROJECTS</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="border-box-thick bg-background">
              <div className="aspect-video bg-background border-b-2 border-black flex items-center justify-center">
                <span className="text-4xl text-foreground font-bold"><img src= {project.image} alt="" /></span>
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
                      className="border border-black px-2 py-1 text-xs font-medium uppercase tracking-wide bg-background hover:bg-black hover:text-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-box px-4 py-2 bg-black text-background font-bold uppercase text-sm tracking-wide hover:bg-background hover:text-black transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  VIEW PROJECT
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* View More Button */}
        <div className="text-center">
          <button className="border-box-thick px-8 py-3 bg-background text-black font-bold uppercase tracking-wide hover:bg-black hover:text-background transition-colors">
            <a href="https://github.com/Krishna27Singh">VIEW ALL PROJECTS ON GITHUB</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
