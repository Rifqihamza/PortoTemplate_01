import Section from "../components/Section"
import { aboutData, skillsData } from "../data/project"
import { CodeXml } from "lucide-react"

export default function About() {
    return (

        <Section id="about">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-wide uppercase mb-8 md:mb-12">
                    {aboutData.title}
                </h2>
                {/* ===== Header & Profile ===== */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full h-full px-6">
                    {/* ===== Avatar Card ===== */}
                    <div className="relative overflow-hidden mb-8 p-6
                            w-full max-w-xs sm:max-w-sm md:max-w-md
                            aspect-square
                            rounded-3xl
                            border-2 border-violet-600
                            bg-violet-500/10 backdrop-blur-sm">

                        {/* ===== Icon Pattern Background ===== */}
                        <div className="absolute inset-0 -z-10 opacity-15">
                            <div className="grid grid-cols-5 sm:grid-cols-6 gap-5 rotate-12 scale-110 md:scale-125 translate-y-10">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <CodeXml
                                        key={i}
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-violet-400"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ===== Avatar ===== */}
                        <img
                            src={aboutData.avatar}
                            alt="Profile"
                            className="w-46 sm:w-54 md:w-64
                            h-auto
                            relative z-10
                            mx-auto
                            translate-y-0 md:-translate-y-6"
                        />

                        {/* ===== Glow ===== */}
                        <span className="absolute inset-x-0 bottom-0 mx-auto
                                w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72
                                rounded-full
                                bg-violet-500/30
                                blur-3xl
                                -z-10" />
                    </div>

                    {/* ===== Skills ===== */}
                    <div className="flex flex-col items-center md:items-start justify-between gap-10">

                        <p className="text-muted max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-justify">
                            {aboutData.description}
                        </p>
                        <div className="w-full h-full">
                            <h3 className="font-medium text-lg tracking-wide mb-8 leading-2">
                                Currently Working With
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {skillsData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex flex-col items-center gap-2"
                                    >
                                        <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur border-2 border-violet-500/50 group-hover:border-accent transition">
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition"
                                            />
                                        </div>
                                        <span className="text-sm text-muted">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
