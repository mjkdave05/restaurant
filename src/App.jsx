import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Menu />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  )
}

export default App