import React from 'react'

const Footer = () => {
  return (
    <footer id="colophon" class="site-footer c-white gr-cloud-alt-navy-160deg pt-5">
      <div class="container py-md"><div class="row justify-content-center justify-content-lg-between">
        <div class="col-12 col-lg-4">
          <div class="site-footer__branding d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <a href="#" rel="home" class="footer-logo-link">
              <img src="/assets/footer_logo.svg" alt="Trust Roofing" />
            </a>

            <div class="social-links d-flex align-items-center">

              <a href="#" class="clickable">
                <img src="/assets/facebook.svg" alt="" class="social-links__item" />
              </a>

              <a href="#" class="clickable">
                <img src="/assets/instagram.svg" alt="" class="social-links__item" />
              </a>

              <a href="#" class="clickable">
                <img src="/assets/youtube.svg" alt="" class="social-links__item" />
              </a>

            </div>
          </div>
        </div>
        <div class="col-lg-8 site-footer_nav d-none d-lg-block">
          <nav>
            <ul id="menu-footer" class="footer-nav d-flex my-0"><li><a href="#" className='text-decoration-none'>About</a>
              <ul class="sub-menu">
                <li><a href="#" className='text-decoration-none fs-8'>Careers</a></li>
                <li><a href="#" className='text-decoration-none'>Reviews</a></li>
              </ul>
            </li>
              <li><a href="#"  className='text-decoration-none'>Services</a>
                <ul class="sub-menu">
                  <li><a href="#" className='text-decoration-none'>Residential Roofing</a></li>
                  <li><a href="#"  className='text-decoration-none'>Commercial Roofing</a></li>
                  <li><a href="#"  className='text-decoration-none'>Gutters</a></li>
                  <li><a href="#" className='text-decoration-none'>GAF Solar Shingles Roofing</a></li>
                </ul>
              </li>
              <li><a href="#"  className='text-decoration-none'>Resources</a>
                <ul class="sub-menu">
                  <li><a href="#" className='text-decoration-none'>Instant Roof Quote</a></li>
                  <li><a href="#"  className='text-decoration-none'>Financing</a></li>
                  <li><a href="#" className='text-decoration-none'>Warranties</a></li>
                  <li><a href="#" className='text-decoration-none'>FAQs</a></li>
                </ul>
              </li>
              <li><a href="#" className='text-decoration-none'>Blog</a></li>
              <li><a href="#" className='text-decoration-none'>Contact</a></li>
            </ul>					</nav>
        </div>
      </div>
      </div>
      <div className='d-flex gap-5 align-items-center mt-5 justify-content-lg-start justify-content-center p-lg-0 p-3'>
        <img src="/assets/map.png"  className='map d-lg-flex d-none'/>
        <div>
          <ul className='d-flex gap-5 flex-wrap'>
            <li className='d-flex gap-2 align-items-center text-white fs-1 fw-bolder'>
              <img src="/assets/gmail-icon.svg" alt="gmail-icon" />
              <span className='fst-italic'>info@trustroofing.com</span>
            </li>
            <li className='d-flex gap-2 align-items-center text-white fs-1 fw-bolder'>
              <img src="/assets/phone-icon.svg" alt="phone-icon" />
              <span className='fst-italic'>(813) 807-3943</span>
            </li>
            <li className='d-flex gap-2 align-items-center text-white fs-1 fw-bolder'>
              <img src="/assets/location-icon.svg" alt="location-icon" />
              <span className='fst-italic'>2322 Lake Avenue <br /> SE Largo, FL 33771</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="container-fluid  text-white ">
      <div class="row bg-copyrightbg py-2">
			<div class="col-12 d-flex justify-content-center align-items-center">
				<p class="fs-1 mb-0">Copyright ©&nbsp;2024&nbsp;Trust Roofing.			
									&nbsp;|&nbsp;Website design by&nbsp;<a href="#" class="text-decoration-none">Hook Agency</a></p>
							</div>
		</div></div>

    </footer>
  )
}

export default Footer;