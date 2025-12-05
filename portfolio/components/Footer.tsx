"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Coffee, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          {/* <Button asChild variant="secondary" aria-label="Support us on Patreon">
            <a
              href="https://www.patreon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeartHandshake className="mr-1" />
              Patreon
            </a>
          </Button> */}
          <span className="group relative inline-block">
            <span className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
            <Button asChild variant="ghost" aria-label="Documentation" className="relative">
              <a
                href="https://docs.bnbdevelopment.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-1" />
                Dokumentáció
              </a>
            </Button>
          </span>
          <span className="group relative inline-block">
            <span className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
            <Button asChild variant="outline" aria-label="Buy us a coffee" className="relative">
              <a
                href="https://buymeacoffee.com/bnbdevelopment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee className="mr-1" />
                Buy Me a Coffee
              </a>
            </Button>
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-sm"
        >
          {t('copyright').replace('2024', new Date().getFullYear().toString())}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 