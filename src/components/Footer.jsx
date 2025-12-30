import { Link } from "react-router-dom";
import { Twitter, Youtube, Disc, Github } from "lucide-react";

export default function Footer() {
    const columns = [
        {
            title: "Product",
            links: [
                { name: "Waitlist", path: "/waitlist" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Features", path: "/features" },
                { name: "Install", path: "/install" },
                { name: "Data & Safety", path: "/trust" },
            ]
        },
        {
            title: "Community",
            links: [
                { name: "GitHub", path: "https://github.com/Start-Gaze/GazeAI" },
                { name: "Discord", path: "#" },
            ]
        }
    ];

    return (
        <footer className="border-t border-zinc-900 bg-zinc-950 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-indigo-600"></div>
                            <span className="text-lg font-bold text-white">GAZE</span>
                        </div>
                        <p className="text-zinc-400 text-sm max-w-xs">
                            AI-powered code changes for Godot — reviewed, diffed, and under your control.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-semibold text-white mb-4">{col.title}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        {link.path.startsWith("http") ? (
                                            <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.path} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">© 2025 GAZE. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Start-Gaze/GazeAI" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Disc size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
