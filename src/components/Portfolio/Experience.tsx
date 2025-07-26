import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SENIOR FULL STACK DEVELOPER",
      company: "TECH INNOVATIONS INC.",
      location: "SAN FRANCISCO, CA",
      period: "2022 - PRESENT",
      type: "FULL-TIME",
      description: [
        "LED DEVELOPMENT OF SCALABLE WEB APPLICATIONS SERVING 100K+ USERS",
        "ARCHITECTED AND IMPLEMENTED MICROSERVICES INFRASTRUCTURE",
        "MENTORED JUNIOR DEVELOPERS AND CONDUCTED CODE REVIEWS",
        "IMPROVED APPLICATION PERFORMANCE BY 40% THROUGH OPTIMIZATION"
      ],
      technologies: ["REACT", "NODE.JS", "AWS", "DOCKER", "POSTGRESQL"]
    },
    {
      title: "FULL STACK DEVELOPER",
      company: "DIGITAL SOLUTIONS CO.",
      location: "NEW YORK, NY",
      period: "2020 - 2022",
      type: "FULL-TIME",
      description: [
        "DEVELOPED AND MAINTAINED E-COMMERCE PLATFORMS",
        "COLLABORATED WITH CROSS-FUNCTIONAL TEAMS ON PRODUCT FEATURES",
        "IMPLEMENTED CI/CD PIPELINES AND AUTOMATED TESTING",
        "REDUCED BUG REPORTS BY 30% THROUGH QUALITY ASSURANCE PRACTICES"
      ],
      technologies: ["REACT", "PYTHON", "DJANGO", "REDIS", "MONGODB"]
    },
    {
      title: "FRONTEND DEVELOPER",
      company: "STARTUP VENTURES",
      location: "AUSTIN, TX",
      period: "2019 - 2020",
      type: "FULL-TIME",
      description: [
        "BUILT RESPONSIVE WEB APPLICATIONS FOR MULTIPLE CLIENTS",
        "COLLABORATED WITH DESIGNERS TO IMPLEMENT PIXEL-PERFECT UIS",
        "OPTIMIZED WEB PERFORMANCE AND ACCESSIBILITY STANDARDS",
        "PARTICIPATED IN AGILE DEVELOPMENT PROCESS"
      ],
      technologies: ["JAVASCRIPT", "REACT", "CSS3", "WEBPACK"]
    }
  ];

  const education = [
    {
      degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      school: "UNIVERSITY OF TECHNOLOGY",
      location: "CALIFORNIA, USA",
      period: "2015 - 2019",
      achievements: [
        "SUMMA CUM LAUDE - GPA 3.9/4.0",
        "PRESIDENT OF COMPUTER SCIENCE CLUB",
        "HACKATHON WINNER - BEST INNOVATIVE SOLUTION 2018"
      ]
    },
    {
      degree: "FULL STACK WEB DEVELOPMENT BOOTCAMP",
      school: "CODING ACADEMY",
      location: "ONLINE",
      period: "2019",
      achievements: [
        "TOP 5% OF CLASS",
        "CAPSTONE PROJECT: E-COMMERCE PLATFORM",
        "COLLABORATIVE DEVELOPMENT WITH REAL CLIENTS"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">EXPERIENCE & EDUCATION</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-8 flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              WORK EXPERIENCE
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-box bg-background p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground uppercase tracking-wide">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium uppercase tracking-wide">
                        {exp.company}
                      </p>
                    </div>
                    <span className="border border-black px-2 py-1 text-xs font-bold uppercase mt-2 sm:mt-0 w-fit bg-background">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="border border-black text-xs px-2 py-1 uppercase bg-background">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              EDUCATION
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-box bg-background p-6">
                  <h4 className="text-lg font-bold text-foreground uppercase tracking-wide mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium uppercase tracking-wide mb-4">
                    {edu.school}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">
                CERTIFICATIONS
              </h4>
              <div className="space-y-3">
                {[
                  "AWS CERTIFIED SOLUTIONS ARCHITECT",
                  "GOOGLE CLOUD PROFESSIONAL DEVELOPER", 
                  "MICROSOFT AZURE FUNDAMENTALS",
                  "MONGODB CERTIFIED DEVELOPER"
                ].map((cert, index) => (
                  <div key={index} className="border border-black p-3 bg-background">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {cert}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;