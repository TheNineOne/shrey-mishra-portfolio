"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Music2, ExternalLink, Video, PenTool, Mic2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const creativeRoles = ["Artist", "Video Editor", "Writer", "Rapper"];

const socialLinks = [
    {
        name: "YouTube",
        icon: Youtube,
        url: "https://www.youtube.com/@theNineOne",
        color: "hover:bg-red-600",
        desc: "Visual storytelling & Beats"
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/nineone.music/",
        color: "hover:bg-pink-600",
        desc: "Behind the scenes & Snaps"
    },
    {
        name: "Spotify",
        icon: Music2,
        url: "https://open.spotify.com/artist/19lUivaOw394T7xWzxk8mQ",
        color: "hover:bg-green-600",
        desc: "Official Discography"
    }
];

export default function NineOnePage() {
    const [smokeParticles, setSmokeParticles] = useState<any[]>([]);

    useEffect(() => {
        const particles = [...Array(20)].map((_, i) => ({
            id: i,
            initialX: (Math.random() * 120 - 10) + "%",
            scale: Math.random() * 3 + 1,
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 10
        }));
        setSmokeParticles(particles);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-hidden relative">
            {/* 1. HERO ATMOSPHERE (Background) */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="fixed inset-0 z-0 bg-cover bg-center grayscale-0 brightness-[0.4] contrast-125 pointer-events-none"
                style={{ backgroundImage: "url('/nineone-bg.png')" }}
            />

            {/* Dynamic Smoke Effect Layer */}
            <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden opacity-50">
                {smokeParticles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{
                            x: p.initialX,
                            y: "120%",
                            opacity: 0,
                            scale: p.scale
                        }}
                        animate={{
                            y: "-20%",
                            opacity: [0, 0.5, 0],
                            x: ["0%", "20%", "-20%", "10%"],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay
                        }}
                        className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"
                    />
                ))}
            </div>

            {/* Loop Noise Overlay */}
            <div className="noise-overlay" />

            <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
                {/* Header Section */}
                <header className="flex justify-between items-center mb-24">
                    <Link href="/" className="text-xl font-black group flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 px-4 rounded-full border border-white/10 hover:border-red-600 transition-all">
                        <span className="text-red-600 group-hover:translate-x-[-4px] transition-transform">←</span>
                        BACK TO DEV
                    </Link>
                    <div className="text-4xl font-black tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        NINEONE<span className="text-red-600">.</span>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ x: -100, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <h1 className="text-8xl md:text-9xl font-black leading-none uppercase italic stroke-text-red drop-shadow-2xl">
                                THE IX ONE
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            {creativeRoles.map((role, i) => (
                                <span key={role} className="flex items-center gap-2 px-6 py-2 border-2 border-white/20 rounded-full text-lg font-black uppercase tracking-widest hover:bg-red-600 hover:border-red-600 transition-all cursor-default bg-black/40 backdrop-blur-sm">
                                    {i === 0 && <Mic2 className="w-5 h-5 text-red-500" />}
                                    {i === 1 && <Video className="w-5 h-5 text-red-500" />}
                                    {i === 2 && <PenTool className="w-5 h-5 text-red-500" />}
                                    {role}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [-20, 20, -20],
                                y: [-20, 20, -20]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 bg-red-600/40 blur-[80px] rounded-full"
                        />
                        <div className="relative border-2 border-white/10 p-2 rounded-3xl group overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                            <Image
                                src="/artist-shrey.png"
                                alt="NineOne Artist"
                                width={500}
                                height={500}
                                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 aspect-square object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Links Grid */}
                <div className="grid md:grid-cols-3 gap-8 py-32">
                    {socialLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                            className={`group p-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-[2rem] flex flex-col justify-between transition-all duration-500 ${link.color} hover:text-white hover:border-white/20 shadow-xl`}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    <link.icon className="w-10 h-10" />
                                </div>
                                <ExternalLink className="w-6 h-6 opacity-40 group-hover:opacity-100 translate-x-2 -translate-y-2" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black uppercase tracking-tighter italic">{link.name}</h3>
                                <p className="text-white/60 group-hover:text-white/90 font-medium">{link.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <footer className="text-center py-20 border-t border-white/10 opacity-50 text-sm font-bold tracking-widest uppercase italic">
                    NINEONE COLLECTIVE © 2026 // ALL PRAISE TO THE MOST HIGH
                </footer>
            </div>

            <style jsx global>{`
                .stroke-text-red {
                    -webkit-text-stroke: 2px #dc2626; /* red-600 */
                    color: transparent;
                }
                .stroke-text-red:hover {
                    color: #dc2626;
                    text-shadow: 0 0 30px rgba(220, 38, 38, 0.8);
                    transition: 0.4s ease;
                }
            `}</style>
        </div>
    );
}
