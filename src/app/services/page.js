"use client";
import { useEffect } from "react";
import {
  Blog,
  ContactUs,
  Roofing,
  Owner,
  Services,
  Warranties,
  Footer,
  Hero,
  OurServices,
  FinancingOptions,
  Faq,

} from "../_components";

export default function Service() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <main >
      <OurServices/>
      {/* <Services /> */}

      <Roofing />

      <FinancingOptions/>

      <Faq/>
      <ContactUs />

    </main>
  );
}
