import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Project"
import About from "./pages/About"
import Contact from "./pages/Contact"
import LightPillar from "./components/LightPillar"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full h-full fixed top-0 left-0 -z-50">
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
        <Home />
        <div className="w-full max-w-7xl mx-auto">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
