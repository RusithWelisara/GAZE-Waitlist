import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Check, X, Code2, Layers, Cpu, Zap, Users, Terminal, Box } from "lucide-react";
import { cn } from "../lib/utils";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400">
                            The AI Layer Your Game Engine Was Missing.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Generate real systems, fix bugs, and build scenes—inside Godot and Unity—with production-ready AI.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/waitlist" className="w-full sm:w-auto">
                            <Button variant="primary" className="text-lg px-8 py-3 w-full sm:w-auto shadow-xl shadow-violet-500/20">Get Early Access</Button>
                        </Link>
                        <Link to="/pricing" className="w-full sm:w-auto">
                            <Button variant="outline" className="text-lg px-8 py-3 w-full sm:w-auto">See Pricing</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-zinc-400 text-lg">From prompt to production in three steps.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "Step 1 — Ask",
                                icon: <Terminal size={24} />,
                                color: "violet",
                                content: [
                                    { icon: null, text: "\"Make a top-down controller.\"" },
                                    { icon: null, text: "\"Build a tower defense enemy spawner.\"" },
                                    { icon: null, text: "\"Fix the null reference crash.\"" }
                                ]
                            },
                            {
                                step: "Step 2 — See",
                                icon: <Layers size={24} />,
                                color: "blue",
                                content: [
                                    { icon: <Check size={16} className="text-blue-500" />, text: "Code patches" },
                                    { icon: <Check size={16} className="text-blue-500" />, text: "Scene edits" },
                                    { icon: <Check size={16} className="text-blue-500" />, text: "Node links" }
                                ]
                            },
                            {
                                step: "Step 3 — Apply",
                                icon: <Zap size={24} />,
                                color: "green",
                                content: [
                                    { icon: <Check size={16} className="text-green-500" />, text: "One click apply" },
                                    { icon: <Check size={16} className="text-green-500" />, text: "No hallucinations" },
                                    { icon: <Check size={16} className="text-green-500" />, text: "Production ready" }
                                ]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors"
                            >
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                                    item.color === "violet" && "bg-violet-500/10 text-violet-500",
                                    item.color === "blue" && "bg-blue-500/10 text-blue-500",
                                    item.color === "green" && "bg-green-500/10 text-green-500"
                                )}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-6">{item.step}</h3>
                                <ul className="space-y-4">
                                    {item.content.map((li, j) => (
                                        <li key={j} className="flex items-start gap-3 text-zinc-400">
                                            {li.icon || <span className="text-violet-500 text-lg leading-none">"</span>}
                                            <span className={cn(!li.icon && "italic text-zinc-300")}>{li.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: <Box size={20} />, title: "Project-aware AI", desc: "Reads your full codebase context." },
                            { icon: <Layers size={20} />, title: "Scene graph", desc: "Knows your nodes hierarchies." },
                            { icon: <Code2 size={20} />, title: "Code patch engine", desc: "Generates diffs, not full files." },
                            { icon: <Cpu size={20} />, title: "Smart nodes", desc: "Instantiates prefabs automatically." },
                            { icon: <Box size={20} />, title: "Asset utilities", desc: "Manages your resources." },
                            { icon: <Zap size={20} />, title: "Bug fixing", desc: "Auto-detects and patches errors." },
                            { icon: <Terminal size={20} />, title: "Local LLM", desc: "Run fully offline." },
                            { icon: <Users size={20} />, title: "Team memory", desc: "Syncs context across devs." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 flex items-center justify-center mb-4 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-zinc-200">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why GAZE?</h2>
                        <p className="text-zinc-400">Stop copy-pasting code. Start building engines.</p>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/50">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-zinc-800 bg-zinc-900/50">
                                        <th className="p-6 text-zinc-500 font-medium text-sm uppercase tracking-wider w-1/3">Feature</th>
                                        <th className="p-6 text-zinc-500 font-medium text-sm uppercase tracking-wider text-center w-1/6">ChatGPT</th>
                                        <th className="p-6 text-zinc-500 font-medium text-sm uppercase tracking-wider text-center w-1/6">Copilot</th>
                                        <th className="p-6 text-violet-400 font-bold text-sm uppercase tracking-wider text-center bg-violet-500/5 w-1/6">GAZE</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    {[
                                        "Available inside Editor",
                                        "Scene Graph Awareness",
                                        "Asset Management",
                                        "Code Patching (Diffs)",
                                        "No Hallucinations",
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-900/50 transition-colors group">
                                            <td className="p-6 text-zinc-300 font-medium group-hover:text-white transition-colors">{row}</td>
                                            <td className="p-6 text-zinc-600 text-center"><X size={20} className="mx-auto" /></td>
                                            <td className="p-6 text-zinc-600 text-center"><X size={20} className="mx-auto" /></td>
                                            <td className="p-6 text-violet-400 text-center bg-violet-500/5"><Check size={20} className="mx-auto" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        Ready to build the future?
                    </h2>
                    <Link to="/waitlist">
                        <Button variant="primary" className="text-xl px-12 py-4 shadow-2xl shadow-violet-500/20">
                            Join the Waitlist
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
