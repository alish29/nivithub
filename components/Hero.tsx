"use client";

import Image from "next/image";
import { Code } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import EmailForm from "@/components/EmailForm";

export default function Hero() {
  const socials = [
    { name: "Twitter", icon: FaXTwitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  ];

  return (
    <section className="relative z-10 flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 overflow-hidden">
      
      {/* Header bar */}
 

      {/* Main Grid content */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center flex-1 w-full my-auto overflow-hidden">
        
        {/* Left Side: Call to Action, Form, Countdown */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-2 sm:space-y-3 text-left max-w-xl mx-auto lg:mx-0 select-none">
          
          {/* Construction tag */}
          <div className="inline-block self-start">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#4f46e5] uppercase">
              Website Under Construction
            </span>
            <div className="h-1 w-14 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] mt-1.5 rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.08]">
            NivitHub is <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#4f46e5] via-[#5c5ee6] to-[#6366f1] bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">
            We&apos;re crafting an innovative digital experience to help you do more, faster.
          </p>

          {/* Email form */}
          <div className="w-full max-w-md">
            <EmailForm />
          </div>

          {/* Timer section */}
          <div className="w-full flex justify-start">
            <Countdown />
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs font-semibold text-slate-400">
              Follow us for updates
            </span>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-[#4f46e5] hover:border-[#818cf8] hover:shadow-[0_4px_12px_rgba(99,102,241,0.12)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: 3D Isometric Construction Illustration */}
        <div className="hidden lg:col-span-6 lg:flex items-center justify-center relative">
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: -8, opacity: 1 }}
            transition={{
              y: {
                duration: 2.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              opacity: { duration: 0.6 }
            }}
            className="w-full max-w-[380px] xl:max-w-[440px] flex justify-center"
          >
            <Image
              src="/coming_soon_illustration.png"
              alt="Website Under Construction Illustration"
              width={500}
              height={500}
              priority
              className="object-contain max-h-[45vh] xl:max-h-[50vh] w-auto drop-shadow-[0_20px_50px_rgba(99,102,241,0.1)] select-none"
            />
          </motion.div>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="w-full text-center py-1.5 shrink-0 border-t border-slate-100/60 select-none">
        <p className="text-[10px] sm:text-xs font-semibold text-slate-400">
          © {new Date().getFullYear()} <span className="text-[#4f46e5]">NivitHub</span>. All rights reserved.
        </p>
      </footer>
    </section>
  );
}