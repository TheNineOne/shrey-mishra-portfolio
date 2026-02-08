"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, MapPin, MessageSquare, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Using Web3Forms for real email delivery (Free & No Backend required)
        formData.append("access_key", "c8f8b89e-8c8e-4b8e-9e8c-8e8c8e8c8e8c"); // Dummy key, user needs to replace

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="section-title">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2">Get In Touch</span>
                    <h2 className="font-display text-4xl font-black">Let&apos;s Build Something</h2>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 mt-20 items-stretch">
                <div className="lg:col-span-5 space-y-8">
                    <div className="p-8 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-display font-black tracking-tight leading-none italic uppercase">Open to Opportunities.</h3>
                            <p className="opacity-80 font-sans">I&apos;m currently looking for internships, freelance projects, and junior backend roles.</p>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <a href="mailto:shreymishra589@gmail.com" className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white group-hover:text-primary transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-mono text-sm font-bold truncate">shreymishra589@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shreymishra91/" target="_blank" className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white group-hover:text-primary transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="font-mono text-sm font-bold">linkedin.com/in/shreymishra91</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-muted/50 rounded-[1.5rem] border border-border flex flex-col gap-4">
                            <MapPin className="text-primary w-6 h-6" />
                            <div>
                                <h4 className="font-bold text-sm">Location</h4>
                                <p className="text-xs opacity-60">Kanpur, UP, India</p>
                            </div>
                        </div>
                        <div className="p-6 bg-muted/50 rounded-[1.5rem] border border-border flex flex-col gap-4">
                            <MessageSquare className="text-primary w-6 h-6" />
                            <div>
                                <h4 className="font-bold text-sm">Response Time</h4>
                                <p className="text-xs opacity-60">Within 24 Hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-white dark:bg-muted/30 p-10 border border-border rounded-[2.5rem] shadow-xl shadow-primary/5">
                    {isSubmitted ? (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20 flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-display font-black uppercase tracking-tighter italic">Message Sent!</h3>
                            <p className="text-secondary/60 dark:text-foreground/60">I&apos;ll get back to you as soon as possible.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-40 px-1">Your Name</label>
                                    <input required type="text" name="name" placeholder="Shrey Mishra" className="w-full p-4 bg-background border border-border rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-sans" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-40 px-1">Your Email</label>
                                    <input required type="email" name="email" placeholder="shreymishra589@gmail.com" className="w-full p-4 bg-background border border-border rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-sans" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-40 px-1">Subject</label>
                                <input required type="text" name="subject" placeholder="Project Inquiry / Job Opportunity" className="w-full p-4 bg-background border border-border rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-sans" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-40 px-1">Message</label>
                                <textarea required name="message" rows={5} placeholder="Hi Shrey, I'd like to talk about..." className="w-full p-4 bg-background border border-border rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-sans resize-none" />
                            </div>
                            <button type="submit" className="w-full btn-primary py-5 rounded-2xl text-base uppercase tracking-[0.2em] font-black flex items-center justify-center gap-3">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
