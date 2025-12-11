import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Pricing() {
    const tiers = [
        {
            name: "FREE",
            price: "$0",
            period: "/month",
            desc: "For hobbyists and students.",
            features: ["25 AI requests", "Godot plugin", "Basic code generation", "No scene editing"],
            cta: "Get Started",
            variant: "outline"
        },
        {
            name: "CREATOR",
            price: "$9",
            period: "/month",
            desc: "For serious creators.",
            features: ["Unlimited requests", "Scene editing", "Code patches", "Smart nodes", "Asset AI actions", "Code style memory"],
            cta: "Get Creator",
            variant: "primary"
        },
        {
            name: "STUDIO",
            price: "$29",
            period: "/month",
            desc: "For teams building real games.",
            features: ["Team shared memory", "Team coding conventions", "Priority LLM", "Local LLM support", "AI architecture assistant", "Multiplayer/network templates"],
            cta: "Get Studio",
            variant: "secondary"
        },
        {
            name: "ENTERPRISE",
            price: "Custom",
            period: "",
            desc: "For large organizations.",
            features: ["On-premise LLM", "Custom fine-tuning", "Dedicated engineer support"],
            cta: "Contact Us",
            variant: "outline"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:pt-48 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Simple, transparent pricing.</h1>
                    <p className="text-zinc-400 text-xl">Choose the plan that fits your needs.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "p-8 rounded-2xl border flex flex-col transition-all duration-200 hover:border-zinc-700",
                                tier.variant === "primary" ? "bg-zinc-900 border-violet-500/50 shadow-2xl shadow-violet-500/10" : "bg-zinc-950/50 border-zinc-800"
                            )}
                        >
                            <h3 className="font-medium text-zinc-400 mb-2 tracking-wide text-sm uppercase">{tier.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                {tier.period && <span className="text-zinc-500 ml-1">{tier.period}</span>}
                            </div>
                            <p className="text-sm text-zinc-400 mb-8 min-h-[40px] leading-relaxed">{tier.desc}</p>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <Check size={16} className="text-violet-500 mt-1 shrink-0" />
                                            <span className="leading-tight">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/waitlist" className="w-full">
                                <Button variant={tier.variant} className="w-full">
                                    {tier.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center text-zinc-500 text-sm">
                    <p>Cancel anytime. No vendor lock-in. Your code is yours.</p>
                </div>
            </div>
        </div>
    );
}
