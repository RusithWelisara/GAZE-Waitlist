
import React from 'react';
import { ShieldCheck, Lock, EyeOff, ServerOff, FileText } from 'lucide-react';

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

            </div>
        </div>
    );
}
