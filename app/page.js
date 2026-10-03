import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <Process />
      <Calculator />
    </>
  );
}
