"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Settings, GitBranch, Terminal, Globe, Cpu } from "lucide-react";
import React from 'react';

interface SkillCategoryProps {
    title: string;
    icon: React.ElementType;
    skills: { name: string; details: string }[];
    index: number;
}

const SkillCategory = ({ title, icon: Icon, skills, index }: SkillCategoryProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="p-8 bg-white dark:bg-muted/30 border border-border rounded-[2rem] hover:border-primary/50 transition-all group"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-black uppercase tracking-tight">{title}</h3>
        </div>
        <ul className="space-y-4">
            {skills.map((skill, i) => (
                <li key={i} className="flex flex-col gap-1">
                    <span className="font-mono text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {skill.name}
                    </span>
                    <span className="text-xs text-secondary/50 dark:text-foreground/50 ml-3">
                        {skill.details}
                    </span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-muted/20">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">Technical Depth</span>
                    <h2 className="font-display text-4xl font-black">Skills & Expertise</h2>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <SkillCategory
                    index={0}
                    title="Languages"
                    icon={Code}
                    skills={[
                        { name: "Java", details: "Core, OOPs, Collections" },
                        { name: "SQL", details: "Queries, Joins, Indexing" },
                        { name: "JavaScript", details: "ES6+, DOM, Fetch" },
                        { name: "HTML & CSS", details: "Semantic, Tailwind" }
                    ]}
                />
                <SkillCategory
                    index={1}
                    title="Backend"
                    icon={Server}
                    skills={[
                        { name: "Spring Boot", details: "REST APIs, Security" },
                        { name: "Hibernate/JPA", details: "ORM, Persistence" },
                        { name: "Node.js", details: "Express, Socket.io" },
                        { name: "Maven", details: "Build Tool, Deps" }
                    ]}
                />
                <SkillCategory
                    index={2}
                    title="Database"
                    icon={Database}
                    skills={[
                        { name: "PostgreSQL", details: "Relational, Stored Procs" },
                        { name: "MySQL", details: "Relational, Normalization" },
                        { name: "MongoDB", details: "NoSQL, Aggregation" },
                        { name: "Firebase", details: "Auth, Firestore" }
                    ]}
                />
                <SkillCategory
                    index={3}
                    title="Tools & Workflow"
                    icon={Terminal}
                    skills={[
                        { name: "Git & GitHub", details: "Version Control, PRs" },
                        { name: "Postman", details: "API Documentation" },
                        { name: "Docker", details: "Containerization (Basic)" },
                        { name: "Vercel / Netlify", details: "Deployment" }
                    ]}
                />
            </div>
        </section>
    );
}
