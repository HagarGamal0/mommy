import React, { useRef, useState } from "react";
import "./Payment.css";
import visaLogo from "../../../images/payment/visa-color-v2.png";
import masterLogo from "../../../images/payment/mastercard-color.svg";
import amxLogo from "../../../images/payment/amex-color.svg";
import cardChip from "../../../images/payment/R.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../../../Redux/Slices/OrderSlice";
import { deleteCart, getCartItems } from "../../../Redux/Slices/ProductSlice";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const useId = localStorage.getItem("id");
  const { cartItems } = useSelector((state) => state.ProductSlice) || [];
  const navigate = useNavigate()
  const cardLogos = [visaLogo, masterLogo, amxLogo];
  const [cardLogo, setCardLogo] = useState(null);
  const [logoVisibility, setLogoVisibility] = useState("hidden");
  const [dateVisibility, setDateVisibility] = useState("hidden");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  let twoNum;
  let oneNum;
  function handleCardLogo(e) {
    twoNum = +e.target.value.slice(0, 2);
    oneNum = +e.target.value.slice(0, 1);
    if (
      twoNum === 51 ||
      twoNum === 52 ||
      twoNum === 53 ||
      twoNum === 54 ||
      twoNum === 55
    ) {
      setCardLogo(cardLogos[1]);
      setLogoVisibility("visible");
    } else if (oneNum === 4) {
      setCardLogo(cardLogos[0]);
      setLogoVisibility("visible");
    } else if (twoNum === 34 || twoNum === 37) {
      setCardLogo(cardLogos[2]);
      setLogoVisibility("visible");
    } else {
      setCardLogo("");
      setLogoVisibility("hidden");
    }
  }

  const cardRef = useRef();
  function onFocus() {
    cardRef.current.classList.add("active");
  }

  function onBlur() {
    cardRef.current.classList.remove("active");
  }

  const inputRef = useRef([]);

  function handleNextInput(event, index) {
    const { value, maxLength } = event.target;
    if (value.length >= maxLength) {
      const nextIndex = index + 1;
      if (inputRef.current[nextIndex]) {
        inputRef.current[nextIndex].focus();
      }
    }
  }

  function handlePreviousInput(event, index) {
    const { value } = event.target;
    if (event.key === "Backspace" && value.length === 0) {
      const previousIndex = index - 1;
      if (inputRef.current[previousIndex]) {
        inputRef.current[previousIndex].focus();
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      user: useId,
      products:cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      shippingAddress: localStorage.getItem("address"),
      totalAmount: totalPrice,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(makeOrder(values)).then(()=> dispatch(deleteCart())).then(()=> dispatch(getCartItems(useId)));
      navigate('/orderDone')
    },
  });

  return (
    <>
      <h4 className="payment_title">الدفع</h4>
      <div className="checkout__payment ">
        <div className="payment__info">
          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <div className="card-number">
                <p className="card-number_text">رقم البطاقة</p>
                <input
                  type="text"
                  onChange={(e) => {
                    handleCardLogo(e);
                    setFirst(e.target.value);
                  }}
                  maxLength="4"
                  ref={(el) => (inputRef.current[0] = el)}
                  onKeyUp={(event) => handleNextInput(event, 0)}
                  onKeyDown={(event) => handlePreviousInput(event, 0)}
                  name="first"
                />
                <input
                  type="text"
                  maxLength="4"
                  onChange={(e) => {
                    setSecond(e.target.value);
                  }}
                  ref={(el) => (inputRef.current[1] = el)}
                  onKeyUp={(event) => handleNextInput(event, 1)}
                  onKeyDown={(event) => handlePreviousInput(event, 1)}
                  name="second"
                />
                <input
                  type="text"
                  maxLength="4"
                  onChange={(e) => {
                    setThird(e.target.value);
                  }}
                  ref={(el) => (inputRef.current[2] = el)}
                  onKeyUp={(event) => handleNextInput(event, 2)}
                  onKeyDown={(event) => handlePreviousInput(event, 2)}
                  name="third"
                />
                <input
                  type="text"
                  maxLength="4"
                  onChange={(e) => {
                    setFourth(e.target.value);
                  }}
                  ref={(el) => (inputRef.current[3] = el)}
                  onKeyUp={(event) => handleNextInput(event, 3)}
                  onKeyDown={(event) => handlePreviousInput(event, 3)}
                  name="fourth"
                />
              </div>
              <div className="card-name">
                <p className="card-name_text">اسم صاحب البطاقة</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="card-secure">
                <div className="card-secure_date">
                  <p>تاريخ الانتهاء</p>
                  <select
                    name="expiry-month"
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setDateVisibility("visible");
                    }}
                  >
                    <option value="">الشهر</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="06">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    name="expiry-year"
                    onChange={(e) => {
                      setYear(e.target.value);
                      setDateVisibility("visible");
                    }}
                  >
                    <option value="">السنه</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
                <div className="card-secure_cvv">
                  <p>cvv</p>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="3"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="checkout-btn">
                الدفع
              </button>
            </form>
          </div>
        </div>
        <div className="credit-card" ref={cardRef}>
          <div className="flip">
            <div className="front">
              <div className="credit-card_header">
                <div className="credit-card_header-logo">
                  <img
                    src={cardLogo}
                    alt="card-logo"
                    style={{ visibility: logoVisibility }}
                  />
                </div>
                <div className="credit-card_header-chip">
                  <img src={cardChip} alt="card-chip" />
                </div>
              </div>
              <div className="credit-card_footer">
                <div className="credit-card_footer-number">
                  <span className="fourth">{fourth}</span>
                  <span className="third">{third}</span>
                  <span className="second">{second}</span>
                  <span className="first">{first}</span>
                </div>
                <div className="footer">
                  <div className="credit-card_footer-date">
                    <p>Expiry Date</p>
                    <p
                      style={{ visibility: dateVisibility }}
                      className="align-self-end"
                    >
                      {month}/{year}
                    </p>
                  </div>
                  <div className="credit-card_footer-name">
                    <p>Card Holder</p>
                    <p className="name">{name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="black-strip"></div>
              <div className="white-strip">
                <span>{cvv}</span>
              </div>
              <div className="back-logo">
                <img
                  src={cardLogo}
                  alt="card-logo"
                  style={{ visibility: logoVisibility }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
