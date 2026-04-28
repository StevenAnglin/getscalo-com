import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Cases from "@/components/sections/Cases";
import Stats from "@/components/sections/Stats";
import Method from "@/components/sections/Method";
import Services from "@/components/sections/Services";
import Calculator from "@/components/sections/Calculator";
import Guarantee from "@/components/sections/Guarantee";
import Team from "@/components/sections/Team";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import Resources from "@/components/sections/Resources";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function ScaloHome() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Cases />
        <Stats />
        <Method />
        <Services />
        <Calculator />
        <Guarantee />
        <Team />
        <Comparison />
        <FAQ />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
