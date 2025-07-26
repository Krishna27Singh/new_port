import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND DEVELOPMENT",
      skills: [
        "REACT", "TYPESCRIPT", "JAVASCRIPT", "HTML5", "CSS3", 
        "TAILWIND CSS", "STYLED COMPONENTS", "BOOTSTRAP", "RESPONSIVE DESIGN", "CHAKRA", "FRAMER MOTION", "EJS"
      ],
      icon: ""
    },
    {
      title: "BACKEND DEVELOPMENT", 
      skills: [
        "NODE.JS", "EXPRESS.JS", "PYTHON", "FLASK", "REST API",
        "OPENCV", "MICROSERVICES", "D3.JS", "JSON", "NUMPY", "MATPLOTLIB", "LANGCHAIN", "SOCKET.IO", "GEMINI API"
      ],
      icon: ""
    },
    {
      title: "DATABASE & CLOUD",
      skills: [
        "POSTGRESQL", "MONGODB", "AZURE",
        "DOCKER", "ATLAS"
      ],
      icon: ""
    },
    {
      title: "TOOLS & WORKFLOW",
      skills: [
        "GIT", "GITHUB", "VS CODE", "FIGMA", "POSTMAN", "RIVE", "BOTPRESS",
        "WEBPACK", "VITE",  "FIREBASE", "NPM", "NETLIFY", "RENDER", "OMNIDIMENSION"
      ],
      icon: ""
    },
    {
      title: "CORE COMPETENCIES",
      skills: [
        "DATA STRUCTURED AND ALGORITHMS", "OBJECT ORIENTED PROGRAMMING", "COMPUTER VISION", "WEB DEVELOPMENT", "ARTIFICIAL INTELLIGENCE", "LINEAR ALGEBRA", "NUMBER THEORY"
      ],
      icon: ""
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">SKILLS & TECHNOLOGIES</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="border-box bg-background p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="border border-black px-3 py-1 text-xs font-medium uppercase tracking-wide bg-background hover:bg-black hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;