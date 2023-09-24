import Navbar from "./(components)/Navbar";
import Docu from "./Home/Docu";
import Hero from "./Home/Hero";
import Service from "./Home/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Docu />
    </>
  );
}
