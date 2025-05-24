
import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Youtube, Mail, Phone, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "Data Science & Analytics", level: 95 },
    { name: "Machine Learning & AI", level: 90 },
    { name: "Python Programming", level: 92 },
    { name: "Java Programming", level: 85 },
    { name: "Cybersecurity", level: 80 },
    { name: "Data Visualization", level: 88 }
  ];

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IIT Madras",
      achievement: "Silver Medal (88.8%)",
      color: "bg-yellow-500"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "IBM",
      achievement: "Certified",
      color: "bg-blue-500"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "IBM",
      achievement: "Certified",
      color: "bg-blue-500"
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      achievement: "Certified",
      color: "bg-green-500"
    }
  ];

  const achievements = [
    {
      title: "1st Place",
      event: "District Level Youth Festival",
      category: "Dance",
      icon: "🏆"
    },
    {
      title: "2nd Prize",
      event: "District Level Yuva Utsav",
      category: "Dance",
      icon: "🥈"
    },
    {
      title: "Winner",
      event: "QIS Fest 2025",
      category: "Dance",
      icon: "🏆"
    },
    {
      title: "Runner-up",
      event: "Aditya Colours",
      category: "Dance",
      icon: "🥉"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-yellow-400">Bharath Chilaka</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-yellow-400 font-medium">— Introduction</div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Creative
                  <br />
                  <span className="text-yellow-400">Technologist.</span>
                </h1>
                <div className="w-16 h-1 bg-yellow-400"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-300">
                  Data Science Enthusiast | AI Innovator | NSS Volunteer
                </p>
                <p className="text-gray-400 max-w-lg">
                  Computer Science student at RGUKT IIIT Ongole with IIT Madras Data Science certification. 
                  Passionate about AI, machine learning, and creating solutions that make a difference.
                </p>
                
                <Button 
                  onClick={() => scrollToSection("about")}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-none group"
                >
                  My story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Bobby-111" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/bharath-chilaka" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://youtube.com/@bharath.chilaka01" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-2xl animate-bounce">
                  🎓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate Computer Science student at RGUKT IIIT Ongole with an outstanding academic record (GPA: 9.7). 
                  My journey in technology is complemented by a strong foundation in data science, earning a Silver Medal (88.8%) 
                  in Python for Data Science from IIT Madras.
                </p>
                <p>
                  As a project intern at Edunet Foundation, I've gained valuable industry experience working on real-world 
                  AI and data science projects. Beyond academics, I'm an active NSS volunteer and an official club member 
                  of KALADHARANI (cultural club of Yuva Pragnan), showcasing my leadership and cultural engagement.
                </p>
                <p>
                  My diverse interests span from developing AI solutions for agriculture to competitive dancing, 
                  reflecting a well-rounded personality that blends technical expertise with creative expression.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h4 className="font-medium">B.Tech Computer Science & Engineering</h4>
                    <p className="text-gray-400">RGUKT IIIT Ongole • Expected 2027 • GPA: 9.7</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium">Pre-University Course</h4>
                    <p className="text-gray-400">RGUKT IIIT Ongole • 2023 • GPA: 9.32</p>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-medium">Matriculation</h4>
                    <p className="text-gray-400">Montessori EM School • 2021 • GPA: 10.0</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">8+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4+</div>
                  <div className="text-sm text-gray-400">Dance Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">88.8%</div>
                  <div className="text-sm text-gray-400">IIT Madras Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-yellow-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-yellow-400">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                          {cert.issuer.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{cert.title}</h4>
                          <p className="text-gray-400 text-sm">{cert.issuer}</p>
                          <Badge variant="secondary" className="mt-1 text-yellow-400 bg-yellow-400/10">
                            {cert.achievement}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Project</h2>
          
          <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Plant Disease Detection</CardTitle>
                  <CardDescription className="text-gray-400">
                    AI-powered solution for early detection of plant diseases
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300">
                Developed an innovative AI-powered solution for early detection of plant diseases using advanced 
                image recognition and machine learning techniques. This project contributes to sustainable agriculture 
                and food security by enabling farmers to identify and treat plant diseases before they spread.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-500/20 text-blue-400">Python</Badge>
                <Badge className="bg-green-500/20 text-green-400">Machine Learning</Badge>
                <Badge className="bg-purple-500/20 text-purple-400">Computer Vision</Badge>
                <Badge className="bg-orange-500/20 text-orange-400">Data Analytics</Badge>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Extracurriculars</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                  <p className="text-white font-medium mb-1">{achievement.event}</p>
                  <p className="text-gray-400 text-sm">{achievement.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="font-bold text-lg mb-2">Project Intern</h3>
                <p className="font-medium">Edunet Foundation</p>
                <p className="text-sm opacity-80">Real-world AI & Data Science Projects</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="font-bold text-lg mb-2">Club Member</h3>
                <p className="font-medium">KALADHARANI</p>
                <p className="text-sm opacity-80">Cultural Club of Yuva Pragnan</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-bold text-lg mb-2">NSS Volunteer</h3>
                <p className="font-medium">Community Service</p>
                <p className="text-sm opacity-80">Social Initiatives & Leadership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 text-lg">
              Ready to collaborate on innovative projects or discuss opportunities? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:bharathchilaka01@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                        bharathchilaka01@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918367755747" className="text-gray-400 hover:text-yellow-400 transition-colors">
                        +91 8367755747
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services I Offer</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data Science & Analytics Consulting</li>
                  <li>• AI & Machine Learning Solutions</li>
                  <li>• Web & App Development</li>
                  <li>• Tech Content Creation</li>
                  <li>• Innovation Collaboration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Quick Contact</h4>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none"
                    ></textarea>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Bobby-111" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/bharath-chilaka" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://youtube.com/@bharath.chilaka01" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Youtube className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Bharath Chilaka. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
