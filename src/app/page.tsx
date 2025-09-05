import Hero from "@/Components/Hero";
import Gallery from "./garelly/weddings"; 
import About from "./about/page";
import Services from "./services/page";
import Testimony from "./Testimony/page";

export default function HomePage() {
  return (
    <>
      <section className="w-[100vw]">
        <Hero />
      </section>
       <section className="w-[100vw]">
        <Services />
      </section>
       <section className="w-[100vw]">
        <About />
      </section>

   
      <section className="w-[100vw]">
        <Gallery />
      </section>
     
      <section className="w-[100vw]">
        <Testimony />
      </section>

    </>
  );
}
