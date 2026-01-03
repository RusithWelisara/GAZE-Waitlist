
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowRight, Check, X, FileDiff, ShieldAlert, BadgeAlert } from "lucide-react";

export default function Home() {
    useEffect(() => {
        document.title = "GAZE - AI Assistant Inside the Godot Editor";
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        AI Assistant Inside the Godot Editor
                        <span className="text-zinc-500 text-2xl md:text-4xl block mt-4 font-medium">reviewed before AI touch your project.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
                    >
                        {[
                            "Works inside Godot",
                            "Edits GDScript",
                            "Shows diffs",
                            "Requires approval"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                                <Check className="w-5 h-5 text-violet-500" />
                                <span className="text-sm font-medium text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
                    >
                        GAZE is an AI assistant for Godot that turns natural-language requests into reviewable patches. Built for professional GDScript AI workflows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4"
                    >
                        <Link to="/waitlist" className="w-full sm:w-auto">
                            <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto shadow-xl shadow-violet-500/20" aria-label="Get early access when GAZE is released">
                                Get early access when GAZE is released
                            </Button>
                        </Link>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                            Not yet released. Manual invite only.
                        </span>
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

            {/* 4. VISUAL PROOF (Focused Flow Mockup) */}
            <section className="px-6 py-24 bg-zinc-900/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">AI Code Editor for Godot</h2>
                        <p className="text-zinc-400">See exactly what changes. No hidden deletions in your GDScript files.</p>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
                        {/* Fake Window Header */}
                        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            <span className="text-xs text-zinc-500 ml-2 font-mono">Godot Engine - GazeAI Patch View</span>
                        </div>

                        {/* Mock Interface Content */}
                        <div className="flex flex-col md:flex-row h-[500px] font-mono text-sm">
                            {/* Left Pane: Prompt */}
                            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-zinc-800 p-4 bg-zinc-900/30 flex flex-col">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-4">Request</div>
                                <div className="bg-zinc-950 p-3 rounded text-zinc-300 mb-4 border border-zinc-800">
                                    "Make the player character move faster when holding shift"
                                </div>
                                <p className="text-[10px] text-zinc-500 leading-relaxed">
                                    Analyzing player.gd...<br />
                                    Found movement logic.<br />
                                    Generating patch...
                                </p>
                                <div className="mt-auto">
                                    <div className="p-2 bg-violet-600/20 text-violet-400 border border-violet-500/30 text-center rounded text-xs font-bold">Patch Ready</div>
                                </div>
                            </div>

                            {/* Right Pane: Diff */}
                            <div className="flex-1 p-4 bg-zinc-950 overflow-y-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Unified Diff: player.gd</div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded text-[10px] border border-red-500/20 uppercase font-bold">Reject</span>
                                        <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-[10px] border border-green-500/20 uppercase font-bold">Apply</span>
                                    </div>
                                </div>

                                <div className="space-y-1 text-[12px]">
                                    <div className="text-zinc-500 px-2"> func _physics_process(delta):</div>
                                    <div className="text-zinc-500 px-2"> &nbsp;&nbsp;&nbsp;&nbsp;var input_dir = Input.get_vector("left", "right", "up", "down")</div>
                                    <div className="bg-red-500/10 text-red-400 px-2 border-l-2 border-red-500">
                                        -&nbsp;&nbsp;&nbsp;&nbsp;velocity = input_dir * SPEED
                                    </div>
                                    <div className="bg-green-500/10 text-green-400 px-2 border-l-2 border-green-500">
                                        +&nbsp;&nbsp;&nbsp;&nbsp;var current_speed = SPEED * 2.0 if Input.is_action_pressed("shift") else SPEED
                                    </div>
                                    <div className="bg-green-500/10 text-green-400 px-2 border-l-2 border-green-500">
                                        +&nbsp;&nbsp;&nbsp;&nbsp;velocity = input_dir * current_speed
                                    </div>
                                    <div className="text-zinc-500 px-2"> &nbsp;&nbsp;&nbsp;&nbsp;move_and_slide()</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUST SECTION (CRITICAL FOR SEO) */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Built for Control, Not Automation</h2>
                        <p className="text-zinc-500">A Godot AI plugin that respects your workflow and project safety.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Manual approval", desc: "No code changes without explicit dev sign-off." },
                            { title: "No hidden edits", desc: "Every modification is visible in a unified diff view." },
                            { title: "No background agents", desc: "GAZE only runs when you ask it to solve a specific problem." },
                            { title: "Editor-first design", desc: "The UI lives inside Godot, not a separate window or browser." }
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
