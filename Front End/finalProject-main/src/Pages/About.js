import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Ecommerce from "../images/aboutUs/Ecommerce.png";
import Motherhood from "../images/aboutUs/Motherhood-bro.png";
import SleepingBaby from "../images/aboutUs/Sleeping baby-bro.png";
import "./about.css";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function About() {
  const parallax = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#76005f",
        position: "fixed",
      }}
    >
      <Parallax ref={parallax} pages={3} className="example-container">
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ height: "100%", backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ height: "100%", backgroundColor: "#76005e89" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            // backgroundImage: url('stars', true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={SleepingBaby}
            style={{ width: "20%", marginLeft: "70%" }}
            alt="Satellite"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              width: "100%",
              marginLeft: 10,
              justifyContent: "space-around",
            }}
          >
            <div style={{ fontSize: 24, color: "#fff" }}>
              مكانك لشراء منتجات طفلك
            </div>
            <img src={Ecommerce} style={{ width: "50%" }} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            alt="Cloud"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            alt="Cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* <img src={url('earth')} style={{ width: '60%' }} alt="Earth" /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            // backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <img src={Motherhood} style={{ width: "50%" }} alt="" />
            <p style={{ fontSize: 24, color: "#fff" }}>
              موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي نصائح مفيدة لكل الأمهات
              خاصة الجدد موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي نصائح مفيدة
              لكل الأمهات خاصة الجدد موقع يهتم بكل ما يخص الأم و الطفل ، و يعطي
              نصائح مفيدة لكل الأمهات خاصة الجدد موقع يهتم بكل ما يخص الأم و
              الطفل ، و يعطي نصائح مفيدة لكل الأمهات خاصة الجدد
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color:"#FFF"
          }}
        >
          <section className="mb-4 mt-5 " style={{ marginRight: "20%" }}>
            <h2
              className="h1-responsive font-weight-bold text-center  my-4 mx-auto"
              style={{ marginLeft: 200 }}
            >
              تواصل معنا
            </h2>
            <p className="text-start mb-5">
            هل لديك اسئلة؟ من فضلك لا تتردد في الاتصال بنا مباشرة. سيعود فريقنا إليك في الداخل في غضون ساعات لمساعدتك.
            </p>
            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="name" className="my-2">
                        أسمك
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                       
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="email" className="my-2">
                        الحساب
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                      
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                      <label htmlFor="subject" className="my-2">
                          الموضوع
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        />
                     
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                      <label htmlFor="message" className="my-2">رسالتك</label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows={2}
                          className="form-control md-textarea"
                          defaultValue={""}
                        />
                       
                      </div>
                    </div>
                  </div>
                </form>
                <div className="text-center text-md-left my-5">
                  <a
                    className="btn btn-primary"
                    onclick="document.getElementById('contact-form').submit();"
                    style={{
                      backgroundColor: "#e7b5ddf2",
                      borderColor: "#e7b5ddf2",
                      paddingLeft: 50,
                      paddingRight: 50,
                      textAlign: "center",
                    }}
                  >
                    أرسل الان
                  </a>
                </div>
                <div className="status" />
              </div>
              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x" />
                    <p>San Francisco, CA 94126, USA</p>
                  </li>
                  <li>
                    <i className="fas fa-phone mt-4 fa-2x" />
                    <p>+ 01 234 567 89</p>
                  </li>
                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x" />
                    <p>contact@iti.gov.eg</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
