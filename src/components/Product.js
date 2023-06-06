import React from 'react'
import exProduct1 from "../assets/exProduct1.jpg";
import exProduct2 from "../assets/exProduct2.jpg";
import exProduct3 from "../assets/exProduct3.jpg";
import exProduct4 from "../assets/exProduct4.jpg";
const Product = () => {
  return (
    <>
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="300">

          <div class="col-lg-3 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={exProduct1} width="400px" height="550px" alt="" />
              <div class="portfolio-info">
               
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class='bx bxs-heart'></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class='bx bxs-shopping-bag'></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={exProduct2} width="400px" height="550px" alt="" />
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class='bx bxs-heart'></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class='bx bxs-shopping-bag'></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={exProduct3} width="400px" height="550px" alt="" />
              <div class="portfolio-info">
               
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class='bx bxs-heart'></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class='bx bxs-shopping-bag'></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={exProduct4} width="400px" height="550px" alt="" />
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class='bx bxs-heart'></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class='bx bxs-shopping-bag'></i></a>
                </div>
              </div>
            </div>
          </div>

          

          

        </div>

      </div>
    </section>
    </>
  )
}

export default Product