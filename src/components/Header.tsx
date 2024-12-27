import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-5 overflow-auto">
        <nav className="flex gap-6">
          <a href="#intro" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </a>
          <a
            href="#experience"
            className="text-sm font-medium hover:text-primary"
          >
            Experience
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
