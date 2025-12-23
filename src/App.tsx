import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Project"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Background from "./components/Background"

export default function App() {
  const showBackground = true // bisa nanti dikondisikan

  return (
    <>
      <Navbar />

      {showBackground && <Background />}

      <main>
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
