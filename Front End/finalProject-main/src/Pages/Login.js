import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import  { logInUser } from "../Redux/Slices/UserSlice";
import TheImage from '../images/regsteration-image/jonathan-borba-RWgE9_lKj_Y-unsplash.jpg'

export default function Login() {
  const dispatch = useDispatch();
  const {loading} = useSelector ((state) => state.UserSlice);
  const {error} = useSelector( (state) => state.UserSlice)
  const navigate= useNavigate()

  const Schema = Yup.object().shape({
    email: Yup.string().email().required("الايميل مطلوب"),
    password: Yup.string()
      .min(8, "الرقم السري يجب ان يكون اكبر من 8")
      .max(20, "الرقم السري يجب ان يكون اقل من 20")
      .required("الرقم السري مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (user) => {
      dispatch(logInUser(user));
      navigate('/home')
    },
  });

  return (
    <div className="container">
      <div className="form-container">
      <div className="sign-greeting">
          <h2>مرحبا بعودتك</h2>
        </div>  
        <div className="d-flex  justify-content-center">
          <div className="sign-image">
            <img src={TheImage} alt="" />
          </div>

        <div className="sign-form">
          <h2>تسجيل الدخول</h2>
          <p>الرجاء تسجيل الدخول حتى تتكمن من استخدام الموقع</p>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="اسم المستخدم"
                name="email"
                onChange={formik.handleChange}
              />
              <small className="error-msg">{formik.errors.email}</small>
            </div>
            <div>
              <input
                type="password"
                placeholder="كلمةالمرور"
                name="password"
                onChange={formik.handleChange}
              />
              <small className="error-msg">{formik.errors.password}</small>
            </div>
            <div>
              <button className="btn-signin" type="submit" disabled={loading}>
             {loading?"جاري التحميل":"تسجيل الدخول"}
              </button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
    </div>
  );
}
