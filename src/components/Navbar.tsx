"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Resume", href: "/#resume" },
    { name: "Projects", href: "/#projects" },
    { name: "NineOne", href: "/nineone" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ["home", "about", "resume", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

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
        <header>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
                    scrolled || isOpen ? "bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
                )}
            >
                <Link href="/" className="text-2xl font-black text-secondary dark:text-white tracking-tighter z-[70]">
                    SM<span className="text-primary">.</span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-xs font-bold transition-all uppercase tracking-widest hover:text-primary",
                                        activeSection === item.href.split('#')[1]
                                            ? "text-primary border-b-2 border-primary pb-1"
                                            : "text-secondary/70 dark:text-foreground/70"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-secondary dark:text-white z-[70]"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-white dark:bg-black md:hidden flex flex-col items-center justify-center gap-8 pt-20"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-black uppercase tracking-tighter italic",
                                        activeSection === item.href.split('#')[1]
                                            ? "text-primary"
                                            : "text-secondary dark:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
