import React from "react";

const Faq = () => {
  return (
    <section class="faqs bg-white">
      <div class="container">
        <div class="row justify-content-center">
               <h2 className="text-center fs-10 text-light-100 fw-semibold mb-3">Frequently Asked <span>Questions</span></h2>
          <div class="col-lg-6 col-md-9 faqs__outer position-relative mt-3">
            <div class="faqs__wrapper text-light-100 d-flex flex-column">
              <div class="faq-item">
                <div class="faq-item__top">
                  <h3 class="mb-3 border-3 border-bottom border-light-100 lh-base text-capitalize">Do you offer emergency roof repairs?</h3>
                </div>
                <div class="faq-item__btm">
                  <p>We offer 24/7 tarping services and emergency roof repairs.</p>
                </div>
              </div>

              <div class="faq-item">
                <div class="faq-item__top">
                  <h3 class=" mb-3 border-3 border-bottom border-light-100 lh-base text-capitalize">How Do I Know When To Repair Or Replace My Roof?</h3>
                </div>
                <div class="faq-item__btm">
                  <p>
                    One of the main things we look at is what course of action
                    for that specific roof on each homeowners budget. If there
                    is a small problematic area where install is at fault but
                    the rest of the roof is in good shape a repair can usually
                    suffice. If the roof is overall very worn out and beyond its
                    normal lifespan we usually will recommend replacement.
                  </p>
                </div>
              </div>

              <div class="faq-item">
                <div class="faq-item__top">
                  <h3 class=" mb-3 border-3 border-bottom border-light-100 lh-base text-capitalize">What roofing materials do you install?</h3>
                </div>
                <div class="faq-item__btm">
                  <p>
                    &nbsp;We are proud to offer a variety of material options
                    including: Asphalt Shingles, Clay/Concrete Tile, Metal
                    roofing (All kinds), F-Wave, TPO, PVC, Torch Down and
                    more.&nbsp;
                  </p>
                </div>
              </div>

              <div class="faq-item">
                <div class="faq-item__top">
                  <h3 class=" mb-3 border-3 border-bottom border-light-100 lh-base text-capitalize">Why should I work with Trust Roofing?</h3>
                </div>
                <div class="faq-item__btm">
                  <p className='fw-normal'>
                    We offer the absolute highest care factor the roofing
                    industry can offer. From our crews, our materials and back
                    office team, we bring all that together to create a
                    controlled process that offers consistent top notch results
                    from start to finish. You won't be left in the dark with us
                    and you won't have trouble reaching the members of our team,
                    both before, during and after the job. We believe that the
                    roofing industry needs to be held to a higher standard for
                    homeowners nationwide and are doing our part to raise that
                    standard!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
