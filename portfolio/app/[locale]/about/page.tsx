"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-4 -top-12"
        >
          <Link href={`/${locale}`}>
            <Button variant="ghost" size="sm" className="group cursor-pointer">
              <ChevronLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
              {t('back')}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <Card className="w-full h-full overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/about-1.jpg"
                  // src="/about-2.jpeg"
                  alt="BNBDEVELOPMENT Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t('subtitle')}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('story.paragraph1')}
              </p>
              <p>
                {t('story.paragraph2')}
              </p>
              <p>
                {t('story.paragraph3')}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { number: "2+", label: t('stats.experience') },
                  { number: "5+", label: t('stats.projects') },
                  { number: "3", label: t('stats.members') },
                  { number: "99.9%", label: t('stats.uptime') },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="p-4 rounded-lg bg-card"
                  >
                    <div className="text-xl md:text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 