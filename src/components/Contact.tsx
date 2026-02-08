"use client";

import { motion } from "framer-motion";
import { Mail, CheckCircle2, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="section-padding">
            <div className="section-title">
                <h2>Contact</h2>
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 py-10">
                <div className="space-y-10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0"><MapPin /></div>
                        <div>
                            <h4 className="text-xl font-bold">Location:</h4>
                            <p className="text-secondary/60">Kanpur, Uttar Pradesh, India</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0"><Mail /></div>
                        <div>
                            <h4 className="text-xl font-bold">Email:</h4>
                            <p className="text-secondary/60">shreymishra589@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full h-[300px] bg-muted rounded-2xl overflow-hidden relative grayscale">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114287.49392237824!2d80.25439!3d26.4499232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770326db333%3A0x5b306ee9d6770e37!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="bg-white dark:bg-muted/50 p-8 shadow-2xl rounded-2xl border border-primary/5">
                    {isSubmitted ? (
                        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-20">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Your Name</label>
                                    <input required type="text" className="w-full p-3 bg-muted border border-border/50 rounded-lg outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Your Email</label>
                                    <input required type="email" className="w-full p-3 bg-muted border border-border/50 rounded-lg outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Subject</label>
                                <input required type="text" className="w-full p-3 bg-muted border border-border/50 rounded-lg outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Message</label>
                                <textarea required rows={5} className="w-full p-3 bg-muted border border-border/50 rounded-lg outline-none focus:border-primary transition-colors resize-none" />
                            </div>
                            <button type="submit" className="w-full btn-primary py-4">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
