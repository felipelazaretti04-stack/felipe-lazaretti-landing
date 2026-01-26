"use client";

import Icon from "@/components/Icon";
import { motion, useReducedMotion } from "framer-motion";

export default function WhatsAppFloatingButton({ href }: { href: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black shadow-soft transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
      aria-label="Chamar no WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
      }
      whileHover={
        reduceMotion ? undefined : { y: -2, transition: { duration: 0.18 } }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      WhatsApp
    </motion.a>
  );
}
