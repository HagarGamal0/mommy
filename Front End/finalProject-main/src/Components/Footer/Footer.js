import React from "react";
import "./footer.css";
import ImageOne from "../../images/main/logo4.gif";
import ImageTwo from "../../images/main/header_btn-removebg-preview.png";
import ImageThree from "../../images/main/app-store-logo.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <footer className="ml-xl-5 ml-md-4 ml-3 pb-0 position-relative  wave-footer">
        <div
          className="footer_elementor-shape  footer_elementor-shape-bottom"
          data-negative="false"
        ></div>
        <div className="container con">
          <div className="row justify-content-end mb-4">
            <div className=" col-12">
              <div className="row pt-5">
                <div className="col-xl-4 col-12 mr-auto">
                  <div className="media flex-sm-row flex-column ">
                    <div className="img-logo align-items-center">
                      <img
                        className="logo img-fluid mobile-img "
                        src={ImageOne}
                        alt="logo"
                      />
                    </div>
                    <div className="media-body">
                      <p className="description-img">
                        <b> لرعاية صحتك وصحة طفلك</b>
                      </p>
                      <div className="d-flex stores">
                        <img
                          src={ImageTwo}
                          className="img-fluid logo google "
                        />
                        <img
                          src={ImageThree}
                          className="img-fluid logo app-store me-3 pt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 my-auto ">
                  <div className="row justify-content-around">
                    <div className="col-md-3 col-12 mt-md-0 mt-3">
                      <ul className="list-unstyled text-muted">
                        <h3>التواصل</h3>
                        <li>الخصوصية</li>
                        <li>الامان</li>
                        <li>تواصل معانا</li>
                        <li>الاسئلة الشائعة</li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-12 mt-md-0 mt-3">
                      <ul className="list-unstyled text-muted">
                        <h3>خدماتنا</h3>
                        <li>التسوق</li>
                        <li>المقالات</li>
                        <li>احجز طبيبك</li>
                        <li>جدول التطعيمات</li>
                        <li>الاشتراك المميز</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-12 mt-md-0 mt-3">
                      <h4 className="text-white mb-4">قم بالتسجيل الان</h4>
                      <form
                        className="d-flex mt-3 position-relative"
                        action="#"
                        method="Post"
                      >
                        <input
                          type="text"
                          name="text"
                          id="sub-input"
                          placeholder="سجل موقعك الالكترونى"
                        />
                        <button
                          type="button"
                          className=" btn-default position-absolute"
                        >
                          تسجيل
                        </button>
                      </form>
                      <div className="d-flex justify-content-between icons">
                        <i className="ri-facebook-circle-fill" />
                        <i className="ri-instagram-line" />
                        <i className="ri-twitter-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 حقوق النشر:
          <a className="text-white" href="https://iti.com">
            {" "}
            وزارة الاتصالات
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;