"use client";

import { motion } from "framer-motion";
import { User, Code, Server, BookOpen, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">My Background</span>
                    <h2 className="font-display text-4xl font-black">Professional Journey</h2>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mt-12">
                {/* Left side: Value Proposition */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 space-y-8"
                >
                    <h3 className="text-2xl font-display font-bold text-secondary dark:text-white leading-tight">
                        I specialize in <span className="text-primary">Backend Development</span> with a focus on building robust system architectures.
                    </h3>

                    <div className="space-y-6 text-lg text-secondary/70 dark:text-foreground/70 leading-relaxed font-sans">
                        <p>
                            Currently pursuing my <span className="font-bold text-secondary dark:text-white underline decoration-primary decoration-2 underline-offset-4">MCA</span>, I focus on the engine that powers applications. I enjoy building RESTful APIs, working with complex databases, and understanding how modern systems scale.
                        </p>
                        <p>
                            I&apos;ve worked on real-world projects involving <span className="text-secondary dark:text-white font-semibold">JWT Authentication, CRUD operations, and complex business logic</span>. My goal is to write code that isn&apos;t just functional, but maintainable and efficient.
                        </p>
                        <p className="font-mono text-sm bg-muted/50 p-4 rounded-xl border border-border italic">
                            &quot;I am continuously improving my Data Structures, Algorithms, and System Design skills to solve high-impact problems.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="flex items-start gap-4">
                            <GraduationCap className="text-primary w-6 h-6 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-base">Education</h4>
                                <p className="text-sm opacity-60">MCA Candidate 2024-26</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Server className="text-primary w-6 h-6 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-base">Specialization</h4>
                                <p className="text-sm opacity-60">Java & Spring Boot</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right side: Fact Cards */}
                <div className="lg:col-span-5 grid gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 bg-white dark:bg-muted/50 border border-border rounded-2xl group hover:border-primary/30 transition-all shadow-xl shadow-primary/5"
                    >
                        <h4 className="text-primary font-mono text-xs font-bold uppercase tracking-wider mb-3">01. Scalable Solutions</h4>
                        <p className="text-sm font-medium leading-relaxed">Designing REST APIs with Spring Boot that follow best practices for performance and security.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 bg-white dark:bg-muted/50 border border-border rounded-2xl group hover:border-primary/30 transition-all shadow-xl shadow-primary/5"
                    >
                        <h4 className="text-primary font-mono text-xs font-bold uppercase tracking-wider mb-3">02. Database Excellence</h4>
                        <p className="text-sm font-medium leading-relaxed">Working with PostgreSQL and MySQL using JPA/Hibernate for optimized data persistence.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-6 bg-white dark:bg-muted/50 border border-border rounded-2xl group hover:border-primary/30 transition-all shadow-xl shadow-primary/5"
                    >
                        <h4 className="text-primary font-mono text-xs font-bold uppercase tracking-wider mb-3">03. Modern Workflow</h4>
                        <p className="text-sm font-medium leading-relaxed">Collaborating via Git/GitHub and testing endpoints with Postman for reliable delivery.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
