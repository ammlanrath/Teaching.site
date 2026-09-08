"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Video,
  Award,
  Calendar,
  PlayCircle,
  Users,
  FileText,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  CheckCircle,
  ClipboardCheck,
  UserCheck,
  BarChart2,
  Menu,
  X,
  Moon,
  Sun,
  ClipboardList,
  Library,
  BarChart3,
  BookOpen
} from 'lucide-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState('live');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Background Ambient Gradient Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent opacity-[0.04] blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay" />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image src="/logo-main.png" alt="Elevate Logo" width={140} height={40} className="object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="#how-it-works" className="hover:text-accent transition-colors">Methodology</Link>
            <Link href="#subjects" className="hover:text-accent transition-colors">Curriculum</Link>
            <Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-alt transition-colors text-ink/70 hover:text-ink">
              <Moon size={20} />
            </button>
            <Link href="/dashboard/student" className="font-semibold text-sm hover:text-accent transition-colors">
              Log in
            </Link>
            <Link href="#book-demo" className="group flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-indigo-600 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5">
              <span>Book a Demo</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-bold text-xl">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-surface-alt rounded-full">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-xl font-medium">
              <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>Methodology</Link>
              <Link href="#subjects" onClick={() => setIsMobileMenuOpen(false)}>Curriculum</Link>
              <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <hr className="border-border my-2" />
              <Link href="/dashboard/student" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
              <Link href="#book-demo" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-white text-center py-4 rounded-xl mt-4">
                Book a Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <div className="space-y-2">
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold tracking-wider uppercase mb-4">
                Class 8, 9 & 10
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
                The Academic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">Ecosystem</span> <br />
                For High-Achievers.
              </motion.h1>
            </div>
            
            <motion.p variants={fadeInUp} className="text-lg text-ink/70 max-w-xl leading-relaxed">
              India's premier digital classroom providing scholars with structured live board preparations, comprehensive chapter vaults, and Sunday evaluation cycles. Engineered for board mastery.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">
              <Link href="#book-demo" className="group flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-indigo-600 transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1">
                <span>Book Live Demo (₹100)</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#pricing" className="px-8 py-4 rounded-full font-semibold text-base bg-surface-alt hover:bg-ink hover:text-surface transition-all border border-transparent hover:border-ink">
                View Tuition Pricing
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-border mt-4">
              {[
                { icon: Video, label: "Live Classes" },
                { icon: Award, label: "Board Aligned" },
                { icon: Calendar, label: "Sunday Tests" },
                { icon: PlayCircle, label: "Recorded Lectures" },
                { icon: Users, label: "Expert Faculty" },
                { icon: FileText, label: "Premium Worksheets" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                  <item.icon size={16} className="text-accent" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink/10 border border-white/20 bg-surface-alt aspect-[4/3]">
              <Image 
                src="/hero-main.png" 
                alt="Classroom Dashboard" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-4 flex items-center gap-4 hidden md:flex"
            >
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-ink/60 font-semibold uppercase tracking-wider">Weekly Test</p>
                <p className="font-bold text-lg">98%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-4 flex items-center gap-4 hidden md:flex"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent relative">
                <span className="absolute w-3 h-3 bg-accent rounded-full animate-ping" />
                <span className="relative w-2 h-2 bg-accent rounded-full" />
              </div>
              <div>
                <p className="text-xs text-ink/60 font-semibold uppercase tracking-wider">Live Physics</p>
                <p className="font-bold text-sm text-accent">Starts in 10m</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TRUST BAR SECTION */}
        <section className="bg-surface-alt py-16 mt-20 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-border/50">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-4xl font-display font-bold text-ink mb-2">98%</h3>
                <p className="font-semibold text-lg mb-1">Grade Improvement Rate</p>
                <p className="text-sm text-success font-medium bg-success/10 px-3 py-1 rounded-full">+12.8% vs previous cycle</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <FileCheck2 size={24} />
                </div>
                <h3 className="text-4xl font-display font-bold text-ink mb-2">15,000+</h3>
                <p className="font-semibold text-lg mb-1">Completed Worksheets</p>
                <p className="text-sm text-ink/60">3,000 submissions this quarter</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-4xl font-display font-bold text-ink mb-2">500+</h3>
                <p className="font-semibold text-lg mb-1">Enrolled Scholars</p>
                <p className="text-sm text-ink/60">Retention: 93% monthly</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURE STORY SECTION */}
        <section className="py-32 container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-4 block">Product Experience</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">A Learning Platform, Not Just Tuition</h2>
            <p className="text-lg text-ink/70">Every capability is engineered as part of one connected learning workflow - from live teaching to measurable outcomes.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features List */}
            <div className="flex flex-col gap-4">
              {[
                { id: 'live', icon: Video, title: 'Live Interactive Classes', desc: '75-minute live digital whiteboards with real-time question loops.' },
                { id: 'assignments', icon: ClipboardList, title: 'Evaluated Assignments', desc: 'Weekly graded worksheets with handwritten feedback loops returned to your vault.' },
                { id: 'materials', icon: Library, title: 'Structured Study Materials', desc: 'Chapter concept vaults, notes, and derivation proofs organized in one portal.' },
                { id: 'analytics', icon: BarChart3, title: 'Performance Analytics', desc: 'Detailed chapter-wise metrics, weak-area detection, and parent insights.' },
              ].map((feature) => (
              ].map((feature) => (
                <div 
                  key={feature.id}
                  onClick={() => setActiveShowcase(feature.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') setActiveShowcase(feature.id) }}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer outline-none ${activeShowcase === feature.id ? 'bg-surface border-accent shadow-xl shadow-accent/5 scale-105' : 'bg-transparent border-transparent hover:bg-surface-alt'}`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeShowcase === feature.id ? 'bg-accent text-white' : 'bg-surface-alt text-ink/60'}`}>
                      <feature.icon size={20} />
                    </div>
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                  </div>
                  <p className="text-ink/70 leading-relaxed ml-14">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive Image Frame */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-alt border border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeShowcase === 'live' || activeShowcase === 'analytics' ? '/hero-main.png' : activeShowcase === 'materials' ? '/subject-mathematics.png' : '/reference.png'} 
                    alt="Platform Feature Mockup" 
                    fill 
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section id="how-it-works" className="py-32 bg-ink text-surface relative overflow-hidden">
          {/* Dark mode glow effects */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent rounded-full opacity-10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-indigo-500 rounded-full opacity-10 blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-accent font-bold text-sm tracking-widest uppercase mb-4 block">Academic Blueprint</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">How Elevate Tuition Works</h2>
              <p className="text-lg text-surface/70">A simple, reliable learning methodology engineered to drive concept mastery through structured phases.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Select Subject', icon: BookOpen, desc: 'Choose from Mathematics, Science, English, or Social Studies matched directly to CBSE and ICSE boards.' },
                { step: '2', title: 'Trial Demo Class', icon: Video, desc: 'Attend a live trial session for ₹100. Download study materials, complete practice sheets, and experience the digital classroom interface.' },
                { step: '3', title: 'Unlock Masterclass', icon: Award, desc: 'Subscribe monthly per subject. Unlock 3 live lectures per week, 3 worksheets, and our Sunday assessment cycle.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    <span className="text-accent mr-2">{item.step}.</span>
                    {item.title}
                  </h3>
                  <p className="text-surface/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
               <Link href="#how-it-works" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all border border-white/20">
                Read Detailed Methodology
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 container mx-auto px-6">
          <div className="bg-gradient-to-br from-accent to-indigo-700 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-accent/30">
            {/* Ambient pattern overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-8 inline-block backdrop-blur-md border border-white/20">Trial Registration</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Unlock Your First Lecture</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Book a live trial demo in any subject for just ₹100. Get access to sample worksheets, lecture recordings, and parent dashboard insights.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#book-demo" className="group flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-alt transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center">
                  <span>Register Live Trial (₹100)</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#pricing" className="px-8 py-4 rounded-full font-bold text-lg bg-white/10 hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto">
                  See Tuition Fees
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Placeholder */}
      <footer className="bg-surface-alt border-t border-border py-12 text-center text-ink/60">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Elevate Tuitions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
