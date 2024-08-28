import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
  imageUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, imageUrl }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        {imageUrl && (
          <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default ProjectCard