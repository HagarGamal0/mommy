import React from "react";
import "./about.css";
import ImageMother from "../../images/main/mother.jpg";
import ImageFamily from "../../images/main/family.jpg";
import WavesBottom from "../../images/main/wave.svg";
import WavesTop from "../../images/main/wave-up.svg";

export default function About() {
  return (
    <>
         <img src={WavesTop} alt="section waves" className="wavy-image" />
    <section className="about">
      <div className="container">
        <div className="about__head">
          <h2> من نحن ؟</h2>
          <p>
            موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي نصائح مفيدة لكل الأمهات
            خاصة الجدد موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي نصائح مفيدة لكل
            الأمهات خاصة الجدد موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي نصائح
            مفيدة لكل الأمهات خاصة الجدد موقع يهتم بكل ما يخص الأم و الطفل ، و
            يعطي نصائح مفيدة لكل الأمهات خاصة الجدد
          </p>
        </div>
        <div className="about__image">
          <img src={ImageMother} alt="img" className="floating-image"/>
          <img src={ImageFamily} alt="img" className="main-image" />
        </div>
      </div>
    </section>
     <img src={WavesBottom} alt="section waves" className="wavy-image" />
     </>
  );
}
