import React from "react";
import {
  Faq,
  Footer,
  Home,
  MulaiSewa,
  Navbar,
  OurService,
  Testimonial,
  WhyUs,
} from "../../Components";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <OurService />
      <WhyUs />
      <Testimonial />
      <MulaiSewa />
      <Faq />
      <Footer />
    </>
  );
}
