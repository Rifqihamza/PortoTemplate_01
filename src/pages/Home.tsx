import Section from "../components/Section"
import { homeData } from "../data/project"

export default function Home() {
    return (
        <Section id="home">
            <div className="flex flex-col justify-center items-center w-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight ">
                    {homeData.headline.main}
                    <br /> {homeData.headline.accent}
                </h1>

                <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">
                    {homeData.description}
                </p>

                <div className="mt-10 flex gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-accent rounded-lg text-sm font-medium hover:opacity-90 transition"
                    >
                        {homeData.cta.primary}
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white/15 rounded-lg text-sm text-muted hover:text-white transition"
                    >
                        {homeData.cta.secondary}
                    </a>
                </div>
            </div>
        </Section>
    )
}
