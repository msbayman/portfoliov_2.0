import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils"; // only if you're using shadcn/ui's cn()
import type { HTMLAttributes } from "react";

interface ToggleDemoProps extends HTMLAttributes<HTMLButtonElement> { }

export function ToggleDemo({ className, ...props }: ToggleDemoProps) {
  return (
    <Toggle
      aria-label="Toggle bold"
      className={cn(className)}
      {...props}
    >
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
