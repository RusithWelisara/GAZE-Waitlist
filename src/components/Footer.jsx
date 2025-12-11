import { Link } from "react-router-dom";
import { Twitter, Youtube, Disc, Github } from "lucide-react";

export default function Footer() {
    const columns = [
        {
            title: "Product",
            links: [
                { name: "Features", path: "/features" },
                { name: "Pricing", path: "/pricing" },
                { name: "Roadmap", path: "#" },
                { name: "Docs", path: "#" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About", path: "#" },
                { name: "Careers", path: "#" },
                { name: "Contact", path: "#" },
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
                            The AI layer your game engine was missing. Build scenes, fix bugs, and generate systems with production-ready AI.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-semibold text-white mb-4">{col.title}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">© 2025 GAZE. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
