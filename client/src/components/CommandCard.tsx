import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CommandCardProps {
  icon: LucideIcon;
  command: string;
  description: string;
}

export default function CommandCard({ icon: Icon, command, description }: CommandCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-300" data-testid={`card-command-${command.replace('/', '')}`}>
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-stellar-blue/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-stellar-blue" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{command}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
