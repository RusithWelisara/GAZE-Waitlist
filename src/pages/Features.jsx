import { useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, FileDiff, CheckSquare, AppWindow, FileCode2 } from "lucide-react";

export default function Features() {
    useEffect(() => {
        document.title = "GAZE Features - GDScript AI Editing Tools";
    }, []);

    const features = [
        {
            title: "Patch-Based Editing",
            description: "AI never overwrites your files. It generates a patch describing changes, which guarantees no accidental deletions of unrelated code.",
            icon: GitPullRequest
        },
        {
            title: "Unified Diff Viewer",
            description: "Review changes in a standard diff format. Green for additions, red for deletions. See exactly what is happening before it happens.",
            icon: FileDiff
        },
        {
            title: "Manual Apply / Reject",
            description: "You have final authority. Click 'Apply' to merge the specific chunks you want, or 'Reject' to discard the hallucination.",
            icon: CheckSquare
        },
        {
            title: "Editor-Native Integration",
            description: "Lives inside Godot (dockable). No Alt-Tab switching to a web browser. It reads the file you have open.",
            icon: AppWindow
        },
        {
            title: "Local Context Awareness",
            description: "Select which scripts and nodes are relevant. GazeAI constructs a focused prompt based on your logical selection, not a blind project scan.",
            icon: FileCode2
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:pt-48 md:pb-32">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Features for <span className="text-zinc-500">Control Freak</span> Developers
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        We stripped away the chat bots, the avatars, and the "magic" to give you raw, functional tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 text-violet-400">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    {/* Limitations - Builds Trust */}
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-zinc-200 mb-6">Current Limitations</h2>
                        <ul className="space-y-4">
                            {[
                                "Single-file edits only (no multi-file refactoring yet)",
                                "GDScript focus (C# support is experimental)",
                                "No automatic scene (.tscn) modifications",
                                "Requires an OpenAI/Anthropic API key"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What We Will Never Do */}
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-zinc-200 mb-6">What GAZE will NEVER do</h2>
                        <ul className="space-y-4">
                            {[
                                "Never auto-apply changes without review",
                                "Never rewrite your entire project in background",
                                "Never hide the diff viewer",
                                "Never modify files without explicit approval"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
