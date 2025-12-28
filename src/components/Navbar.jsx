import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "How It Works", path: "/how-it-works" },
        { name: "Features", path: "/features" },
        { name: "Install", path: "/install" },
        { name: "Data & Safety", path: "/trust" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            scrolled ? "bg-background/80 backdrop-blur-md border-zinc-800" : "bg-transparent border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 z-50 relative">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                        <span className="text-white text-lg font-bold">G</span>
                    </div>
                    GAZE
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                location.pathname === link.path ? "text-white" : "text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/install">
                        <Button variant="primary" className="text-sm px-4 py-2">Download Plugin</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-zinc-400 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors border-b border-zinc-800 pb-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link to="/install" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full py-4 text-lg">Download Plugin</Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
