
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Key, FolderDown, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeBlock = ({ children }) => (
    <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
        {children}
    </div>
);

export default function Install() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Installation
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Get up and running with GazeAI in under 2 minutes.
                    </p>
                </div>

                {/* Method 1 */}
                <section className="space-y-6 opacity-75">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-zinc-800 p-2 rounded-lg">
                            <Download className="w-6 h-6 text-zinc-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">Method 1: Godot Asset Library</h2>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full uppercase tracking-wider font-medium">Coming Soon</span>
                    </div>
                    <p className="text-zinc-400 pl-14">
                        We are currently under review for the official asset library. For now, please use the manual install method below.
                    </p>
                </section>

                <div className="h-px bg-zinc-800/50" />

                {/* Method 2 */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-violet-500/10 p-2 rounded-lg">
                            <FolderDown className="w-6 h-6 text-violet-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">Method 2: Manual Install</h2>
                    </div>

                    <div className="pl-14 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">1. Download the release</h3>
                            <p className="text-zinc-400">
                                Download the latest <span className="text-zinc-200">gaze_ai.zip</span> from our GitHub releases.
                            </p>
                            <a
                                href="https://github.com/Start-Gaze/GazeAI/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-medium transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download ZIP
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">2. Extract to addons folder</h3>
                            <p className="text-zinc-400">
                                Extract the zip file into your Godot project's <span className="text-zinc-200 font-mono text-sm">addons/</span> directory.
                            </p>
                            <CodeBlock>
                                <span className="text-zinc-500"># Your project structure should look like this:</span><br />
                                my_godot_project/<br />
                                ├── project.godot<br />
                                └── addons/<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="text-violet-400">gaze_ai/</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── plugin.cfg<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ...
                            </CodeBlock>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">3. Enable the plugin</h3>
                            <p className="text-zinc-400">
                                Open Godot, go to <span className="text-zinc-200">Project settings → Plugins</span>, and check the box next to <b className="text-white">GazeAI</b>.
                            </p>
                            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-3 text-amber-200/80 text-sm">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <p>Supported Versions: Godot 4.2+</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-zinc-800/50" />

                {/* API Key */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-violet-500/10 p-2 rounded-lg">
                            <Key className="w-6 h-6 text-violet-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">API Key Setup</h2>
                    </div>

                    <div className="pl-14 space-y-6">
                        <p className="text-zinc-400">
                            GazeAI currently requires an OpenAI API key (GPT-4o) or Anthropic API Key (Claude 3.5 Sonnet) to function.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">Where to put it</h3>
                            <p className="text-zinc-400">
                                Once enabled, a new dock will appear in Godot called <b className="text-white">GazeAI</b>.
                                Click the <b className="text-white">Settings</b> icon in the dock and paste your key.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-white">What data is sent?</h3>
                            <p className="text-zinc-400">
                                We send <b>only</b> the content of the files you explicitly select for context, along with your prompt.
                                <br />
                                Your key is stored locally in your Godot editor settings.
                            </p>
                            <Link to="/trust" className="text-violet-400 hover:text-violet-300 text-sm hover:underline">
                                Read our full Data & Safety policy →
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
