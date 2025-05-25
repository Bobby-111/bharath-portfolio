
import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Youtube, Mail, Phone, Download, ExternalLink, Zap, Code2, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

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
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', formData);
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Bharath Chilaka',
        to_email: 'bharathchilaka01@gmail.com', // Added missing recipient email
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        'service_600fydo', // Service ID
        'template_8vhw0ab', // Template ID
        templateParams,
        'tT67xeDfcZscCXc8g' // Public Key
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error details:', error);
      
      // More specific error handling
      let errorMessage = "Something went wrong. Please try again or contact me directly.";
      
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        if (error.message.includes('recipients')) {
          errorMessage = "Email configuration error. Please contact me directly.";
        } else if (error.message.includes('network')) {
          errorMessage = "Network error. Please check your connection and try again.";
        }
      }
      
      toast({
        title: "Message Failed to Send",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [{
    name: "Data Science & Analytics",
    level: 95,
    icon: "📊",
    color: "from-cyan-400 to-blue-500"
  }, {
    name: "Machine Learning & AI",
    level: 90,
    icon: "🤖",
    color: "from-purple-400 to-pink-500"
  }, {
    name: "Python Programming",
    level: 92,
    icon: "🐍",
    color: "from-green-400 to-emerald-500"
  }, {
    name: "Java Programming",
    level: 85,
    icon: "☕",
    color: "from-orange-400 to-red-500"
  }, {
    name: "Cybersecurity",
    level: 80,
    icon: "🛡️",
    color: "from-red-400 to-rose-500"
  }, {
    name: "Data Visualization",
    level: 88,
    icon: "📈",
    color: "from-yellow-400 to-orange-500"
  }];
  const certifications = [{
    title: "Python for Data Science",
    issuer: "IIT Madras",
    achievement: "Silver Medal (88.8%)",
    gradient: "from-yellow-400 to-orange-500",
    icon: "🏅"
  }, {
    title: "Introduction to Generative AI",
    issuer: "IBM",
    achievement: "Certified",
    gradient: "from-blue-400 to-blue-600",
    icon: "🤖"
  }, {
    title: "Cybersecurity Essentials",
    issuer: "IBM",
    achievement: "Certified",
    gradient: "from-red-400 to-red-600",
    icon: "🔒"
  }, {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    achievement: "Certified",
    gradient: "from-green-400 to-green-600",
    icon: "🧠"
  }];
  const achievements = [{
    title: "1st Place",
    event: "District Level Youth Festival",
    category: "Dance",
    icon: "🏆",
    gradient: "from-yellow-400 to-orange-500"
  }, {
    title: "2nd Prize",
    event: "District Level Yuva Utsav",
    category: "Dance",
    icon: "🥈",
    gradient: "from-gray-300 to-gray-500"
  }, {
    title: "Winner",
    event: "QIS Fest 2025",
    category: "Dance",
    icon: "🏆",
    gradient: "from-purple-400 to-pink-500"
  }, {
    title: "Runner-up",
    event: "Aditya Colours",
    category: "Dance",
    icon: "🥉",
    gradient: "from-amber-400 to-yellow-500"
  }];
  
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg z-50 border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Bharath Chilaka
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Achievements", "Contact"].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-medium transition-all duration-300 relative group ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-cyan-400 font-medium animate-pulse flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  — Introduction
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Creative
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Technologist.
                  </span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Data Science Enthusiast | AI Innovator | NSS Volunteer
                </p>
                <p className="text-gray-300 max-w-lg">
                  Computer Science student at RGUKT IIIT Ongole with IIT Madras Data Science certification. 
                  Passionate about AI, machine learning, and creating solutions that make a difference.
                </p>
                
                <Button onClick={() => scrollToSection("about")} className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <Brain className="mr-2 h-4 w-4" />
                  My story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Bobby-111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 p-2 rounded-lg">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/bharath-chilaka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 p-2 rounded-lg">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://youtube.com/@bharath.chilaka01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 p-2 rounded-lg">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
                    <img src="/lovable-uploads/d9b3b480-bc36-4884-b4c2-f459b24a08eb.png" alt="Bharath Chilaka" className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-2xl animate-bounce shadow-lg shadow-yellow-400/50">
                  🎓
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-xl animate-pulse shadow-lg shadow-green-400/50">
                  <Code2 className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
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
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4 bg-gradient-to-r from-cyan-400/10 to-transparent p-3 rounded-r-lg">
                    <h4 className="font-medium">B.Tech Computer Science & Engineering</h4>
                    <p className="text-gray-400">RGUKT IIIT Ongole • Expected 2027 • GPA: 9.7</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4 bg-gradient-to-r from-purple-400/10 to-transparent p-3 rounded-r-lg">
                    <h4 className="font-medium">Pre-University Course</h4>
                    <p className="text-gray-400">RGUKT IIIT Ongole • 2023 • GPA: 9.32</p>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4 bg-gradient-to-r from-green-400/10 to-transparent p-3 rounded-r-lg">
                    <h4 className="font-medium">Matriculation</h4>
                    <p className="text-gray-400">Montessori EM School • 2021 • GPA: 10.0</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/30">
                  <div className="text-3xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-400">8+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg border border-pink-400/30">
                  <div className="text-3xl font-bold text-pink-400">4+</div>
                  <div className="text-sm text-gray-400">Dance Awards</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-400/30">
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
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills & Certifications</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse`} style={{
                    width: `${skill.level}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400 flex items-center gap-2">
                <Badge className="w-6 h-6 bg-transparent p-0" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{cert.title}</h4>
                          <p className="text-gray-400 text-sm">{cert.issuer}</p>
                          <Badge className={`mt-1 bg-gradient-to-r ${cert.gradient} text-white border-0`}>
                            {cert.achievement}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Featured Project</h2>
          
          <Card className="bg-slate-800/50 border-slate-700 max-w-4xl mx-auto hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-2xl shadow-lg shadow-green-400/50 animate-pulse">
                  🌱
                </div>
                <div>
                  <CardTitle className="text-2xl text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plant Disease Detection</CardTitle>
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
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:scale-105 transition-transform">Python</Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 hover:scale-105 transition-transform">Machine Learning</Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 hover:scale-105 transition-transform">Computer Vision</Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 hover:scale-105 transition-transform">Data Analytics</Badge>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  View Demo
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:scale-105 transition-all duration-300">
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
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements & Extracurriculars</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => <Card key={index} className="bg-slate-800/50 border-slate-700 text-center hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 group">
                <CardContent className="p-6">
                  <div className={`text-4xl mb-4 inline-block p-3 rounded-full bg-gradient-to-br ${achievement.gradient} shadow-lg group-hover:animate-bounce`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                  <p className="text-white font-medium mb-1">{achievement.event}</p>
                  <p className="text-gray-400 text-sm">{achievement.category}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-yellow-400/50 text-black hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4 animate-bounce">💼</div>
                <h3 className="font-bold text-lg mb-2 text-yellow-400">Project Intern</h3>
                <p className="font-medium text-zinc-950">Edunet Foundation</p>
                <p className="text-sm text-slate-700">Real-world AI & Data Science Projects</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-blue-400/50 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4 animate-pulse">🎭</div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">Club Member</h3>
                <p className="font-medium text-gray-950">KALADHARANI</p>
                <p className="text-sm opacity-80 text-zinc-900">Cultural Club of Yuva Pragnan</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-teal-600/20 border-green-400/50 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4 animate-spin-slow">🤝</div>
                <h3 className="font-bold text-lg mb-2 text-green-400">NSS Volunteer</h3>
                <p className="font-medium text-slate-950">Community Service</p>
                <p className="opacity-80 text-sm text-gray-800">Social Initiatives & Leadership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-gray-400 text-lg">
              Ready to collaborate on innovative projects or discuss opportunities? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg hover:from-cyan-500/20 transition-all duration-300">
                    <Mail className="h-6 w-6 text-cyan-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:bharathchilaka01@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        bharathchilaka01@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg hover:from-purple-500/20 transition-all duration-300">
                    <Phone className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918367755747" className="text-gray-400 hover:text-purple-400 transition-colors">
                        +91 8367755747
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Services I Offer</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-cyan-400">•</span> Data Science & Analytics Consulting</li>
                  <li className="flex items-center gap-2"><span className="text-purple-400">•</span> AI & Machine Learning Solutions</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">•</span> Web & App Development</li>
                  <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Tech Content Creation</li>
                  <li className="flex items-center gap-2"><span className="text-pink-400">•</span> Innovation Collaboration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-cyan-400">Quick Contact</h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300" 
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300" 
                    />
                    <textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none transition-all duration-300"
                    ></textarea>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Bobby-111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 p-3 rounded-lg">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/bharath-chilaka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 p-3 rounded-lg">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://youtube.com/@bharath.chilaka01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 p-3 rounded-lg">
                  <Youtube className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/30 bg-gradient-to-r from-slate-900 to-purple-900/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Bharath Chilaka. Crafted with passion and innovation. 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> ✨</span>
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
