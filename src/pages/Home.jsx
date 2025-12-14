import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Play, FileText, Check, X, Layers, Code2, ShieldCheck, Terminal, Cpu, Box, Lock, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        AI that builds games with you — <span className="text-zinc-500">not for you.</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        An engine-agnostic AI co-developer that understands your scene, your logic, and your intent.
                        <br className="hidden md:block" />
                        <span className="text-zinc-100">Works with Godot today. Unity next.</span>
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/waitlist" className="w-full sm:w-auto">
                            <Button variant="primary" className="text-lg px-8 py-3 w-full sm:w-auto shadow-xl shadow-violet-500/20 flex items-center justify-center gap-2">
                                <Play size={20} fill="currentColor" /> Try the Live Demo
                            </Button>
                        </Link>
                        <a href="#how-it-works" className="w-full sm:w-auto">
                            <Button variant="outline" className="text-lg px-8 py-3 w-full sm:w-auto flex items-center justify-center gap-2">
                                <FileText size={20} /> See How It Works
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why This Exists */}
            <section id="why-this-exists" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why another AI tool for game dev?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="mb-4 text-red-400"><X size={32} /></div>
                            <h3 className="text-xl font-bold mb-2">Unity Muse</h3>
                            <p className="text-zinc-400">Writes code. You still wire everything.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="mb-4 text-red-400"><X size={32} /></div>
                            <h3 className="text-xl font-bold mb-2">Gambo</h3>
                            <p className="text-zinc-400">Generates games. You lose control.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="mb-4 text-yellow-400"><Terminal size={32} /></div>
                            <h3 className="text-xl font-bold mb-2">Scratch</h3>
                            <p className="text-zinc-400">Visual. Professionals outgrow it.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-2xl font-medium text-white">This tool sits between all of them.</p>
                    </div>
                </div>
            </section>

            {/* What Makes This Different */}
            <section id="how-it-works" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes This Different</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-violet-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Scene-Aware AI</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                The AI understands your scene graph, object hierarchy, and relationships — not just files.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-violet-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Box size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Blocks + Code Hybrid</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Visual logic that compiles into real engine code. Edit visually or manually.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-violet-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Full Control & Transparency</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Every AI action is previewed, diffed, and approved by you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credibility Signals */}
            <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950/30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-zinc-500">
                    <div className="flex items-center gap-3">
                        <Cpu size={24} className="text-zinc-400" />
                        <span className="text-lg font-medium">Built with Godot developers in mind</span>
                    </div>
                    <div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
                    <div className="flex items-center gap-3">
                        <Lock size={24} className="text-zinc-400" />
                        <span className="text-lg font-medium">Open-core philosophy</span>
                    </div>
                    <div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
                    <div className="flex items-center gap-3">
                        <Zap size={24} className="text-zinc-400" />
                        <span className="text-lg font-medium">No vendor lock-in</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        Ready to join the revolution?
                    </h2>
                    <Link to="/waitlist">
                        <Button variant="primary" className="text-xl px-12 py-4 shadow-2xl shadow-violet-500/20">
                            Join the Waitlist
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
