import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TechnologyCardProps {
  title: string;
  logoUrl: string;
  referenceUrl: string;
  description?: string;
}

const TechnologyCard = ({ title, logoUrl, referenceUrl, description }: TechnologyCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link href={referenceUrl} target="_blank" rel="noopener noreferrer">
          <Card className="cursor-pointer transition-all hover:scale-105">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src={logoUrl}
                  alt={`${title} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
              <span className="font-medium">{title}</span>
            </CardContent>
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        {description || `Learn more about ${title}`}
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechnologyCard; 