"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

interface PersonCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  index: number;
  github?: string;
  linkedin?: string;
}

export function PersonCard({ name, role, description, imageUrl, index, github, linkedin }: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-muted-foreground">{role}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {(github || linkedin) && (
              <div className="flex gap-2 pt-2">
                {github && (
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9 cursor-pointer">
                      <Github className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {linkedin && (
                  <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-9 w-9 cursor-pointer">
                      <Linkedin className="h-4 w-4 " />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 