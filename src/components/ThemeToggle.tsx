"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch by only rendering after mounting
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0" />
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-indigo-500 transition-colors shadow-lg"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className="w-6 h-6 absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <Moon className="w-6 h-6 absolute inset-0 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            </div>
        </motion.button>
    );
}
