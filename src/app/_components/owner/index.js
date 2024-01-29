import React from 'react'

const Owner = () => {
  return (
    <section className="py-5 owner-bg">
      <div className="container">
        <div class="row flex-lg-row flex-column-reverse">


        
          <div class="col-lg-6 d-flex align-items-center position-relative px-4 pt-2 ">
            <div class="company-promise__content p-4 ">
                <h2 class="fs-10 fs-md-9 fw-bold mb-4 text-white">
                "From the first call to your roof assessment through the installation and beyond, we are here for you."
                </h2>
              <p className="mb-4 fs-9 text-white">
              "From the first call to your roof assessment through the installation and beyond, we are here for you."
              </p>
              <h3 class="fs-2 fw-semibold text-white">Robin Scherer, Owner</h3>

              <div class="cta-link pt-xxs d-flex justify-content-center justify-content-lg-start">
                <a
                  href="#"
                  class="btn btn-shadow owner-btn rounded-5 px-5 py-3 fw-bold text-servicesbg fw-semibold fs-1 mt-3"
                >
                  Learn More
                </a>
              </div>
              <img src='/assets/signature.svg' alt="signature" className="signature-img  position-absolute" />
            </div>
          </div>

          <div class="col-lg-6">
              <img
              width="1024" height="501"
                src="/assets/owners.png"
                class="owner-image w-100 h-100"
                alt="getting new roof contractor"
              />
          </div>


          
        </div>
      </div>
    </section>
  )
}

export default Owner