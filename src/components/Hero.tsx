"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code2, Database, Layout, Zap, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const roles = ["Developer", "Freelancer", "Artist", "Collaborator"];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setSpeed(50);
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, speed]);

    return (
        <section id="home" className="section-padding flex flex-col lg:flex-row items-center justify-center gap-16 py-32 min-h-screen relative">
            {/* Background Graphic Lines */}
            <div className="absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.1] pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.1" />
                    <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.05" />
                    <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="0.05" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-[55%] space-y-10"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-white leading-tight">
                        Creative <span className="text-primary">{displayText}</span>
                        <span className="text-primary animate-pulse ml-1">|</span>
                    </h1>
                    <p className="text-lg text-secondary/60 dark:text-foreground/60 max-w-lg leading-relaxed font-medium">
                        I create digital experiences that inspire and engage. With a passion for clean code and innovative solutions, I transform ideas into beautiful, functional realities.
                    </p>
                </div>

                <div className="flex gap-12 py-4">
                    <div className="space-y-1">
                        <p className="text-4xl font-bold text-primary">5+</p>
                        <p className="text-xs uppercase tracking-wider font-bold text-secondary/40 whitespace-nowrap">Projects Completed</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-4xl font-bold text-primary">1+</p>
                        <p className="text-xs uppercase tracking-wider font-bold text-secondary/40 whitespace-nowrap">Year Experience</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-4xl font-bold text-primary">100%</p>
                        <p className="text-xs uppercase tracking-wider font-bold text-secondary/40 whitespace-nowrap">Happy Clients</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link href="#projects" className="btn-primary px-10">View My Work</Link>
                    <Link href="#contact" className="btn-outline px-10">Get In Touch</Link>
                </div>

                <div className="flex items-center gap-5 pt-4">
                    <a href="https://github.com/TheNineOne" target="_blank" className="p-3 border-[1.5px] border-secondary/10 dark:border-white/10 rounded-full text-secondary dark:text-foreground/60 hover:bg-primary hover:text-white transition-all"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/shreymishra91/" target="_blank" className="p-3 border-[1.5px] border-secondary/10 dark:border-white/10 rounded-full text-secondary dark:text-foreground/60 hover:bg-primary hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                    <a href="mailto:shreymishra589@gmail.com" className="p-3 border-[1.5px] border-secondary/10 dark:border-white/10 rounded-full text-secondary dark:text-foreground/60 hover:bg-primary hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative lg:w-[40%] max-w-[500px] lg:ml-[100px]"
            >
                {/* Blue background accent from image */}
                <div className="absolute top-8 left-8 bottom-0 right-0 bg-primary rounded-[2rem] -z-10" />

                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-0 z-10">
                    <img
                        src="/shrey.png"
                        alt="Shrey Mishra"
                        className="w-full aspect-square object-cover"
                    />
                </div>

                {/* Floating Labels from Image */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="floating-tag -top-6 -left-10 z-20"
                >
                    <Terminal className="text-primary w-4 h-4" /> 4+ Projects Done
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="floating-tag -bottom-4 -left-6 z-20"
                >
                    <Zap className="text-primary w-4 h-4" /> Creative Ideas
                </motion.div>

                <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                    className="floating-tag top-1/2 -right-16 z-20"
                >
                    <Code2 className="text-primary w-4 h-4" /> Development
                </motion.div>
            </motion.div>
        </section>
    );
}
