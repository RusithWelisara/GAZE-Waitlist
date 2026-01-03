import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Check, Terminal, Layers, Zap, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Waitlist() {
    useEffect(() => {
        document.title = "Get Early Access - GAZE AI for Godot";
    }, []);

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        email: "",
        years_experience: "",
        biggest_pain: "",
        invite_reason: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('waitlist')
                .insert([
                    {
                        email: formData.email,
                        years_experience: formData.years_experience,
                        biggest_pain: formData.biggest_pain,
                        invite_reason: formData.invite_reason,
                    }
                ]);

            if (supabaseError) {
                // Check if it's a unique constraint violation (error code 23505)
                if (supabaseError.code === '23505') {
                    setError("You're already on the waitlist! We'll be in touch soon.");
                    return;
                }
                throw supabaseError;
            }

            setSubmitted(true);
        } catch (err) {
            console.error("Error submitting to waitlist:", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Request Received</h1>
                    <p className="text-zinc-400">We'll contact you when early access seats become available.</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:pt-48 md:pb-32">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    Get early access when GAZE is released
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    We are opening access to developers who need technical clarity and control when using AI in the Godot engine.
                </p>
            </div>

            {/* Reused How It Works (Simplified) */}
            <div className="max-w-6xl mx-auto mb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                        <div className="text-violet-500 mb-4 bg-violet-500/10 w-12 h-12 rounded-lg flex items-center justify-center"><Terminal size={24} /></div>
                        <h3 className="font-bold mb-2 text-lg">1. Ask</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">Describe what you need in plain English. No complex prompt engineering required.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                        <div className="text-blue-500 mb-4 bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center"><Layers size={24} /></div>
                        <h3 className="font-bold mb-2 text-lg">2. See</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">Review generated patches and scene changes before they touch your code.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                        <div className="text-green-500 mb-4 bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center"><Zap size={24} /></div>
                        <h3 className="font-bold mb-2 text-lg">3. Apply</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">One-click integration into your engine. Undo anytime with version control.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Benefits */}
                <div className="bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-2xl font-bold mb-8">Benefits for Early Access</h3>
                    <ul className="space-y-6">
                        {[
                            "Cheaper lifetime rate",
                            "Private Discord access",
                            "Early feature voting rights",
                            "Access to local LLM before public launch"
                        ].map((benefit, i) => (
                            <li key={i} className="flex items-center gap-4 text-zinc-300">
                                <div className="w-6 h-6 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                                    <Check size={14} />
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form */}
                <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                            <input
                                required
                                type="email"
                                className="input-base"
                                placeholder="dev@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2">Years using Godot</label>
                            <input
                                required
                                type="text"
                                className="input-base"
                                placeholder="e.g. 2 years, just started, etc."
                                value={formData.years_experience}
                                onChange={(e) => setFormData({ ...formData, years_experience: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2">Biggest pain when editing scripts</label>
                            <textarea
                                required
                                className="input-base min-h-[80px] py-3 resize-none"
                                placeholder="What slows you down the most?"
                                value={formData.biggest_pain}
                                onChange={(e) => setFormData({ ...formData, biggest_pain: e.target.value })}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2">Why should we invite you?</label>
                            <textarea
                                required
                                className="input-base min-h-[80px] py-3 resize-none"
                                placeholder="Tell us about your project or workflow."
                                value={formData.invite_reason}
                                onChange={(e) => setFormData({ ...formData, invite_reason: e.target.value })}
                            ></textarea>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}

                        <Button
                            variant="primary"
                            className="w-full py-4 text-lg mt-4 shadow-lg shadow-violet-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Get early access"
                            )}
                        </Button>
                        <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest mt-4">
                            Early access is manually approved
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
