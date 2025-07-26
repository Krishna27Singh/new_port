"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import CPProfile from "@/components/CPProfile";

const Contact = () => {
  const [showCP, setShowCP] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "krishnasingh97857@gmail.com",
      href: "mailto:krishnasingh97857@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 9785748390",
      href: "tel:+919785748390",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "JAIPUR, RAJASTHAN",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GITHUB",
      href: "https://github.com/Krishna27Singh",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/krishna-singh-51436733a",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "TWITTER",
      href: "https://x.com/kri_sh_na_27",
      color: "hover:text-blue-300",
    },
    {
      icon: Instagram,
      label: "INSTAGRAM",
      href: "https://instagram.com/krishnaaasiingh",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-8">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-6 mb-12 ">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card/30 rounded-lg border border-border/50 "
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-foreground uppercase tracking-wide mb-6">
                FOLLOW ME
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card/30 rounded-lg border border-border/50 ${social.color} transition-all duration-300 hover:border-primary/30 hover:bg-primary/5`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* CP Profiles Button */}
              <div className="mt-6">
                <Button
                  onClick={() => setShowCP((prev) => !prev)}
                  className="text-sm font-medium px-5 py-2 rounded-md"
                >
                  {showCP ? "HIDE CP PROFILES" : "VISIT MY CP PROFILES"}
                </Button>
              </div>

              {/* Conditionally Rendered CP Component */}
              {showCP && <CPProfile />}
            </div>

            {/* Availability */}
            <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-foreground uppercase tracking-wide">
                  AVAILABLE FOR WORK
                </h4>
              </div>
              <p className="text-muted-foreground">
                I'M CURRENTLY AVAILABLE FOR FULL-TIME REMOTE OPPORTUNITIES.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 border-box-thick rounded-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-6">
                  SEND A MESSAGE
                </h3>

                <form
                  className="space-y-6"
                  action="https://formspree.io/f/xoveqrla"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        FIRST NAME *
                      </label>
                      <Input
                        name="first_name"
                        placeholder="YOUR FIRST NAME"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        LAST NAME *
                      </label>
                      <Input
                        name="last_name"
                        placeholder="YOUR LAST NAME"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="YOUR.MAIL@EXAMPLE.COM"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      SUBJECT *
                    </label>
                    <Input
                      name="subject"
                      placeholder="SUBJECT OF DISCUSSION"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      MESSAGE *
                    </label>
                    <Textarea
                      name="message"
                      rows={6}
                      placeholder="TELL ME WHAT DO YOU WANT TO DISCUSS..."
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg font-medium">
                    SEND MESSAGE
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I'LL GET BACK TO YOU WITHIN FEW HOURS.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
