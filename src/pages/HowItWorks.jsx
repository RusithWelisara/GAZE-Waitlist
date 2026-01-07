
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
                        title="Select file or scope"
                        delay={0.1}
                        icon={FileCode}
                        description={
                            <p>
                                Choose the script you want to modify directly in the Godot or Gaze editor.
                            </p>
                        }
                    />

                    <Step
                        number="2"
                        title="Describe change"
                        delay={0.2}
                        icon={GitCommit}
                        description={
                            <p>
                                Tell Gaze what you want to do in natural language (e.g., "Add a double jump").
                            </p>
                        }
                    />

                    <Step
                        number="3"
                        title="Review generated patch"
                        delay={0.3}
                        icon={Shield}
                        description={
                            <p>
                                Inspect the color-coded diff to see exactly what lines are added or removed.
                            </p>
                        }
                    />

                    <Step
                        number="4"
                        title="Apply or reject"
                        delay={0.4}
                        icon={CheckCircle}
                        description={
                            <p>
                                One click to merge the code into your project or discard it completely.
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
