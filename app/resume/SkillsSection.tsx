import { Badge } from '@/components/ui/badge';

export const SkillsSection = ({ stack }: { stack: string[] }) => (
  <section className="space-y-2">
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <Badge key={tech} variant="outline">
          {tech}
        </Badge>
      ))}
    </div>
  </section>
);
