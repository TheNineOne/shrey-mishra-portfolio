"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Users, Database, Zap } from "lucide-react";

const projectsList = [
    {
        title: "CodeSync",
        description: "Real-time collaborative code editor supporting multi-user editing with room-based sessions and custom themes.",
        tech: ["React", "Monaco", "Node", "Socket.IO"],
        features: ["Real-time collaboration", "Custom editor themes", "Auto-formatting"],
        icon: Users,
        gradient: "from-blue-500/20 to-indigo-500/20",
        live: "#",
        github: "https://github.com/TheNineOne"
    },
    {
        title: "Household Tasks Estimator",
        description: "Web application to calculate costs for selected household tasks with dynamic calculation logic.",
        tech: ["Node.js", "EJS", "HTML", "CSS"],
        features: ["Dynamic calculation", "Deployed online", "Clean UI"],
        icon: Database,
        gradient: "from-purple-500/20 to-pink-500/20",
        live: "https://housewifetasks.onrender.com/",
        github: "https://github.com/TheNineOne/Housewifetasks_project"
    },
    {
        title: "Java Web Application",
        description: "Built during internship at Humming Byte Technologies. Focused on CRUD operations and session handling.",
        tech: ["Spring Boot", "React", "PostgreSQL", "JPA"],
        features: ["CRUD operations", "Session handling", "Responsive UI"],
        icon: Code2,
        gradient: "from-emerald-500/20 to-teal-500/20",
        live: "#",
        github: "https://github.com/TheNineOne"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding space-y-12">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Projects</h2>
                    <p className="text-secondary/60 dark:text-foreground/60">A collection of work that demonstrates my skills in development.</p>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {projectsList.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group glass rounded-[2rem] overflow-hidden flex flex-col border border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className={`p-8 bg-gradient-to-br ${project.gradient} border-b border-black/5 dark:border-white/5 relative overflow-hidden flex justify-between items-start`}>
                            <div>
                                <project.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                            </div>
                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" className="p-2 bg-white/50 dark:bg-black/20 rounded-full hover:bg-primary hover:text-white transition-all"><Github className="w-5 h-5" /></a>
                                <a href={project.live} target="_blank" className="p-2 bg-white/50 dark:bg-black/20 rounded-full hover:bg-primary hover:text-white transition-all"><ExternalLink className="w-5 h-5" /></a>
                            </div>
                        </div>

                        <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <p className="text-secondary/70 dark:text-foreground/70 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-tighter hover:bg-primary hover:text-white transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-2 pt-4 border-t border-primary/5">
                                {project.features.map(f => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-secondary/60 dark:text-foreground/60 hover:text-primary transition-colors cursor-default">
                                        <Zap className="w-3 h-3 text-primary animate-pulse" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
