import { BrowserRouter } from "react-router-dom"

import { motion } from "framer-motion"



import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from "./components"
import { slideIn } from "./utils/motion"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App