import React, { useRef, useState } from "react";
import "./Address.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Payment from "../Payment/Payment";
import { useNavigate } from "react-router-dom";




export default function Address() {
  const [isStreetFocused, setStreetFocused] = useState(false);
  const [isCityFocused, setCityFocused] = useState(false);
  const [isZipCodeFocused, setZipCodeFocused] = useState(false);
  const addRef = useRef();
  const [arrow, setArrow] = useState("up")
  const {shippingAdress} = useSelector(state => state.OrderSlice);
  const [submitted, setSubmitted] = useState(false)
const navigate = useNavigate();

  const addressSchema = Yup.object().shape({
    street: Yup.string().required("الشارع مطلوب"),
    city: Yup.string().required("المدينة مطلوبة"),
    zipCode: Yup.number().required("الرمز البريدي مطلوب"),
    country: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      zipCode: "",
      country: "Egypt",
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
        localStorage.setItem("address", JSON.stringify(values))
        console.log(values)
    },
  });

  const handleDisplay = () => {
    const address = addRef.current;
    address.style.transition = "display 1s"
    address.classList.toggle("hidden");
    arrow === "up" ? setArrow("down") : setArrow('up')
  };

  return (
    <div className="checkout__address">
      <div className="address__head">
        <div className="address__head-title">
          <p>عنوان الشحن </p>
          <span onClick={handleDisplay}>
            {Object.keys(shippingAdress).length=== 0?<ion-icon name={`chevron-${arrow}-outline`} size="small"></ion-icon> : ""}
            
          </span>
        </div>
      { Object.keys(shippingAdress).length=== 0 ? <div className="address__body" ref={addRef}>
      <form onSubmit={formik.handleSubmit}>
        <div className="filed-container my-3">
          <label htmlFor="name" className="form-label">
            الشارع*
          </label>
          <input
            type="text"
            className="form-control"
            name="street"
            onChange={formik.handleChange}
            onFocus={() => setStreetFocused(true)}
          />
          {isStreetFocused && (
            <small className="text-danger">{formik.errors.street}</small>
          )}
        </div>
        <div className="filed-container">
          <label htmlFor="name" className="form-label">
            المدينة*
          </label>
          <input
            type="text"
            className="form-control"
            name="city"
            onChange={formik.handleChange}
            onFocus={() => setCityFocused(true)}
          />
          {isCityFocused && (
            <small className="text-danger">{formik.errors.city}</small>
          )}
        </div>
        <div className="filed-container my-3">
          <label htmlFor="name" className="form-label">
            الرمز البريدي*
          </label>
          <input
            type="number"
            className="form-control"
            name="zipCode"
            onChange={formik.handleChange}
            onFocus={() => setZipCodeFocused(true)}
          />
          {isZipCodeFocused && (
            <small className="text-danger">{formik.errors.zipCode}</small>
          )}
        </div>
        <div className="filed-container">
          <label htmlFor="name" className="form-label">
            الدوله
          </label>
          <input
            type="text"
            className="form-control"
            name="country"
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-5 w-25">
          التالي
        </button>
      </form>
    </div> : <>
    <div className="d-flex justify-content-around py-3">
      <span> <strong>المدينة</strong> :{shippingAdress.city}</span>
      <span> <strong>الشارع</strong> :{shippingAdress.street}</span>
      <span><strong>الرمز البريدي</strong> :{shippingAdress.zipCode}</span>
      <span><strong>الدولة</strong> :{shippingAdress.country}</span>
    </div>
    </>}
      </div>
    </div>
  );
}
