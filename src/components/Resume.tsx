"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from "lucide-react";
import Link from "next/link";

interface ResumeItemProps {
    title: string;
    date: string;
    company: string;
    location: string;
    type: "work" | "education";
    points: string[];
    index: number;
}

const ResumeItem = ({ title, date, company, location, points, type, index }: ResumeItemProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-10 pb-12 last:pb-0 group"
    >
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-4 transition-colors group-hover:bg-primary/50" />

        {/* Timeline Pointer */}
        <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all" />

        <div className="space-y-4">
            <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-xl font-display font-black uppercase text-secondary dark:text-white group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs font-mono font-bold">
                        <Calendar className="w-3 h-3" /> {date}
                    </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold opacity-60">
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
                </div>
            </div>

            <ul className="space-y-3">
                {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary/70 dark:text-foreground/70 leading-relaxed font-sans">
                        <div className="mt-1.5 w-1 h-1 bg-primary shrink-0 opacity-50" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default function Resume() {
    return (
        <section id="resume" className="section-padding bg-muted/20">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">Qualifications</span>
                    <h2 className="font-display text-4xl font-black">Experience & Education</h2>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mt-20">
                {/* Work Experience */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-black uppercase tracking-tight">Work History</h3>
                    </div>

                    <div className="space-y-2">
                        <ResumeItem
                            index={0}
                            type="work"
                            title="Software Developer Intern"
                            date="Jul 2025 - Dec 2025"
                            company="Humming Byte Technologies"
                            location="Remote/Hybrid"
                            points={[
                                "Developed a Java-based web application modules using Spring Boot & React.",
                                "Built dynamic pages, handled form submissions, and implemented secure session handling.",
                                "Performed CRUD operations using JPA and PostgreSQL, optimizing query performance.",
                                "Participated in daily standups and followed real-world Git/GitHub agile workflow."
                            ]}
                        />
                        <ResumeItem
                            index={1}
                            type="work"
                            title="Academic Projects"
                            date="2024 - Present"
                            company="Self-Managed"
                            location="Kanpur, India"
                            points={[
                                "CodeSync: Built a real-time collaborative code editor using Socket.IO and Node.js.",
                                "Cost Estimator: Developed a web-based cost calculation app with EJS for server-side rendering.",
                                "Focusing on implementing industry-standard design patterns and clean code principles."
                            ]}
                        />
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-2xl">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-display font-black uppercase tracking-tight">Academic Profile</h3>
                    </div>

                    <div className="space-y-2">
                        <ResumeItem
                            index={2}
                            type="education"
                            title="Master of Computer Applications"
                            date="2024 - Present"
                            company="CSJMU, Kanpur"
                            location="GPA: 8.11"
                            points={[
                                "Specializing in Advanced Java and Cloud Computing architectures.",
                                "Consistent academic performance with focus on Database Systems and Networking.",
                                "Leading technical workshops for peers on Spring Boot basics."
                            ]}
                        />
                        <ResumeItem
                            index={3}
                            type="education"
                            title="Bachelor of Computer Applications"
                            date="2021 - 2024"
                            company="PPN College, Kanpur"
                            location="GPA: 8.11"
                            points={[
                                "In-depth study of Object-Oriented Programming (OOP) and Software Engineering.",
                                "Major project developed using Web Technologies with focus on UI/UX.",
                                "Core foundations built in Data Structures and Algorithms."
                            ]}
                        />
                        <ResumeItem
                            index={4}
                            type="education"
                            title="Secondary Education"
                            date="2019 - 2021"
                            company="St. Francis Xavier's"
                            location="UP Board"
                            points={[
                                "Higher Secondary (XII): 72%",
                                "Secondary (X): 82%",
                                "Focused on Science and Mathematics stream."
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20 p-8 border border-primary/10 rounded-[2rem] bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary">Honors & Skills</p>
                        <p className="text-lg font-sans font-medium">Looking for Java/Spring Boot Internship roles.</p>
                    </div>
                </div>
                <Link href="#contact" className="btn-primary">Hire Me</Link>
            </div>
        </section>
    );
}
