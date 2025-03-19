"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface SmallPersonCardProps {
  name: string;
  role: string;
  imageUrl: string;
  index: number;
}

export function SmallPersonCard({ name, role, imageUrl, index }: SmallPersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-8 flex items-center gap-6">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover rounded-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 