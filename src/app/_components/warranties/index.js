import React from "react";

const Warranties = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div class="row">

        <div class="col-lg-6">
              <img
              width="1024" 
                src="/assets/getting-new-roof-contractors.png"
                class="warranties-image w-100  "
                alt="getting new roof contractor"
              />
          </div>
        
          <div class="col-lg-6 d-flex align-items-center position-relative">
            <div class="two-col__content p-4 px-lg-0">
                <h2 class="headingh2 fw-bold mb-4">
                  We Stand By Our Work With No Nonsense Warranties
                </h2>
              <p className="mb-4 fs-9 fw-lighter">
                When you need roof repairs or a full replacement, you want to
                make sure you’re getting the most value on your investment.
                That’s why we make sure we not only do the job right in the
                first place, but protect it once we’re gone. When we work on
                your roof, our partnership has just begun. We warranty our
                workmanship for 10 years so if anything happens related to
                installation or workmanship during that time, we’ll be back to
                make it right. We stand by our work 100%, so you can trust
                you’re getting the best. This warranty is non pro-rated and
                fully transferable.
              </p>

              <div class="cta-link pt-xxs d-flex justify-content-center justify-content-lg-start">
                <a
                  href="#"
                  className="btn btn-shadow warranties-btn fw-bold text-white rounded-5 d-flex justify-content-center align-items-center"
                >
                  Our Warranties
                </a>
              </div>
            </div>
          </div>



          
        </div>
      </div>
    </section>
  );
};

export default Warranties;
