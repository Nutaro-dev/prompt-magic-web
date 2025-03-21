
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const projectItems = [
  {
    title: "E-Commerce Platform",
    description: "Modernes React-Frontend mit NextJS und einer komplexen Produktsuchfunktion",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Next.js", "PostgreSQL", "Supabase"]
  },
  {
    title: "Corporate Website",
    description: "Responsive Website mit Content-Management-System für ein Hamburger Unternehmen",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Dashboard-Anwendung",
    description: "Interaktives Dashboard mit Echtzeit-Datenvisualisierung und Benutzerauthentifizierung",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "MongoDB", "Express", "Recharts"]
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Animation variants for page elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section with animated background */}
      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/2 animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unsere Projekte
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Eine Auswahl unserer erfolgreich umgesetzten Webprojekte und digitalen Lösungen
          </motion.p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 sm:w-auto">
                <TabsTrigger value="all" className="px-8">Alle</TabsTrigger>
                <TabsTrigger value="websites" className="px-8">Websites</TabsTrigger>
                <TabsTrigger value="applications" className="px-8">Anwendungen</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projectItems.map((project, index) => (
                  <motion.div key={index} variants={item}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="websites">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projectItems.slice(0, 2).map((project, index) => (
                  <motion.div key={index} variants={item}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="applications">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projectItems.slice(2, 3).map((project, index) => (
                  <motion.div key={index} variants={item}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Bereit für Ihr eigenes Projekt?</h2>
            <p className="text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihre Projektidee. 
              Wir freuen uns darauf, gemeinsam mit Ihnen digitale Lösungen zu entwickeln.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Projekt besprechen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
