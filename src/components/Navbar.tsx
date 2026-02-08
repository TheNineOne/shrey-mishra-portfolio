"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "NineOne", href: "/nineone" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
            const sections = ["home", "about", "resume", "projects", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
                scrolled ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
            )}
        >
            <div className="text-2xl font-black text-secondary dark:text-white tracking-tighter">
                SM<span className="text-primary">.</span>
            </div>

            <div className="flex items-center gap-8">
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold transition-all uppercase tracking-widest hover:text-primary",
                                    activeSection === item.href.substring(1)
                                        ? "text-primary"
                                        : "text-secondary/70 dark:text-foreground/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </div>
        </motion.nav>
    );
}
