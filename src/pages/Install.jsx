
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Key, FolderDown, AlertCircle, Trash2, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeBlock = ({ children }) => (
    <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
        {children}
    </div>
);

export default function Install() {
    useEffect(() => {
        document.title = "Install GAZE - Godot AI Plugin Installation";
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Installation
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Zero config. Zero system dependencies. Just a plugin.
                    </p>
                </div>

                {/* VISIBLE SPECS (Crucial for decision making) */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Supported Versions</div>
                        <div className="text-white font-medium flex items-center gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg" className="w-5 h-5 opacity-80" alt="Godot" />
                            Godot 4.5 and higher
                        </div>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Permissions Needed</div>
                        <div className="text-white font-medium flex items-center gap-2">
                            <Shield className="w-5 h-5 text-zinc-400" />
                            HTTPS Outbound (for API)
                        </div>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Installation Path</div>
                        <div className="text-white font-medium flex items-center gap-2">
                            <FolderDown className="w-5 h-5 text-zinc-400" />
                            res://addons/gaze_ai/
                        </div>
                    </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Method 2 - Manual Install */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-violet-500/10 p-2 rounded-lg">
                            <Download className="w-6 h-6 text-violet-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">Manual Installation</h2>
                    </div>

                    <div className="pl-0 md:pl-14 space-y-10"> {/* Reduced padding on mobile */}

                        {/* Step 1 */}
                        <div className="space-y-4 relative">
                            <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-bold hidden md:flex">1</div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2 md:block">
                                <span className="md:hidden font-bold text-zinc-500 mr-2">1.</span>
                                Download the release
                            </h3>
                            <p className="text-zinc-400">
                                Grab the latest <span className="text-zinc-200">gaze_ai.zip</span> from our GitHub releases.
                            </p>
                            <Link
                                to="/waitlist"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-medium transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download ZIP
                            </Link>
                        </div>

                        {/* Step 2 */}
                        <div className="space-y-4 relative">
                            <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-bold hidden md:flex">2</div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2 md:block">
                                <span className="md:hidden font-bold text-zinc-500 mr-2">2.</span>
                                Extract to addons folder
                            </h3>
                            <p className="text-zinc-400">
                                Unzip the folder into your project's <span className="text-zinc-200 font-mono text-sm">addons/</span> directory.
                            </p>
                            <CodeBlock>
                                <div className="leading-relaxed">
                                    my_godot_project/<br />
                                    ├── project.godot<br />
                                    └── addons/<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-violet-400">gaze_ai/</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── plugin.cfg
                                </div>
                            </CodeBlock>
                        </div>

                        {/* Step 3 */}
                        <div className="space-y-4 relative">
                            <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-sm font-bold hidden md:flex">3</div>
                            <h3 className="text-lg font-medium text-white flex items-center gap-2 md:block">
                                <span className="md:hidden font-bold text-zinc-500 mr-2">3.</span>
                                Enable & Configure Keys
                            </h3>
                            <p className="text-zinc-400">
                                1. In Godot, go to <b className="text-white">Project → Project Settings → Plugins</b>.<br />
                                2. Check the "Enable" box next to <b className="text-white">GazeAI</b>.<br />
                                3. A new dock will appear. Click the <Settings className="w-4 h-4 inline mx-1" /> icon to add your API key.
                            </p>
                            <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm text-zinc-400">
                                <p>We support <b>OpenAI (GPT-4o)</b> and <b>Anthropic (Claude 3.5 Sonnet)</b> keys.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="h-px bg-zinc-800/50" />

                {/* Uninstall Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-zinc-800/50 p-2 rounded-lg">
                            <Trash2 className="w-6 h-6 text-zinc-500" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">How to Uninstall</h2>
                    </div>

                    <div className="pl-0 md:pl-14">
                        <p className="text-zinc-400 mb-4">
                            We don't leave garbage behind. To remove GazeAI completely:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                            <li>Disable the plugin in <b className="text-white">Project Settings → Plugins</b>.</li>
                            <li>Delete the <span className="font-mono text-xs bg-zinc-900 px-1 py-0.5 rounded">addons/gaze_ai</span> folder.</li>
                            <li className="text-zinc-500">That's it. No hidden files. No registry keys.</li>
                        </ol>
                    </div>
                </section>

            </div>
        </div>
    );
}
