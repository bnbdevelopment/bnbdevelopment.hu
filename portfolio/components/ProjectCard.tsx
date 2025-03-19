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
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 