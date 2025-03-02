import Features from "@/site/sections/Features";
import Contact from "@/site/sections/Contact";
import Invitation from "@/site/sections/Invitation";
import Highlighter from "@/site/sections/Highlights";
import Testimonials from "@/site/sections/Testimonials";
import CareerCardsrc from "@/site/sections/CareerCards";
import JourneySrc from "@/site/sections/Journey";
import Hero from "@/site/sections/Hero";
import Footer from "./site/components/layouts/Footer";

import WhyChooseUs from "./site/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center mt-30 md:mt-0 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center">
        <Hero />
        <Features />
        <JourneySrc />
        <WhyChooseUs />
        <CareerCardsrc /> 
        <Highlighter />
        <Testimonials />
        <Invitation />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}
