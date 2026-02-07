
import React, { useEffect } from 'react';
import { ShieldCheck, Lock, EyeOff, ServerOff, FileText, ArrowRight } from 'lucide-react';

const TrustPoint = ({ icon: Icon, title, description }) => (
    <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/50 transition-colors">
        <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-violet-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">
            {description}
        </p>
    </div>
);

export default function Trust() {
    useEffect(() => {
        document.title = "Data & Safety - GAZE AI Transparency & Privacy";
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="text-center space-y-6 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Data & Safety
                    </h1>
                    <p className="text-xl text-zinc-400">
                        We built GazeAI because we didn't trust other AI coding tools.
                        Here is strictly how we handle your code.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <TrustPoint
                        icon={FileText}
                        title="Files sent only on command"
                        description="Your code never leaves your machine unless you explicitly hit 'Generate'. We do not have a daemon watching your keystrokes."
                    />
                    <TrustPoint
                        icon={EyeOff}
                        title="No background scanning"
                        description="We do not index, scan, or vectorize your entire codebase in the background. We only read the specific files you add to context."
                    />
                    <TrustPoint
                        icon={ServerOff}
                        title="No training on user code"
                        description="All requests go directly to the LLM provider (OpenAI/Anthropic). We do not proxy your requests through our servers to collect data."
                    />
                    <TrustPoint
                        icon={Lock}
                        title="No silent edits"
                        description="GazeAI cannot modify your files without your permission. It generates a patch, and you must click 'Apply' to merge it."
                    />
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-green-500" />
                        Our Promise
                    </h2>
                    <div className="space-y-4 text-zinc-300">
                        <p>
                            Many AI tools operate as "black boxes" that insert code automatically. We believe this is dangerous for serious development.
                        </p>
                        <p>
                            GazeAI is designed to be a <b>transparent interface</b> between you and the LLM.
                            You see the prompt we send. You see the diff we receive. You control the merge.
                        </p>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="space-y-8 pt-12 border-t border-zinc-800">
                    <h2 className="text-3xl font-bold text-center text-white">How it Works Under the Hood</h2>
                    <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 overflow-x-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px]">
                            {/* Step 1 */}
                            <div className="text-center space-y-2 flex-1">
                                <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto">
                                    <FileText className="w-8 h-8 text-zinc-400" />
                                </div>
                                <h4 className="text-white font-bold">1. Your Code</h4>
                                <p className="text-xs text-zinc-500">Local Files</p>
                            </div>

                            <ArrowRight className="text-zinc-600 w-6 h-6 rotate-90 md:rotate-0" />

                            {/* Step 2 */}
                            <div className="text-center space-y-2 flex-1">
                                <div className="w-16 h-16 rounded-xl bg-violet-900/20 border border-violet-500/50 flex items-center justify-center mx-auto">
                                    <ShieldCheck className="w-8 h-8 text-violet-400" />
                                </div>
                                <h4 className="text-white font-bold">2. Gaze Plugin</h4>
                                <p className="text-xs text-zinc-500">Local Context Parsing</p>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-zinc-500 uppercase font-mono">Encrypted</span>
                                <ArrowRight className="text-zinc-600 w-6 h-6 rotate-90 md:rotate-0" />
                            </div>

                            {/* Step 3 */}
                            <div className="text-center space-y-2 flex-1">
                                <div className="w-16 h-16 rounded-xl bg-indigo-900/20 border border-indigo-500/50 flex items-center justify-center mx-auto">
                                    <ServerOff className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h4 className="text-white font-bold">3. LLM API</h4>
                                <p className="text-xs text-zinc-500">OpenAI / Anthropic / Local</p>
                            </div>

                            <ArrowRight className="text-zinc-600 w-6 h-6 rotate-90 md:rotate-0" />

                            {/* Step 4 */}
                            <div className="text-center space-y-2 flex-1">
                                <div className="w-16 h-16 rounded-xl bg-green-900/20 border border-green-500/50 flex items-center justify-center mx-auto">
                                    <FileText className="w-8 h-8 text-green-400" />
                                </div>
                                <h4 className="text-white font-bold">4. Diff View</h4>
                                <p className="text-xs text-zinc-500">Review & Apply</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="space-y-8 pt-12 border-t border-zinc-800">
                    <h2 className="text-3xl font-bold text-center text-white">Common Questions</h2>
                    <div className="grid gap-6">
                        {[
                            {
                                q: "Does GAZE send my full project to the cloud?",
                                a: "No. GAZE only sends the specific script file and relevant context nodes you select. We do not upload your entire project folder."
                            },
                            {
                                q: "Can I undo changes?",
                                a: "Yes. All changes are applied via standard Godot undo/redo history or version control (Git). You can revert any applied patch instantly."
                            },
                            {
                                q: "What if the AI makes a mistake?",
                                a: "You will see it in the diff viewer before applying. If you spot an error, you simply click 'Reject' or edit the prompt and try again."
                            },
                            {
                                q: "Is this like Unity Muse?",
                                a: "Muse is an all-encompassing suite often focused on generation. GAZE is a surgical tool focused specifically on safe, reviewable code modification."
                            },
                            {
                                q: "Who is this NOT for?",
                                a: "It is not for developers who want a 'magic button' to build a whole game. It is for those who want an intelligent assistant to write functions while they maintain architectural control."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                <p className="text-zinc-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
