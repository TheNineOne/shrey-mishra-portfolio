"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Users, Database, Zap, Sparkles, Server } from "lucide-react";

const projectsList = [
    {
        title: "CodeSync",
        subtitle: "Real-time Collaborative Code Editor",
        description: "A synchronized platform allowing developers to code together in real-time. Built to handle low-latency multi-user interaction.",
        tech: ["React.js", "Node.js", "Socket.io", "Monaco Editor"],
        features: ["Room-based isolation", "Real-time state sync", "Multi-language support"],
        learnings: "Architected a real-time event system using WebSockets and implemented debounced synchronization to optimize server performance.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/TheNineOne",
        live: "#"
    },
    {
        title: "Spring Boot Web App",
        subtitle: "Enterprise CRUD & Session Management",
        description: "Internal business application developed during internship. Focused on secure data handling and responsive user interfaces.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
        features: ["JWT Authentication", "Session Management", "JPA Persistence"],
        learnings: "Developed deep understanding of Spring Security filters and optimized database queries using JPA projections and indexing.",
        icon: Server,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/TheNineOne",
        live: "#"
    },
    {
        title: "Household Cost Estimator",
        subtitle: "Dynamic Cost Calculation Engine",
        description: "A tool designed to simplify complex household task estimations using dynamic logic and real-time computation.",
        tech: ["Node.js", "EJS", "Express", "CSS3"],
        features: ["Dynamic pricing engine", "Deployed on Render", "Scalable data structure"],
        learnings: "Refined skills in server-side rendering and improved UI performance by minimizing DOM manipulations.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/TheNineOne/Housewifetasks_project",
        live: "https://housewifetasks.onrender.com/"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-background relative overflow-hidden">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">My Work</span>
                    <h2 className="font-display text-4xl font-black">Featured Projects</h2>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-1 gap-12 mt-20">
                {projectsList.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col lg:flex-row bg-white dark:bg-muted/30 border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl shadow-primary/5"
                    >
                        {/* Image Side */}
                        <div className="lg:w-[40%] relative overflow-hidden h-64 lg:h-auto">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                            <div className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl shadow-xl">
                                <project.icon className="w-6 h-6 text-primary" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-[60%] p-10 space-y-8 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h4 className="text-primary font-mono text-[10px] font-bold uppercase tracking-widest">{project.subtitle}</h4>
                                    <h3 className="text-3xl font-display font-black tracking-tight">{project.title}</h3>
                                </div>
                                <p className="text-secondary/70 dark:text-foreground/70 leading-relaxed font-sans">
                                    {project.description}
                                </p>

                                <div className="pt-4 space-y-3">
                                    <p className="text-xs font-bold uppercase text-secondary/40 dark:text-foreground/40 tracking-widest">What I Learned</p>
                                    <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-primary italic text-sm">
                                        &quot;{project.learnings}&quot;
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-mono font-bold rounded-md border border-primary/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    {project.live !== "#" && (
                                        <a href={project.live} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-20">
                <p className="font-mono text-xs text-secondary/40 dark:text-foreground/40 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> More projects being developed on GitHub
                </p>
            </div>
        </section>
    );
}
