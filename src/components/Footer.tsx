"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 500);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="bg-primary py-10 relative text-white">
            <div className="max-w-[1200px] mx-auto px-6 text-center space-y-4">
                <div className="space-y-4">
                    <p className="text-sm font-medium">
                        © Copyright <span className="font-black">Shrey</span> All Rights Reserved
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/TheNineOne" target="_blank" className="w-10 h-10 border border-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/shreymishra91/" target="_blank" className="w-10 h-10 border border-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:shreymishra589@gmail.com" className="w-10 h-10 border border-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <p className="text-sm opacity-80 pt-2">
                        Designed by <span className="underline cursor-pointer">Shrey Mishra</span>
                    </p>
                </div>
            </div>

            {showScroll && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-10 right-10 w-10 h-10 bg-primary-hover border border-white/30 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-all text-white"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </footer>
    );
}
