import About from "./assets/components/About/About";
import Artists from "./assets/components/Artists/Artists";
import Contact from "./assets/components/Contact/Contact";
import Event from "./assets/components/Event/Event";
import Gallery from "./assets/components/Gallery/Gallery";
import Home from "./assets/components/Home/Home";
import Sponsors from "./assets/components/Sponsors/Sponsors";
import Testimonials from "./assets/components/Testimonials/Testimonials";
import Tickets from "./assets/components/Tickets/Tickets";

export default function App() {

  return (
    <>
      <Home />
      <About />
      <Artists />
      <Event />
      <Tickets />
      <Sponsors />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  )
}