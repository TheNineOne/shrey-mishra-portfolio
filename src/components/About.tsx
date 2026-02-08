"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Layout, Terminal, Zap, Search, Globe } from "lucide-react";

const skillCards = [
    { name: "Java & Spring", icon: Database, desc: "Building scalable backend architectures." },
    { name: "REST API Dev", icon: Layout, desc: "Designing robust communication layers." },
    { name: "Scalable Apps", icon: Globe, desc: "Ensuring high availability and performance." }
];

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>About</h2>
                    <p className="text-secondary/60 dark:text-foreground/60">Exploring my background and specialized service areas.</p>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-24 items-center py-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:w-[30%] space-y-6"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 border-2 border-primary rounded-full -m-4 group-hover:m-[-10px] transition-all duration-500" />
                        <img
                            src="/shrey.png"
                            alt="Shrey Mishra"
                            className="w-full aspect-square object-cover rounded-full shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-center pt-8">
                        <p className="text-2xl font-bold italic signature-font">Shrey Mishra</p>
                        <p className="text-sm text-secondary/50 italic">Building meaningful digital experiences through creative code.</p>
                    </div>
                </motion.div>

                <div className="lg:w-[65%] space-y-8">
                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-primary"
                    >
                        Hi, I&apos;m Shrey Mishra - a Backend Focused Developer
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary/70 dark:text-foreground/70 leading-relaxed"
                    >
                        Motivated IT student with hands-on experience in Java-based application development and web technologies. Passionate about building scalable applications using Spring Boot, REST APIs, and modern frontend frameworks.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                        {skillCards.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-6 bg-muted rounded-xl text-center space-y-3 cursor-default border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto transition-transform group-hover:rotate-12"><skill.icon className="w-6 h-6" /></div>
                                <h4 className="font-bold uppercase tracking-tight text-sm">{skill.name}</h4>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-6 pt-6">
                        {[
                            { year: "2021", text: "Graduated with BCA from PPN College, Kanpur (CGPA 8.11)" },
                            { year: "2024", text: "Joined CSJMU for Masters in Computer Applications" },
                            { year: "2025", text: "Software Developer Intern at Humming Byte Technologies" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.4 }}
                                className="flex items-center gap-4 border-l-4 border-primary pl-4 group hover:pl-6 transition-all"
                            >
                                <span className="font-bold text-primary">{item.year}</span>
                                <span className="group-hover:text-primary transition-colors">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
