"use client";
import { useEffect } from "react";
import {
  Blog,
  ContactUs,
  Roofing,
  Owner,
  Services,
  Warranties,
  Hero,
  Testimonial
} from "./_components";
import "./page.module.css";
export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Testimonial />
      <Warranties />
      <Roofing />
      <Owner />
      {/* Projects */}
      <Blog />
      <ContactUs />
    </main>
  );
}
