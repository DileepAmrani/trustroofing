import React from 'react'

const FinancingOptions = () => {
  return (
    <section className="py-5">
    <div className="container">
      <div class="row">

      <div class="col-lg-6">
            <img
            width="1024" 
              src="/assets/financing-option-bg.png"
              class="warranties-image w-100  "
              alt="getting new roof contractor"
            />
        </div>
      
        <div class="col-lg-6 d-flex align-items-center position-relative">
          <div class="two-col__content p-4 px-lg-0">
              <h2 class="headingh2 fw-bold mb-4">
              Don’t Hesitate On Your Project — Finance Now
              </h2>
            <p className="mb-4 fs-9 fw-lighter">
            We’ve partnered with Enhancify to provide our customers with simple, convenient financing options. We know that often roof repairs or replacements aren’t something we planned for. So financing makes it easier to get the job done right away, so you don’t have to worry about leaks spreading or more costly issues occurring while you wait for funds. Get started right away with budget-friendly payment plans.
            </p>

            <div class="cta-link pt-xxs">
              <a
                href="#"
                class="btn btn-shadow warranties-btn d-flex fw-normal align-items-center justify-content-center text-white rounded-5 py-2"
              style={{height:'50px', width:'220px'}}> 
                Financing Options
              </a>
            </div>
          </div>
        </div>



        
      </div>
    </div>
  </section>
  )
}

export default FinancingOptions