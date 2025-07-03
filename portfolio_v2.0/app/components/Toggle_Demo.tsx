'use client';

import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState, type HTMLAttributes } from "react";

interface ToggleDemoProps extends HTMLAttributes<HTMLButtonElement> { }

export function ToggleDemo({ className, ...props }: ToggleDemoProps) {
  const [theme_dark, setTheme_dark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Toggle
      aria-label="Toggle theme"
      className={cn(
        "rounded-full p-2  ",
        className
      )}
      style={{
        background: "transparent",
        boxShadow: "0 0 0 1px var(--color-accent-dark)",
      }}
      onClick={(e) => {
        setTheme_dark(!theme_dark);
      }}
    >
      {theme_dark ? (
        <Sun className="h-4 w-4 text-white transition-all  " />
      ) : (
        <Moon className="h-4 w-4 text-[var(--color-accent-dark)] transition-all" />
      )}
    </Toggle>
  );
}
