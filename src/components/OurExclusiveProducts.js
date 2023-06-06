import React from "react";
import exProduct1 from "../assets/exProduct1.jpg";
import exProduct2 from "../assets/exProduct2.jpg";
import exProduct3 from "../assets/exProduct3.jpg";
import exProduct4 from "../assets/exProduct4.jpg";
import Product from "./Product";
const OurExclusiveProducts = () => {
  return (
    <div id="product">
      <section className="ourexclusive" id="ourexclusive">
        <div className="container">

          <div className="ourexclusive-td">

            <p className="ourexclusive-title h3 text-left">
              Our Exclusive Products
            </p>

            <div>

              <button className="ourexclusive-button mx-sm-auto">All Products</button>
            </div>
          </div>

          <div className="ourexclusive-para py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </div>
          <Product />
        </div>
      </section>
    </div>
  );
};

export default OurExclusiveProducts;
