import React from "react";

const Hero = () => {
  return (
    <section className="hero-main position-relative min-vh-100">
      <div className="hero-bg">
        <div className="container">
          <div class="row justify-content-between py-5 gap-5 flex-lg-nowrap">
            <div class="content-col col-lg-7 d-flex flex-column justify-content-center">
              <div class=" pt-5 pt-lg-0 ">
                <h1 class="fs-9 text-white mb-2 text-lg-start text-center px-lg-0 px-3">
                  Central Florida Roofing Professionals
                </h1>
                <h2 class="heading-hero text-white fw-bold py-2 text-lg-start text-center">
                  Our Name is Our Promise.
                </h2>
                <p className="hero-desc fw-medium text-white fs-9 text-lg-start text-center">
                  Since we bring over three decades of roofing experience to
                  every job, you can trust that you’re getting the best experts
                  on your side. As a full service company, we’ll handle any job,
                  big or small, making sure you’re well taken care of no matter
                  what.
                </p>
              </div>
              <ul class="d-flex flex-column align-items-center align-items-lg-start text-white gap-3 my-4">
                <li class="d-flex align-items-center">
                  <img
                    src="/assets/users.svg"
                    alt="Family owned and operated"
                  />
                  <p class="micro fw-bld ms-2 mb-0 fs-9">
                    Family owned and operated
                  </p>
                </li>

                <li class="highlights__item d-flex align-items-center">
                  <img
                    src="/assets/bulb.svg"
                    alt="Residential and commercial solutions"
                  />
                  <p class="micro fw-bld ms-2 mb-0 fs-9">
                    Residential and commercial solutions
                  </p>
                </li>

                <li class="highlights__item d-flex align-items-center">
                  <img
                    src="/assets/Financing.svg"
                    alt="Financing options for qualified homeowners"
                  />
                  <p class="micro fw-bld ms-2 mb-0 fs-9">
                    Financing options for qualified homeowners
                  </p>
                </li>
              </ul>
              <a href="#" class=" text-decoration-none">
                <div class="d-flex align-items-center gap-2 position-relative">
                  <div className="gr-cloud-cobalt-180deg p-1 rounded-5">
                    <img
                      width="55"
                      height="55"
                      src="/assets/tim.png"
                      alt="Image"
                      sizes="(max-width: 100px) 100vw, 100px"
                      className="rounded-5"
                    />
                  </div>
                  <div className="gr-cloud-cobalt-180deg p-1 rounded-5 position-absolute" style={{left: "20px"}}>
                    <img
                      width="55"
                      height="55"
                      src="/assets/tim.png"
                      alt="Image"
                      sizes="(max-width: 100px) 100vw, 100px"
                      className="rounded-5"
                    />
                  </div>
                  <div className="gr-cloud-cobalt-180deg p-1 rounded-5 position-absolute" style={{left: "40px"}}>
                    <img
                      width="55"
                      height="55"
                      src="/assets/tim.png"
                      alt="Image"
                      sizes="(max-width: 100px) 100vw, 100px"
                      className="rounded-5"
                    />
                  </div>
                  <div className="bg-cloud rounded-5 shadow d-flex align-items-center position-absolute" style={{left: "60px"}}>
                    <div className="gr-cloud-cobalt-180deg p-1 rounded-5">
                      <img
                        width="55"
                        height="55"
                        src="/assets/tim.png"
                        alt="Image"
                        sizes="(max-width: 100px) 100vw, 100px"
                        className="rounded-5"
                      />
                    </div>
                    <p class="fw-bld text-white p-0 m-0 px-3">
                      340+ 5-Star Reviews!
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-5 col-xl-4 pos-rel flex justify-content-center">
              <div class="form-wrapper w-100 mx-auto" style={{maxWidth: '400px'}}>
                <div className="" >
                  <h3 class="text-servicesbg text-center fs-lg-6 fs-8 fw-bolder text-align-center mb-3">
                    Get The Roof You Deserve
                  </h3>
                  <form action="">
                    <ul className="d-flex flex-column gap-2">
                      <li className="d-flex flex-column">
                        <label htmlFor="Name" className="label">
                          Name:*
                        </label>
                        <input type="text" />
                      </li>
                      <li className="d-flex flex-column">
                        <label htmlFor="Phone" className="label">
                          Phone:*
                        </label>
                        <input type="tel" />
                      </li>
                      <li className="d-flex flex-column">
                        <label htmlFor="Email" className="label">
                          Email:*
                        </label>
                        <input type="email" />
                      </li>
                      <li className="d-flex flex-column">
                        <label htmlFor="services" className="label">
                          Services
                        </label>
                        <select name="input_8" class="large gfield_select">
                          <option
                            value=""
                            selected="selected"
                            class="gf_placeholder"
                            className="fs-4"
                          >
                            Select
                          </option>
                          <option value="Residential Roofing">
                            Residential Roofing
                          </option>
                          <option value="Commercial Roofing">
                            Commercial Roofing
                          </option>
                          <option value="Gutters">Gutters</option>
                          <option value="Roof Repairs Maintenance">
                            Roof Repairs Maintenance
                          </option>
                          <option value="Warranty Information">
                            Warranty Information
                          </option>
                        </select>
                      </li>
                      <li className="d-flex flex-column">
                        <label htmlFor="Name" className="label">
                          Message:
                        </label>
                        <textarea
                          name="input_4"
                          id="input_3_4"
                          class="textarea small"
                        ></textarea>
                      </li>
                    </ul>
                    <button
                      class="btn-shadow btn btn--blue rounded-5 text-white px-5 fw-bold  fs-7 d-flex align-items-center justify-content-center w-100"
                      style={{ height: "50px" }}
                    >
                      Get Started Today
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
