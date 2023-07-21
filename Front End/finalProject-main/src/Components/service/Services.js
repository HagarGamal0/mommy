import React from "react";
import "./services.css";
import ImageProduct from "../../images/main/online.gif";
import ImageParent from "../../images/main/Group.png";
import ImageMother from "../../images/main/Pediatrician-bro.png";
import ImageDoctor from "../../images/main/doctors_auto_x2-removebg-preview.png";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services__head">خدماتنا</h2>
        <div className="services__wrapper">
        <article  className="services__wrapper-item">
            <figure>
              <img src={ImageParent} alt="" />
            </figure>
            <figcaption>
              <h4>مجتمع للامهات</h4>
              <p>Nunc suscipit. Suspendisse enim arcu, convallis non, cursus</p>
            </figcaption>
          </article>
          <article className="services__wrapper-item">
            <figure>
              <img src={ImageProduct} alt="" />
            </figure>
            <figcaption>
              <h4>تسوقي لطفلك</h4>
              <p>
                Ipsum dolor sit amet conse ctetur adipisicing elit aliqua
                duruderya.
              </p>
            </figcaption>
          </article>
         
          <article  className="services__wrapper-item">
            <figure>
              <img src={ImageMother} alt="" />
            </figure>
            <figcaption>
              <h4>دليلك لرعاية طفلك </h4>
              <p>Nunc suscipit. Suspendisse enim arcu, convallis non, cursus</p>
            </figcaption>
          </article>
          {/* <article  className="services__wrapper-item">
            <figure>
              <img src={ImageDoctor} alt="" />
            </figure>
            <figcaption>
              <h4>اكفأ الاطباء لطفلك</h4>
              <p>Nunc suscipit. Suspendisse enim arcu, convallis non, cursus</p>
            </figcaption>
          </article> */}
        </div>
      </div>
    </section>
  );
}