"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code2, Database, Layout, Zap, Terminal, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const roles = ["Backend-Focused Developer", "Spring Boot Specialist", "API Architect", "MCA Student"];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setSpeed(40);
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                setSpeed(100);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, speed]);

    return (
        <section id="home" className="section-padding flex flex-col lg:flex-row items-center justify-center gap-16 py-32 min-h-screen relative overflow-hidden">
            {/* Background Graphic Lines - Refined for Dev Vibe */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[grid-white]/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-[60%] space-y-8"
            >
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold tracking-widest uppercase"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Internships
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-display font-black text-secondary dark:text-white leading-[1.1]">
                        Hi, I&apos;m <span className="text-primary">Shrey Mishra</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-mono text-secondary/80 dark:text-foreground/80 h-10">
                        {displayText}
                        <span className="text-primary animate-pulse ml-1">_</span>
                    </h2>

                    <p className="text-lg text-secondary/60 dark:text-foreground/60 max-w-xl leading-relaxed font-sans mt-6">
                        Backend-Focused Developer building <span className="text-secondary dark:text-white font-bold">scalable APIs</span> & real-world products.
                        MCA student with hands-on experience in <span className="font-mono text-primary">Java, Spring Boot & REST APIs</span>.
                        I love turning ideas into clean, working systems.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-4">
                    <Link href="#projects" className="btn-primary flex items-center gap-2 shadow-primary/20 hover:shadow-primary/40">
                        View Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/resume.pdf" target="_blank" className="btn-outline flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Download Resume
                    </Link>
                </div>

                <div className="flex items-center gap-6 pt-8">
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/TheNineOne" target="_blank" className="text-secondary/40 dark:text-foreground/40 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-lg"><Github className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/in/shreymishra91/" target="_blank" className="text-secondary/40 dark:text-foreground/40 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-lg"><Linkedin className="w-6 h-6" /></a>
                        <a href="mailto:shreymishra589@gmail.com" className="text-secondary/40 dark:text-foreground/40 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-lg"><Mail className="w-6 h-6" /></a>
                    </div>
                    <div className="h-px w-12 bg-border" />
                    <span className="text-xs font-mono text-secondary/40 dark:text-foreground/40 uppercase tracking-widest font-bold">Connect with me</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative lg:w-[40%] max-w-[450px]"
            >
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-1 border-4 border-white dark:border-muted z-10">
                    <img
                        src="/shrey.png"
                        alt="Shrey Mishra"
                        className="w-full aspect-square object-cover rounded-[2.2rem]"
                    />
                </div>

                {/* Tech Badges */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -left-8 z-20 bg-white dark:bg-black/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
                >
                    <div className="p-2 bg-orange-500/10 rounded-lg"><Terminal className="text-orange-500 w-5 h-5" /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter leading-none">Primary</p>
                        <p className="text-sm font-black font-mono">JAVA / OOP</p>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-8 -right-8 z-20 bg-white dark:bg-black/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
                >
                    <div className="p-2 bg-green-500/10 rounded-lg"><Database className="text-green-500 w-5 h-5" /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter leading-none">Database</p>
                        <p className="text-sm font-black font-mono">PostgreSQL</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
