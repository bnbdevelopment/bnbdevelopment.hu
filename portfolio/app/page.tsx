"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import TechnologyCard from "@/components/TechnologyCard";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const projects = [
    {
      title: "irodalomerettsegi.hu",
      description: "Irodalom érettségire való felkészülést segítő weboldal, interaktív feladatokkal, szókártyákkal, illetve tételvázlatokkal.",
      logoUrl: "/projects/irodalomerettsegi.png",
      projectUrl: "https://irodalomerettsegi.hu"
    },
    {
      title: "Agora Savaria Jegyrendszer",
      description: "Jegyrendszer a Agora Savaria szombathelyi kulturális központ számára.",
      logoUrl: "/projects/jegyrendszer.png",
      projectUrl: "https://jegy-agorasavaria.hu"
    },
    {
      title: "Dokumentáció oldal",
      description: "Dokumentáció oldal az általunk fejlesztett projektekhez.",
      logoUrl: "/projects/documentation.png",
      projectUrl: "https://docs.bnbdevelopment.hu"
    },
    // {
    //   title: "InfoAcademy",
    //   description: "Informatika érettségi felkészítő weboldal, interaktív feladatokkal, szókártyákkal, illetve tételvázlatokkal.",
    //   logoUrl: "/projects/infoacademy",
    //   projectUrl: "https://infoacademy.hu"
    // }
  ];

  const technologies = [
    {
      title: "Next.js",
      logoLight: "https://cdn.simpleicons.org/nextdotjs/black",
      logoDark: "https://cdn.simpleicons.org/nextdotjs/white",
      referenceUrl: "https://nextjs.org",
      description: "A Next.js egy JavaScript/TypeScript keretrendszer, amelyet a weboldalaink frontend részének fejlesztéséhez használunk."
    },
    {
      title: "NestJS",
      logoLight: 'https://cdn.simpleicons.org/nestjs/black',
      logoDark: 'https://cdn.simpleicons.org/nestjs/white',
      referenceUrl: "https://nestjs.org",
      description: "A NestJS egy JavaScript/TypeScript keretrendszer, amelyet a weboldalaink backend részének fejlesztéséhez használunk."
    },
    {
      title: "TypeScript",
      logoLight: 'https://cdn.simpleicons.org/typescript/black',
      logoDark: 'https://cdn.simpleicons.org/typescript/white',
      referenceUrl: "https://www.typescriptlang.org",
      description: "A TypeScript egy JavaScript fejlesztői környezet. Ezt használjuk legfőképpen a kódjainkban."
    },
    {
      title: "Kubernetes",
      logoLight: 'https://cdn.simpleicons.org/kubernetes/black',
      logoDark: 'https://cdn.simpleicons.org/kubernetes/white',
      referenceUrl: "https://kubernetes.io",
      description: "A Kubernetes az szolgáltatásaink futtatásáért felel. Gondoskodik róla, hogy a szolgáltatások folyamatosan működjenek, és a környezetben tudjunk növekedni."
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fejlesztés, üzemeltetés, innováció</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Egy lelkes és innovatív fejlesztőcsapat, akik weboldalakat és egyéb AI megoldásokat fejlesztenek a jövő számára.
            </p>
          </motion.div>
        </section>

        {/* <section className="container mx-auto px-4 py-20">
          <motion.div {...fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Rólunk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section> */}

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Kiemelt projektjeink</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  logoUrl={project.logoUrl}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* Tech Stack Section */}
        <section id="tech-stack" className="container mx-auto px-4 py-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">Technológiák</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A következő technológiákkal dolgozunk:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.title}
                  title={tech.title}
                  logoLight={tech.logoLight}
                  logoDark={tech.logoDark}
                  referenceUrl={tech.referenceUrl}
                  description={tech.description}
                />
              ))}
            </div>
          </motion.div>
        </section>


        {/* Contact Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold mb-8">Kapcsolat</h2>
            <div className="group relative max-w-lg mx-auto">
              <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
              <Card className="relative bg-card/50 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Kérdéseid vagy ötleteid vannak? Keress bátran minket!
                </p>
                <a href="mailto:info@bnbdevelopment.hu" className="text-primary hover:underline">
                  info@bnbdevelopment.hu
                </a>
              </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
