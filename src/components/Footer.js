import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="footer" className="footer">
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-lg-3">
              <p className="footer-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever industry. Lorem Ipsum has been the lorem.{" "}
              </p>
            </div>
            <div className="col-lg-3">
              <p className="para-title">Resent Post</p>
              <p className="para-t">About</p>
              <p className="para-t">FAQ</p>
              <p className="para-t">Career</p>
              <p className="para-t">Our Team</p>
              <p className="para-t">Our Services</p>
            </div>
            <div className="col-lg-3">
              <p className="para-title">Working Hours</p>
              <p className="para-t">Monday – Friday: 8am – 6pm EST</p>
              <p className="para-t">Saturday: 9am – 5pm EST</p>
              <p className="para-t"> Sunday: 9am – 4pm EST</p>
            </div>
            <div className="col-lg-3">
              <p className="para-title">Contact Us</p>
              <p className="para-t">90 St Johns Brooklyn, NY, United States</p>
              <p className="para-t"> contact.louisvillebeautysalon@gmail.com</p>
              <p className="para-t"> Phone: (+01)888.999.77</p>
            </div>
          </div>
        </div>
          <div className="container-fluid footer-base ">
            <div>
            <p className="base-para">© Copyright 5TechG Beauty Salon All rights reserved.</p>
            </div>
            <div>
            <p className="base-para">Privacy Policy     Terms of Use</p>
            </div>
            
          </div>
      </section>
    </div>
  );
};

export default Footer;
