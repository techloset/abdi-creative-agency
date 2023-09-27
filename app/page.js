import CarouselSection from "./Home/CarouselSection";
import Companies from "./Home/Companies";
import Customer from "./Home/Customer";
import Docu from "./Home/Docu";
import FAQ from "./Home/FAQ";
import Hero from "./Home/Hero";
import Service from "./Home/Service";
import Testimonial from "./Home/Testimonial";
import WorkingSpace from "./Home/WorkingSpace";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Docu />
      <Customer />
      <WorkingSpace />
      <Companies />
      <CarouselSection />
      <FAQ />
      <Testimonial />
    </>
  );
}
