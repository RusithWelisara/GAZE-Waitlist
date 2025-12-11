import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-violet-500/20 border border-violet-500/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-zinc-800",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 text-zinc-300",
    ghost: "hover:bg-zinc-800 text-zinc-400 hover:text-white",
};

export default function Button({ children, variant = "primary", className = "", ...props }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "px-6 py-2.5 rounded-lg font-medium transition-colors outline-none focus:ring-2 focus:ring-violet-500/50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
