import type { ReactNode } from "react"

export default function Section({
    id,
    children,
}: {
    id: string
    children: ReactNode
}) {
    return (
        <section id={id} className="w-full max-w-7xl h-full min-h-screen mx-auto flex items-center">
            <div className="space-y-10 mx-auto">
                {children}
            </div>
        </section>
    )
}
