
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCode, CheckCircle, Shield, GitCommit } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Step = ({ number, title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative pl-8 md:pl-0"
    >
        <div className="md:flex items-start md:gap-8 gap-4">
            <div className="hidden md:flex flex-col items-center gap-2 sticky top-24">
                <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center shrink-0 z-10">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
                        {number}
                    </span>
                </div>
                {number !== "4" && <div className="w-px h-64 bg-zinc-800/50 my-2" />}
            </div>

            <div className="flex-1 space-y-4 pt-2">
                <div className="flex items-center gap-4 md:hidden mb-4">
                    <div className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center shrink-0">
                        <span className="font-bold text-violet-400">{number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>

                <h3 className="hidden md:block text-2xl font-bold text-white mb-4">{title}</h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                        {description}
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                        <div className="text-zinc-600 text-sm">
                            {/* Placeholder for visual/diagram */}
                            <Icon className="w-16 h-16 opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function HowItWorks() {
    useEffect(() => {
        document.title = "How GAZE Works - AI Code Changes for Godot";
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto space-y-24">
                <div className="text-center max-w-2xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        The GAZE Workflow
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Understanding how GazeAI keeps you in control of your codebase.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-0 relative">
                    <Step
                        number="1"
                        title="Read project context"
                        delay={0.1}
                        icon={FileCode}
                        description={
                            <p>
                                GAZE analyzes your current script and relevant project files.
                                It builds context to understand your logic before suggesting changes.
                            </p>
                        }
                    />

                    <Step
                        number="2"
                        title="Propose changes"
                        delay={0.2}
                        icon={GitCommit}
                        description={
                            <p>
                                Instead of overwriting files, the AI generates a proposed update.
                                This ensures no code is modified without your initial request.
                            </p>
                        }
                    />

                    <Step
                        number="3"
                        title="Show diffs"
                        delay={0.3}
                        icon={Shield}
                        description={
                            <p>
                                Review changes in a standard unified diff format inside Godot.
                                See exactly which lines will be added or removed before finishing.
                            </p>
                        }
                    />

                    <Step
                        number="4"
                        title="Apply on approval"
                        delay={0.4}
                        icon={CheckCircle}
                        description={
                            <p>
                                Click apply to merge the changes into your GDScript file.
                                The Godot editor hot-reloads the script automatically for testing.
                            </p>
                        }
                    />
                </div>

                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/20 rounded-2xl p-12 text-center space-y-8">
                    <h2 className="text-3xl font-bold text-white">Ready for safe AI coding?</h2>
                    <div className="flex justify-center gap-4">
                        <Link to="/install">
                            <Button variant="primary" className="h-12 px-8 text-lg">
                                Download Plugin
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
