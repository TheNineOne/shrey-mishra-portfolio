"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface ResumeItemProps {
    title: string;
    date: string;
    company?: string;
    items?: string[];
    description?: string;
    cgpa?: string;
    i: number;
}

const ResumeItem = ({ title, date, company, items, description, cgpa, i }: ResumeItemProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ x: 5 }}
        className="resume-item group transition-all"
    >
        <h4 className="text-xl font-bold uppercase text-primary group-hover:tracking-wider transition-all">{title}</h4>
        <div className="my-2 px-3 py-1 bg-muted inline-block font-bold text-sm rounded-md">{date}</div>
        {company && <p className="italic font-bold">{company}</p>}
        {cgpa && <p className="font-bold">{company} <span className="text-primary ml-2">{cgpa}</span></p>}
        {items && (
            <ul className="mt-4 space-y-2 list-disc ml-5 text-secondary/70 dark:text-foreground/70">
                {items.map((item: string, idx: number) => (
                    <li key={idx} className="hover:text-primary transition-colors">{item}</li>
                ))}
            </ul>
        )}
        {description && <p className="mt-2 text-secondary/70 dark:text-foreground/70">{description}</p>}
    </motion.div>
);

export default function Resume() {
    return (
        <section id="resume" className="section-padding bg-muted/30">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Resume</h2>
                    <p>A summary of my professional journey and educational milestones.</p>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Professional Journey */}
                <div className="space-y-10">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold flex items-center gap-3 text-secondary dark:text-foreground"
                    >
                        <Briefcase className="text-primary" />
                        Professional Journey
                    </motion.h3>

                    <div className="space-y-2">
                        <ResumeItem
                            i={0}
                            title="Software Developer Intern"
                            date="Jul 2025 - Dec 2025"
                            company="Humming Byte Technologies Pvt. Ltd."
                            items={[
                                "Developed a Java-based web application using SpringBoot and React.",
                                "Built dynamic pages, handled form submissions, and implemented session handling.",
                                "Performed CRUD operations using JPA and PostgreSQL.",
                                "Designed responsive UI using React components."
                            ]}
                        />

                        <ResumeItem
                            i={1}
                            title="Academic Projects"
                            date="2024 - Present"
                            company="CodeSync & Cost Estimator"
                            items={[
                                "Developed a real-time collaborative code editor using React, Node.js, and Socket.IO.",
                                "Built a web-based cost calculation app for household tasks using Node.js and EJS."
                            ]}
                        />
                    </div>
                </div>

                {/* Academic Excellence */}
                <div className="space-y-10">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold flex items-center gap-3 text-secondary dark:text-foreground"
                    >
                        <GraduationCap className="text-primary" />
                        Academic Excellence
                    </motion.h3>

                    <div className="space-y-2">
                        <ResumeItem
                            i={2}
                            title="Master of Computer Applications"
                            date="2024 - Present"
                            company="CSJMU, Kanpur"
                            cgpa="CGPA: 8.11"
                            description="Focusing on Advanced Java, Cloud Computing, and Software Engineering principles."
                        />

                        <ResumeItem
                            i={3}
                            title="Bachelor of Computer Applications"
                            date="2021 - 2024"
                            company="PPN College, Kanpur"
                            cgpa="CGPA: 8.11"
                            description="Core studies in Object Oriented Programming, Networking, and Database Management."
                        />

                        <ResumeItem
                            i={4}
                            title="Secondary & Higher Secondary"
                            date="2019 - 2021"
                            company="St. Francis Xavier's Inter College"
                            description="XII: 72% | X: 82%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
