import { motion, HTMLMotionProps } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] group",
        hoverEffect && "hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_40px_rgba(120,119,198,0.2)]",
        className
      )}
      {...props}
    >
      {/* Subtle inner gradient glow that reveals on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
