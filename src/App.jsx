import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Testimonials from "./components/Testimonials";
import Loader from "./components/Loader";

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return <>
    <Loader/>
    </>
  }
  return (
    <>
     <Navbar/>
     <Hero/>
     <Section2/>
     <Section3/>
     <PricingSection/>
     <Section4/>
     <Testimonials/>
     <Footer/>
     </>
  )
}

export default App
