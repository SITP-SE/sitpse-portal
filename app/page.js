import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Model from "@/components/Model";
import Mission from "@/components/Mission";
import Why from "@/components/Why";
import Discovery from "@/components/Discovery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhatWeDo />
        <Model />
        <Mission />
        <Why />
        <Discovery />
      </main>
      <Footer />
    </>
  );
}
