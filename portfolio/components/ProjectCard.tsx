import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  logoUrl: string;
  projectUrl: string;
}

const ProjectCard = ({ title, description, logoUrl, projectUrl }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={projectUrl} target="_blank">
        <div className="group relative">
          <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
          <Card className="relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
          <CardHeader className="flex items-center justify-center p-6">
            <div className="relative w-32 h-32">
              <Image
                src={logoUrl}
                alt={`${title} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          </Card>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 