
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowRight, Check, X, FileDiff, ShieldAlert, BadgeAlert, ChevronLeft, ChevronRight } from "lucide-react";
import DiffImg1 from "../assets/Screenshots/Diff.png";
import DiffImg2 from "../assets/Screenshots/Diff 2.png";
import HeroVideo from "../assets/Hero.mp4";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const diffImages = [DiffImg1, DiffImg2];

    // Auto-rotate slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % diffImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [diffImages.length]);

    useEffect(() => {
        document.title = "GAZE — Safe AI Code Patching for Godot Developers";
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
                        >
                            Make AI changes to your Godot project — safely, visibly, and reversibly.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 mb-8 max-w-2xl"
                        >
                            GAZE generates <span className="text-zinc-200 font-semibold">reviewable code patches</span>, not blind edits.
                            You see the diff. You approve it. Nothing touches your project without consent.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <Link to="/waitlist" className="w-full sm:w-auto">
                                <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto shadow-xl shadow-violet-500/20" aria-label="Join the Early Access Waitlist">
                                    Join the Early Access Waitlist
                                </Button>
                            </Link>
                            <Link to="/how-it-works" className="w-full sm:w-auto">
                                <Button variant="secondary" className="text-lg px-8 py-4 w-full sm:w-auto border border-zinc-700 hover:bg-zinc-800" aria-label="See How Safe Patching Works">
                                    See How Works
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xs text-zinc-500 uppercase tracking-widest font-mono"
                        >
                            Not yet released. Manual invite only.
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        {/* Professional Window Frame */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)] relative">
                            {/* Fake Header */}
                            <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">GAZE Editor Integration</span>
                                <div className="w-10"></div> {/* Spacer for symmetry */}
                            </div>

                            <video
                                src={HeroVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto brightness-90 contrast-110"
                            />
                        </div>

                        {/* Decorative side lights/glows */}
                        <div className="absolute -inset-4 bg-violet-500/10 blur-3xl -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHO THIS IS FOR (CRITICAL FILTER) */}
            <section className="py-24 px-6 border-y border-zinc-900 bg-zinc-950/30 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Godot AI Plugin for Professionals</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto">We're selective about who enters the private access group. GAZE is a tool for professional game development, not a toy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl">
                            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-500" />
                                </span>
                                This tool is for you if:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "You use Godot for real projects",
                                    "You want AI help without losing control",
                                    "You insist on seeing diffs before applying changes",
                                    "You care about reversibility and safety"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-300 items-start">
                                        <div className="w-1 h-1 rounded-full bg-green-500 mt-2.5 shrink-0"></div>
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-2xl opacity-80">
                            <h3 className="text-lg font-bold text-zinc-400 mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-500" />
                                </span>
                                This tool is NOT for you if:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "You want one-click “magic” code generation",
                                    "You don’t review changes",
                                    "You expect AI to think for you"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-500 items-start">
                                        <div className="w-1 h-1 rounded-full bg-zinc-700 mt-2.5 shrink-0"></div>
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-12 font-bold">
                                This saves you months of bad feedback later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT IT ACTUALLY DOES (NO FUTURE PROMISES) */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">What GazeAI does today:</h2>
                                <ul className="space-y-5">
                                    {[
                                        "Generates patches, not files",
                                        "Shows unified diffs inside the editor",
                                        "Lets you manually apply or reject changes",
                                        "Works directly inside Godot"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 text-zinc-300 items-center">
                                            <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-zinc-900">
                                <h2 className="text-xl font-bold text-zinc-500 mb-6">What it does not do (yet):</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Auto-apply changes",
                                        "Modify scenes silently",
                                        "Replace your workflow",
                                        "Act without permission"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-zinc-500 items-center text-sm">
                                            <X className="w-3.5 h-3.5 opacity-30" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[10px] text-zinc-700 mt-8 font-mono italic">
                                    Honesty here builds trust.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                            <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-2 shadow-2xl overflow-hidden">
                                <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 h-[300px] flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <FileDiff className="w-12 h-12 text-violet-500/40 mx-auto mb-4" />
                                        <p className="text-zinc-500 text-sm font-mono">
                                            [Editor Native Integration]<br />
                                            GazeAI Panel - Patch View
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5. COMPARISON TABLE */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why GAZE is Different</h2>
                        <p className="text-zinc-500">Built specifically for the Godot workflow, not just general coding.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-800">
                                    <th className="text-left py-4 px-6 text-zinc-500 font-medium">Feature</th>
                                    <th className="text-left py-4 px-6 text-violet-400 font-bold bg-violet-500/5 border-t-2 border-violet-500">GAZE</th>
                                    <th className="text-left py-4 px-6 text-zinc-500 font-medium">Copilot / Cursor</th>
                                    <th className="text-left py-4 px-6 text-zinc-500 font-medium">ChatGPT Website</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Integration</td>
                                    <td className="py-4 px-6 text-zinc-300 bg-violet-500/5">Native Godot Editor Panel</td>
                                    <td className="py-4 px-6 text-zinc-500">VS Code / JetBrains</td>
                                    <td className="py-4 px-6 text-zinc-500">Browser Tab (context switching)</td>
                                </tr>
                                <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Change Visibility</td>
                                    <td className="py-4 px-6 text-zinc-300 bg-violet-500/5">Full Unified Diff (Before/After)</td>
                                    <td className="py-4 px-6 text-zinc-500">Auto-complete / Streamed text</td>
                                    <td className="py-4 px-6 text-zinc-500">Copy-Paste required</td>
                                </tr>
                                <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Safety</td>
                                    <td className="py-4 px-6 text-zinc-300 bg-violet-500/5">No hidden deletions. Reject button.</td>
                                    <td className="py-4 px-6 text-zinc-500">Can hallucinate/delete code</td>
                                    <td className="py-4 px-6 text-zinc-500">Manual review required</td>
                                </tr>
                                <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20">
                                    <td className="py-4 px-6 text-white font-medium">Godot Context</td>
                                    <td className="py-4 px-6 text-zinc-300 bg-violet-500/5">Scene & Node Aware (Planned)</td>
                                    <td className="py-4 px-6 text-zinc-500">Text-file aware only</td>
                                    <td className="py-4 px-6 text-zinc-500">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. VISUAL PROOF (Focused Flow Mockup) */}
            <section className="px-6 py-24 bg-zinc-900/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">AI Code Editor for Godot</h2>
                        <p className="text-zinc-400">See exactly what changes. No hidden deletions in your GDScript files.</p>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
                        {/* Slideshow Container */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentSlide}
                                    src={diffImages[currentSlide]}
                                    alt={`AI Code Editor Diff View ${currentSlide + 1}`}
                                    className="w-full h-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + diffImages.length) % diffImages.length)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white p-2 rounded-full transition-colors"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % diffImages.length)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white p-2 rounded-full transition-colors"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {diffImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-violet-500' : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUST SECTION (CRITICAL FOR SEO) */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why This Is Safe</h2>
                        <p className="text-zinc-500">We prioritize your project's integrity over AI autonomy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "No silent edits", desc: "GAZE never modifies your code without you seeing it first." },
                            { title: "No auto-apply", desc: "You must manually click 'Apply' to accept any change." },
                            { title: "No cloud execution", desc: "Your project runs locally. AI validates; it doesn't execute." },
                            { title: "Human-in-the-loop always", desc: "AI suggests, you decide. You remain the architect." },
                            { title: "Diff-first architecture", desc: "We prioritize the patch view over the chat interface." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SAFETY & DATA (BORING = TRUST) */}
            <section className="py-24 px-6 bg-zinc-900/20 border-t border-zinc-800" id="safety">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Safety & Data Handling</h2>
                        <p className="text-zinc-400">Clear rules on how we handle your code for AI code editing.</p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
                        {[
                            "Files are sent to AI only when you ask",
                            "No background scanning",
                            "No silent edits",
                            "No training on your code",
                            "All changes are reviewable before apply"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                                <Check className="w-5 h-5 text-violet-500 shrink-0" />
                                <span className="text-zinc-200 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/20 rounded-2xl p-12 text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Join the safety-first AI movement for Godot.
                        </h2>
                        <div className="flex justify-center">
                            <Link to="/waitlist">
                                <Button variant="primary" className="h-12 px-8 text-lg">
                                    Get early access when GAZE is released
                                </Button>
                            </Link>
                        </div>
                        <div className="pt-8 border-t border-white/5">
                            <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
                                GazeAI is currently in private development.<br />
                                We’re collecting early access requests while we finish safety-critical features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
