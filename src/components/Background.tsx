import { memo } from "react"
import LightPillar from "../components/LightPillar"

const Background = memo(function Background() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none">
            <LightPillar
                topColor="#5227FF"
                bottomColor="#FF9FFC"
                intensity={0.4}
                rotationSpeed={0.3}
                glowAmount={0.005}
                pillarWidth={3.0}
                pillarHeight={0.4}
                noiseIntensity={1}
                pillarRotation={45}
                interactive={false}
                mixBlendMode="normal"
            />
        </div>
    )
})

export default Background
