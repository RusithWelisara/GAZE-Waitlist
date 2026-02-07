import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoVideo from '../assets/Demo.mp4';

export default function Demo() {
    useEffect(() => {
        document.title = "Full Workflow Demo - GAZE AI";
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        See GAZE in Action
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Uncut, 100% real-time workflow. From "empty script" to "working mechanic" in under 2 minutes.
                    </p>
                </div>

                {/* Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl group"
                >
                    {/* Placeholder Content - Replace src with actual video when available */}
                    <video
                        src={DemoVideo}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                    />
                </motion.div>

                {/* Context / Caption */}
                <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-zinc-900">
                    <div className="space-y-2">
                        <h3 className="text-white font-bold">No Hidden Edits</h3>
                        <p className="text-sm text-zinc-400">Every change is shown in the diff viewer before it touches your disk.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white font-bold">Standard Godot Workflow</h3>
                        <p className="text-sm text-zinc-400">Works with your existing external editor settings and version control.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white font-bold">Local Interpretation</h3>
                        <p className="text-sm text-zinc-400">The plugin parses your context locally before sending it to the LLM.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-12">
                    <Link to="/waitlist">
                        <Button variant="primary" className="h-12 px-8 text-lg">
                            Get Early Access
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
