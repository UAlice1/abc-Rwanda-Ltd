import Hero from "@/Components/Hero";
import Gallery from "./garelly/weddings"; 


export default function HomePage() {
  return (
    <>
      <section className="w-[100vw]">
        <Hero />
      </section>

   
      <section className="w-[100vw]">
        <Gallery />
      </section>

    </>
  );
}
