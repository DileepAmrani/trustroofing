import React from "react";
import "../../page.module.css";

const Roofing = () => {
  return (
    <section className="bg-primary py-5">
      <div className="container">
          <h1 className="text-white fs-3 fw-bold mt-4">
            The Trust Roofing 4-Step Process
          </h1>
        <div className="container mt-5">
          <div className="row">
            {/* Step # 1 */}
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card--w-icon h-100 px-4 rounded-5 position-relative text-white">
                <div className="card__icon d-flex justify-content-center align-items-center pos-abs">
                  <img
                    src="/assets/contact_us-iocn.svg"
                    alt="contact-us-icon"
                  />
                </div>
                <h3 className="roofing-heading position-relative fw-bold mb-3 fs-8">
                  Step 1
                </h3>
                <h4 className="fw-bold text-capitalize mb-4">Contact Us</h4>
                <p className="fs-2 fw-lighter">
                  Nice to meet you! Upon our first meeting, we’ll chat to
                  determine your needs and scope of the project, so we can
                  better tailor our approach for you.
                </p>
              </div>
            </div>

            {/* Step # 2 */}
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card--w-icon px-4 h-100 rounded-5 position-relative text-white">
                <div className="card__icon d-flex justify-content-center align-items-center pos-abs">
                  <img src="/assets/quote-icon.svg" alt="quote-iocn" />
                </div>
                <h3 className="roofing-heading position-relative fw-bold mb-3 fs-8">
                  Step 2
                </h3>
                <h4 className="fw-bold text-capitalize mb-4">Quote</h4>
                <p className="fs-2 fw-lighter">
                  One of our roofing professionals will inspect your roof and
                  get you an honest and accurate quote of all your options. We
                  believe in swift service and can schedule quotes within 24-48
                  hours.
                </p>
              </div>
            </div>

            {/* Step # 3 */}

            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card--w-icon h-100 px-4 rounded-5 position-relative text-white">
                <div className="card__icon d-flex justify-content-center align-items-center pos-abs">
                  <img src="/assets/schedule-icon.svg" alt="schedule-icon" />
                </div>
                <h3 className="roofing-heading position-relative fw-bold mb-3 fs-8">
                  Step 3
                </h3>
                <h4 className="fw-bold text-capitalize mb-4">Schedule</h4>
                <p className="fs-2 fw-lighter">
                  We will work closely with you to get your project on the
                  schedule; we strive for quick lead times (2-3 weeks). Our
                  permit in-charge will pull all permits for the project, while
                  your production coordinator will help get all materials
                  selected and your in-house crews scheduled.
                </p>
              </div>
            </div>

            {/* Step # 4 */}
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card--w-icon h-100 px-4 rounded-5 position-relative text-white">
                <div className="card__icon d-flex justify-content-center align-items-center pos-abs">
                  <img
                    src="/assets/work-begins-icon.svg"
                    alt="work-begins-icon"
                  />
                </div>
                <h3 className="roofing-heading position-relative fw-bold mb-3 fs-8">
                  Step 4
                </h3>
                <h4 className="fw-bold text-capitalize mb-4">Work Begins</h4>
                <p className="fs-2 fw-lighter">
                  Our trained crews will rise to your roof’s challenges and
                  leave your home as clean as we found it. We walk through the
                  project with you and ensure you are 100% satisfied. On most
                  residential installs, all money is taken upon completion and
                  satisfaction is guaranteed. We back this up with a 10-year
                  Trust Roofing
                  <a href="#" className="text-light-100 fw-bold">
                    leak/labor warranty.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roofing;
