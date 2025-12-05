"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    { name: t('about'), href: `/${locale}/about` },
    { name: t('technologies'), href: `/${locale}#tech-stack` },
    { name: t('team'), href: `/${locale}/team` },
    { name: t('contact'), href: `/${locale}/contact` },
    { name: t('status'), href: "https://status.bnbdevelopment.hu/" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold"
        >
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="BNBDevelopment logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <span>BNBDEVELOPMENT</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={item.href}>
                <span className="group relative inline-block">
                  <span className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
                  <Button variant="ghost" className="relative text-sm cursor-pointer">
                    {item.name}
                  </Button>
                </span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * navItems.length }}
          >
            <DropdownMenu>
              <div className="group relative inline-block">
                <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative text-sm cursor-pointer">
                    {t('projects')}
                  </Button>
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="https://irodalomerettsegi.hu" target="_blank" className="cursor-pointer">
                    irodalomerettsegi.hu
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://docs.bnbdevelopment.hu" target="_blank" className="cursor-pointer">
                    Dokumentáció
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
          <LanguageSwitcher />
          <ModeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden group relative">
          <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
          <button
            className="p-2 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="group relative inline-block w-full">
                    <span className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
                    <Button variant="ghost" className="relative w-full text-left justify-start text-sm">
                      {item.name}
                    </Button>
                  </span>
                </Link>
              ))}
              <DropdownMenu>
                <div className="group relative inline-block w-full">
                  <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative w-full text-left justify-start text-sm">
                      {t('projects')}
                    </Button>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <Link href="https://irodalomerettsegi.hu" target="_blank" className="cursor-pointer">
                      irodalomerettsegi.hu
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://jegy-agorasavaria.hu" target="_blank" className="cursor-pointer">
                      Jegyrendszer
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="pt-2 flex gap-2">
                <LanguageSwitcher />
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation; 