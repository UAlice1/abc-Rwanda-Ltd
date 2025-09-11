import Hero from "@/Components/Hero";
import Gallery from "@/app/garelly/page"; 
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Testimony from "@/Components/testimony";


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
       <section className="w-[100vw]">
      
      </section>
    </>
  );
}