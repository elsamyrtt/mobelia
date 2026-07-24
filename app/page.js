import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <About/>
    {/* 1-SEO 2-Tailwind*/}
    <Process/>
    </>
  );
}
