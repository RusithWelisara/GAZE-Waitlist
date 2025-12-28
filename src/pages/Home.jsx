
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ArrowRight, Check, X, FileDiff, ShieldAlert, BadgeAlert } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        AI-powered code changes for Godot — <span className="text-zinc-500">reviewed, diffed, and under your control.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        GazeAI is a Godot editor plugin that turns natural language into safe, reviewable patches — not blind code generation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/install">
                            <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto shadow-xl shadow-violet-500/20">
                                Download Plugin
                            </Button>
                        </Link>
                        <Link to="/how-it-works">
                            <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                                See How It Works
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. VISUAL PROOF (Focused Flow Mockup) */}
            <section className="px-6 pb-32">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
                        {/* Fake Window Header */}
                        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            <span className="text-xs text-zinc-500 ml-2 font-mono">Godot Engine - Project</span>
                        </div>

                        {/* Mock Interface Content */}
                        <div className="flex h-[500px] font-mono text-sm">
                            {/* Left Pane: Prompt */}
                            <div className="w-1/3 border-r border-zinc-800 p-4 bg-zinc-900/30 flex flex-col">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-4">Prompt</div>
                                <div className="bg-zinc-950 p-3 rounded text-zinc-300 mb-4 border border-zinc-800">
                                    "Make the enemy flash red when taking damage"
                                </div>
                                <div className="mt-auto">
                                    <div className="p-2 bg-violet-600 text-white text-center rounded text-xs font-bold">Generate Patch</div>
                                </div>
                            </div>

                            {/* Right Pane: Diff */}
                            <div className="flex-1 p-4 bg-zinc-950 overflow-y-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Preview Diff: enemy.gd</div>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded text-xs">Reject</span>
                                        <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">Apply</span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="text-zinc-500 px-2 py-0.5"> func take_damage(amount):</div>
                                    <div className="text-zinc-500 px-2 py-0.5"> &nbsp;&nbsp;&nbsp;&nbsp;health -= amount</div>
                                    <div className="bg-green-500/10 text-green-400 px-2 py-0.5 border-l-2 border-green-500 select-none">
                                        +&nbsp;&nbsp;&nbsp;&nbsp;modulate = Color.RED
                                    </div>
                                    <div className="bg-green-500/10 text-green-400 px-2 py-0.5 border-l-2 border-green-500 select-none">
                                        +&nbsp;&nbsp;&nbsp;&nbsp;await get_tree().create_timer(0.1).timeout
                                    </div>
                                    <div className="bg-green-500/10 text-green-400 px-2 py-0.5 border-l-2 border-green-500 select-none">
                                        +&nbsp;&nbsp;&nbsp;&nbsp;modulate = Color.WHITE
                                    </div>
                                    <div className="text-zinc-500 px-2 py-0.5"> &nbsp;&nbsp;&nbsp;&nbsp;if health &lt;= 0:</div>
                                    <div className="text-zinc-500 px-2 py-0.5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;die()</div>
                                </div>
                            </div>
                        </div>

                        {/* Annotation Badge */}
                        <div className="absolute bottom-8 right-8 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold animate-pulse">
                            Live Update Preview
                        </div>
                    </div>
                    <p className="text-center text-zinc-500 mt-4 text-sm">
                        * Real screenshot of GazeAI diff inspector
                    </p>
                </div>
            </section>

            {/* 3. PROBLEM vs SOLUTION */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Problem */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-red-400 flex items-center gap-3">
                                <BadgeAlert className="w-6 h-6" />
                                The Problem
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <X className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">AI writes wrong code</h3>
                                        <p className="text-zinc-400">LLMs hallucinate. If you blindly paste their output, you break your project.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <X className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">Silent breaking changes</h3>
                                        <p className="text-zinc-400">You don't know what changed until runtime errors crash your game.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <X className="w-6 h-6 text-red-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">Context switching kills flow</h3>
                                        <p className="text-zinc-400">Alt-tabbing to ChatGPT and back ruins your momentum.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* The Solution */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
                                <FileDiff className="w-6 h-6" />
                                The Solution
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <Check className="w-6 h-6 text-green-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">Diff-based patches</h3>
                                        <p className="text-zinc-400">See exactly what lines are added or removed. Nothing is hidden.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="w-6 h-6 text-green-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">Manual control</h3>
                                        <p className="text-zinc-400">You apply the patch only when you are satisfied. You remain the engineer.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="w-6 h-6 text-green-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-zinc-200">Editor-native</h3>
                                        <p className="text-zinc-400">Live inside Godot. Select nodes, hit generate, review, apply. Done.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold text-white">Stop fighting the AI. Start directing it.</h2>
                    <Link to="/install">
                        <Button variant="primary" className="h-14 px-8 text-xl w-full sm:w-auto">
                            Get the Plugin
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
