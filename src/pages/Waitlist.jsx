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
        experience_level: "",
        biggest_pain: "",
        expectations: "",
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
                        experience_level: formData.experience_level,
                        biggest_pain: formData.biggest_pain,
                        expectations: formData.expectations,
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
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    Early Access for Developers Who Care About Code Safety
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    GAZE is not for one-click magic. It's for devs who want AI speed <span className="text-zinc-200 font-semibold italic">without losing control</span>.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Benefits */}
                <div className="bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-2xl font-bold mb-8">What to Expect</h3>
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
                    <div className="mt-12 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                        <h4 className="text-amber-500 font-bold mb-2 text-sm uppercase tracking-wide">Timeline Update</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Early access starts after <strong>March 2026</strong>. <br />
                            We’re prioritizing stability over speed.
                        </p>
                    </div>
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
                            <label className="block text-sm font-medium text-zinc-300 mb-2">Experience level with Godot</label>
                            <select
                                required
                                className="input-base w-full appearance-none bg-zinc-900"
                                value={formData.experience_level}
                                onChange={(e) => setFormData({ ...formData, experience_level: e.target.value })}
                            >
                                <option value="" disabled>Select your level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
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
                            <label className="block text-sm font-medium text-zinc-300 mb-2">What is one thing you expect GAZE to do?</label>
                            <textarea
                                required
                                className="input-base min-h-[80px] py-3 resize-none"
                                placeholder="e.g. Catch type errors, explain legacy code..."
                                value={formData.expectations}
                                onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
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
