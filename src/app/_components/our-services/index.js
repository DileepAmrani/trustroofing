import React from "react";

const OurServices = () => {
  return (
    <section class="hero feat-img bg-banner text-white text-lg-start text-center position-relative overflow-hidden">
      <div class="container">
        <div class="row justify-content-center justify-content-lg-start">
          <div class="col-lg-8 col-md-10">
            <h1 class="fs-9 fw-medium">Our Services</h1>
            <h2 class="heading-hero text-white fw-bold py-2">The Services You Need— Done Right</h2>
          </div>
        </div>
      </div>

      <img
        src="/assets/bg-light.svg"
        alt="background-pattern"
        aria-hidden="true"
        class="hero__pattern w-100 position-absolute xy-tc z-5"
      />

         <img
          width="100%"
          height="400"
          src="/assets/our-service-banner.png"
          class=" "
          alt="Older couple hugging in house with new roof"
        />
     </section>
  );
};

export default OurServices;
