
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

// Import workflow videos
import SelectFilesVideo from '../assets/How It Works/Select Files.mp4';
import DescribeChangeVideo from '../assets/How It Works/Describe Change.mp4';
import ReviewPatchVideo from '../assets/How It Works/Review Patch.mp4';
import ApplyRejectVideo from '../assets/How It Works/Apply OR Reject.mp4';

const Step = ({ number, title, description, video, delay }) => (
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

                    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden min-h-[200px] flex items-center justify-center">
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto"
                        />
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
                        video={SelectFilesVideo}
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
                        video={DescribeChangeVideo}
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
                        video={ReviewPatchVideo}
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
                        video={ApplyRejectVideo}
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
