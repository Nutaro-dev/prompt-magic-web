
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-primary p-0 h-auto">
          Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
