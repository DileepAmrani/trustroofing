"use client";
import React, { useState, useEffect } from "react";
import "../../page.module.css";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel component
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false, // This ensures that OwlCarousel is not rendered on the server side
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    768: {
      items: 3,
    },
  };
  return (
    <section class="bg-servicesbg py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
            <h2 class="text-white fs-10 fs-md-9 fw-bold text-capitalize mb-5">
              Hear What Our Customers Are Saying!
            </h2>
          </div>

          <div className="container mt-5">
            {isClient && (
              <OwlCarousel
                className="owl-theme"
                responsive={responsive}
                loop
                margin={20}
                nav
                dots={false}
                navText={[
                  `<span class="arrow prev"><img src="/assets/back-arrow.png" alt="contact-us-icon"  style={{width: '90px'}}/></span>`,
                  `<span class="arrow next"><img src="/assets/next-arrow.png" alt="contact-us-icon" style={{width: '90px'}}/></span>`
                ]}
              >
                <div class="card--dark-gr rounded-5">
                  <div className="d-flex align-items-center gap-2">
                    <div className="mb-3">
                      <img
                        src="/assets/tim.png"
                        alt="contact-us-icon"
                        className="rounded-circle"
                        style={{
                          width: "70px",
                        }}
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/5-stars-white.svg"
                        style={{
                          width: "100px",
                        }}
                      />
                      <p className="fw-bold text-capitalize mb-4 text-white">
                        DENISE CASE
                      </p>
                    </div>
                  </div>
                  <p className="fs-2 fw-lighter text-white">
                    With my first meeting with Kevin, I knew my new roof was
                    going to be exceptional. His suggestions on shingles and his
                    commitment to a timeline held true. Dakota and his crew
                    outdid themselves with taking care of my property while they
                    were on the roof and clean up went smoothly, removing all
                    debris. Supplies were delivered on Tuesday and job completed
                    on Thursday. I am very happy with results and highly…
                  </p>
                </div>
                <div class="card--dark-gr rounded-5">
                  <div className="d-flex align-items-center gap-2">
                    <div className="mb-3">
                      <img
                        src="/assets/tim.png"
                        alt="contact-us-icon"
                        className="rounded-circle"
                        style={{
                          width: "70px",
                        }}
                      />
                    </div>
                    <div>
                      <img src="/assets/5-stars-white.svg" />
                      <p className="fw-bold text-capitalize mb-4 text-white">
                        DENISE CASE
                      </p>
                    </div>
                  </div>
                  <p className="fs-2 fw-lighter text-white">
                    With my first meeting with Kevin, I knew my new roof was
                    going to be exceptional. His suggestions on shingles and his
                    commitment to a timeline held true. Dakota and his crew
                    outdid themselves with taking care of my property while they
                    were on the roof and clean up went smoothly, removing all
                    debris. Supplies were delivered on Tuesday and job completed
                    on Thursday. I am very happy with results and highly…
                  </p>
                </div>
                <div class="card--dark-gr rounded-5">
                  <div className="d-flex align-items-center gap-2">
                    <div className="mb-3">
                      <img
                        src="/assets/tim.png"
                        alt="contact-us-icon"
                        className="rounded-circle"
                        style={{
                          width: "70px",
                        }}
                      />
                    </div>
                    <div>
                      <img src="/assets/5-stars-white.svg" />
                      <p className="fw-bold text-capitalize mb-4 text-white">
                        DENISE CASE
                      </p>
                    </div>
                  </div>
                  <p className="fs-2 fw-lighter text-white">
                    With my first meeting with Kevin, I knew my new roof was
                    going to be exceptional. His suggestions on shingles and his
                    commitment to a timeline held true. Dakota and his crew
                    outdid themselves with taking care of my property while they
                    were on the roof and clean up went smoothly, removing all
                    debris. Supplies were delivered on Tuesday and job completed
                    on Thursday. I am very happy with results and highly…
                  </p>
                </div>
                <div class="card--dark-gr rounded-5">
                  <div className="d-flex align-items-center gap-2">
                    <div className="mb-3">
                      <img
                        src="/assets/tim.png"
                        alt="contact-us-icon"
                        className="rounded-circle"
                        style={{
                          width: "70px",
                        }}
                      />
                    </div>
                    <div>
                      <img src="/assets/5-stars-white.svg" />
                      <p className="fw-bold text-capitalize mb-4 text-white">
                        DENISE CASE
                      </p>
                    </div>
                  </div>
                  <p className="fs-2 fw-lighter text-white">
                    With my first meeting with Kevin, I knew my new roof was
                    going to be exceptional. His suggestions on shingles and his
                    commitment to a timeline held true. Dakota and his crew
                    outdid themselves with taking care of my property while they
                    were on the roof and clean up went smoothly, removing all
                    debris. Supplies were delivered on Tuesday and job completed
                    on Thursday. I am very happy with results and highly…
                  </p>
                </div>
                <div class="card--dark-gr rounded-5">
                  <div className="d-flex align-items-center gap-2">
                    <div className="mb-3">
                      <img
                        src="/assets/tim.png"
                        alt="contact-us-icon"
                        className="rounded-circle"
                        style={{
                          width: "70px",
                        }}
                      />
                    </div>
                    <div>
                      <img src="/assets/5-stars-white.svg" />
                      <p className="fw-bold text-capitalize mb-4 text-white">
                        DENISE CASE
                      </p>
                    </div>
                  </div>
                  <p className="fs-2 fw-lighter text-white">
                    With my first meeting with Kevin, I knew my new roof was
                    going to be exceptional. His suggestions on shingles and his
                    commitment to a timeline held true. Dakota and his crew
                    outdid themselves with taking care of my property while they
                    were on the roof and clean up went smoothly, removing all
                    debris. Supplies were delivered on Tuesday and job completed
                    on Thursday. I am very happy with results and highly…
                  </p>
                </div>
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
