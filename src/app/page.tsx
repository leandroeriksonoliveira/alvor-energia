import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Guarantees } from "@/components/sections/Guarantees";
import { Projects } from "@/components/sections/Projects";
import { QuoteCta } from "@/components/sections/QuoteCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Guarantees />
        <Projects />
        <QuoteCta />
      </main>
      <Footer />
    </>
  );
}
