import About from "@/components/About";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Buttons from "@/components/Buttons";

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col justify-start items-center">
      <Hero />
      <About />
      <Events />
      <Music />
      <Contact />
      <Footer />
      <div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
        <Buttons />
      </div>
    </div>
  );
}
