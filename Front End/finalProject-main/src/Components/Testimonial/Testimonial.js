import React, { useEffect } from "react";
import "./testimonial.css";
import ImageOne from "../../images/main/kathy.png";
import ImageTwo from "../../images/main/mommy-daddy-and-baby-make-three-e1634205497781-150x150.jpg";
import ImageThree from "../../images/main/Tom.jpg";

export default function Testimonial() {

  
;

useEffect(()=>{
  const slides = document.querySelectorAll(".slide");

  let index = 0
  function changeSlide() {
    slides[index].classList.remove("active");
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 5000);
},[])


  
  return (
    <section className="reviews-section">
      <div className="container">
        <h2>عملاءنا السعداء</h2>
        <div className="slider">
          <div className="slide active">
            <img src={ImageOne} />
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor."
            </p>
            <p className="author">- kathy Doe</p>
          </div>
          <div className="slide">
            <img src={ImageTwo} />
            <p>
              "Pellentesque eget nunc. Donec quis orci eget orci vehicula
              condimentum."
            </p>
            <p className="author">- Jane Smith</p>
          </div>
          <div className="slide">
            <img src={ImageThree} />
            <p>
              "Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur
              vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare
              ante, ac egestas est urna sit amet arcu."
            </p>
            <p className="author">- Tom Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
