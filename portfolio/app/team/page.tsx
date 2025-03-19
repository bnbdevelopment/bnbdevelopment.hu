"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { PersonCard } from "@/components/PersonCard";
import { SmallPersonCard } from "@/components/SmallPersonCard";

const founders = [
  {
    name: "Gyürüs Bence",
    role: "Alapító & Fejlesztő",
    description: "Full-stack, AI és ML fejlesztő. Több éves tapasztalattal rendelkezem a fejlesztésben, projektjeinkben főleg a felhasználók számára készített felületek tökéletesítésével és fejlesztésével foglalkozom. Jelenleg egyetemen tanulok, Budapesten.",
    imageUrl: "/team/gyuben.png",
    github: "https://github.com/BenceGyurus",
  },
  {
    name: "Tóth Bence",
    role: "Alapító & Fejlesztő",
    description: "Backend és ML fejlesztő, infrastruktúra vezető és üzemeltető. Több mint 10 éve foglalkozom a szoftverfejlesztéssel, rendszerüzemeltetéssel. Feladataim közé tartozik felhasználóink adatainak biztoságos tárolása, szolgáltatásaink folyamatos online állapotban tartása. Jelenleg egyetemen tanulok, külföldön.",
    imageUrl: "/team/bence.jpeg",
    github: "https://github.com/bencetotht",
    linkedin: "https://www.linkedin.com/in/bence-totht"
  },
];

const additionalTeam = [
  {
    name: "Raposa Csenge",
    role: "Üzlet & Marketing",
    imageUrl: "/team/csenge.jpeg",
    linkedin: "https://linkedin.com/in/csenge-raposa"
  },
  // {
  //   name: "Nagy Péter",
  //   role: "Grafikus Designer",
  //   imageUrl: "/designer2.jpg"
  // }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto relative max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-4 -top-12"
        >
          <Link href="/">
            <Button variant="ghost" size="sm" className="group">
              <ChevronLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
              Vissza
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Csapatunk</h1>
          {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Megismerkedhet a BNBDEVELOPMENT csapatával. Szakértő fejlesztőink elkötelezettek 
            az innovatív és minőségi megoldások létrehozása mellett.
          </p> */}
        </motion.div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((member, index) => (
              <PersonCard key={member.name} {...member} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <h2 className="text-2xl font-semibold mb-6 text-center">Designerek</h2> */}
            <div className="grid sm:grid-cols-1 gap-4 max-w-2xl mx-auto">
              {additionalTeam.map((person, index) => (
                <SmallPersonCard key={person.name} {...person} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
