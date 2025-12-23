import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteMeta } from "../data/project"

const links = ["Home", "About", "Projects", "Contact"]

/* ===== Animation Variants ===== */
const menuVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

const itemVariants = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        y: 30,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {/* ===== Navbar Bar ===== */}
            <nav className="fixed top-0 w-full z-50 bg-bg/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <span className="font-medium tracking-tight text-2xl">
                        {siteMeta.brand}
                    </span>

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-8 text-lg">
                        {links.map(link => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-muted hover:text-white transition"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden bg-violet-500/10 backdrop-blur-sm p-2 rounded-xl"
                    >
                        <Menu />
                    </button>
                </div>
            </nav>

            {/* ===== Mobile Staggered Menu ===== */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-violet-500/20 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 bg-white/10 p-2 rounded-xl"
                        >
                            <X size={28} />
                        </button>

                        {/* Menu Content */}
                        <motion.div
                            className="h-full flex flex-col justify-center items-center gap-8"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {links.map(link => (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    variants={itemVariants}
                                    className="text-4xl font-medium text-muted hover:text-white transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
