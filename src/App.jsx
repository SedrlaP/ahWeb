import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ServiceBlob from "./components/ServiceBlob/ServiceBlob.jsx"
import Contact from "./components/Contact/Contact.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* 
          <ServiceBlob />   
        */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
