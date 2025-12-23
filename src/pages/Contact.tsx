import Section from "../components/Section"
import { contactData } from "../data/project"

export default function Contact() {
    return (

        <Section id="contact">
            <div className="w-full flex flex-col items-center gap-4 px-4 text-center">
                <h2 className="text-3xl font-semibold tracking-tight mb-2">
                    {contactData.title}
                </h2>

                <p className="text-muted max-w-lg mb-10">
                    {contactData.subtitle}
                </p>

                <form className="max-w-5xl space-y-4">
                    <input
                        className="w-full p-3 bg-violet-500/10 backdrop-blur-sm border border-violet-500/70 rounded-lg focus:outline-none focus:border-accent"
                        placeholder="Your name"
                    />
                    <input
                        className="w-full p-3 bg-violet-500/10 backdrop-blur-sm border border-violet-500/70 rounded-lg focus:outline-none focus:border-accent"
                        placeholder="Email address"
                    />
                    <textarea
                        className="w-full p-3 bg-violet-500/10 backdrop-blur-sm border border-violet-500/70 rounded-lg focus:outline-none focus:border-accent min-h-30"
                        placeholder="Tell me about your project"
                    />

                    <button className="w-full px-6 py-3 bg-violet-500/5 backdrop-blur-sm border border-violet-500/50 rounded-lg text-md font-medium hover:opacity-90 transition">
                        {contactData.buttonText}
                    </button>
                </form>
            </div>

        </Section>
    )
}
