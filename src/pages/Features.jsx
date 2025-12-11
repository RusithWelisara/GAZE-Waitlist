import { motion } from "framer-motion";
import { Box, Code2, Layers, Cpu, Zap, Terminal } from "lucide-react";

export default function Features() {
    const sections = [
        {
            title: "Project-Aware AI",
            icon: <Box size={24} />,
            items: ["Entire source code", "Nodes", "Signals", "Components", "Physics", "Animation states"]
        },
        {
            title: "Code Patch Engine",
            icon: <Code2 size={24} />,
            items: ["Unified diffs", "Minimal changes", "Safe patches"]
        },
        {
            title: "Scene Graph Intelligence",
            icon: <Layers size={24} />,
            items: ["Parents/children", "Colliders", "Scripts", "Signals", "Timelines"]
        },
        {
            title: "Smart Nodes",
            icon: <Cpu size={24} />,
            items: ["Properties", "Signals", "Ready() logic", "Cleanup"]
        },
        {
            title: "Bug Fixer",
            icon: <Zap size={24} />,
            items: ["Error logs → root cause → patch"]
        },
        {
            title: "Local LLM Support",
            icon: <Terminal size={24} />,
            items: ["Llama", "Mistral", "Phi"]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:pt-48 md:pb-32">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                        Features that understand <br className="hidden md:block" />
                        <span className="text-zinc-500">your entire project.</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20">
                                {section.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-zinc-100">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, j) => (
                                        <li key={j} className="text-zinc-400 flex items-center gap-3 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500/50 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
