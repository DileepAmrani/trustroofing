import React from "react";

const Services = () => {
  return (
    <section class="bg-servicesbg py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between mb-3 mb-lg-5">
            <h2 class="text-white fs-10 fs-md-9 fw-bold text-capitalize">
              What kind of project are we starting today?
            </h2>

            <div>
              <a
                href="#"
                class="mx-auto mx-lg-0 btn btn-shadow btn d-flex align-items-center rounded-5 px-4 py-2 fw-bold bg-white"
              >
                See All Services
              </a>
            </div>
          </div>

          <div class="col-lg-6 col-md-9 mt-5 clickable">
              <div class="card card--cover overflow-hidden d-flex align-items-center justify-content-center border-0 rounded-5">
                <div class="card__inner pos-rel z-index-9 px-5 py-5 border-0 d-flex w-100 flex-column gap-3">
                  <img src="/assets/Residential.svg" alt=""  width='96' height='96'/>
                  <h4 className="text-white fs-8 fw-bold">Residential Roofing</h4>
                </div>
                <picture class="position-absolute w-100 h-100 z-0">
                  <img
                    src="/assets/residential-roofing-services-trust.png"
                    class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="House with a new roof done by Trust Roofing on a sunny Tampa Bay day"
                     sizes="(max-width: 2039px) 100vw, 2039px"
                  />
                </picture>
              </div>
          </div>

          <div class="col-lg-6 col-md-9 mt-5 clickable">
              <div class="card card--cover overflow-hidden d-flex align-items-center justify-content-center border-0 rounded-5">
                <div class="card__inner pos-rel z-index-9 p-5 border-0 d-flex w-100 flex-column gap-3">
                  <img src="/assets/Commercial.svg" alt="" width='96' height='96'/>
                  <h4 className="text-white fs-8 fw-bold">Commercial Roofing</h4>
                </div>
                <picture class="position-absolute w-100 h-100 z-0">
                  <img
                    src="/assets/commercial-roofing-services-tampa.png"
                    class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt="Beautiful blue sky and a view of a commercial flat roof"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                  /> 
                </picture>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
