import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TechnologyCardProps {
  title: string;
  logoUrl?: string; // fallback for backward compatibility
  logoLight?: string;
  logoDark?: string;
  referenceUrl: string;
  description?: string;
}

const TechnologyCard = ({ title, logoUrl, logoLight, logoDark, referenceUrl, description }: TechnologyCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link href={referenceUrl} target="_blank" rel="noopener noreferrer">
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#7004FA] to-[#22207F] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
            <Card className="relative cursor-pointer transition-all group-hover:scale-[1.02]">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <div className="relative w-12 h-12">
                {logoLight && logoDark ? (
                  <>
                    <Image
                      src={logoLight}
                      alt={`${title} logo light`}
                      fill
                      className="object-contain dark:hidden"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <Image
                      src={logoDark}
                      alt={`${title} logo dark`}
                      fill
                      className="object-contain hidden dark:block"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </>
                ) : (
                  <Image
                    src={logoUrl as string}
                    alt={`${title} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                )}
              </div>
              <span className="font-medium">{title}</span>
            </CardContent>
            </Card>
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        {description || `Learn more about ${title}`}
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechnologyCard; 