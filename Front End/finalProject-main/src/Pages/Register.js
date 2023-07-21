import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import TheImage from '../images/regsteration-image/kelly-sikkema-Z4GKcFAGck4-unsplash.jpg'

export default function Register() {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    name: Yup.string().min(6, "الاسم غير صالح").required("مطلوب"),
    email: Yup.string()
      .email("الايميل غير صالح")
      .required("من فضلك ادخل ايميل صحيح"),
    username: Yup.string().min(4, "اسم المستخدم قصير"),
    phone: Yup.number().min(11, "رقم الهاتف غير صالح").required(),
    password: Yup.string()
      .min(8, "الرقم السري لابد ان يكون اكبر من 8 حرف ")
      .max(20, "الرقم السري لا يمكن ان يتجاوز 20 حرف")
      .required("مطلوب"),
    passwordConfirm: Yup.string()
      .min(8, "الرقم السري لابد ان يكون اكبر من 8 حرف ")
      .max(20, "الرقم السري لا يمكن ان يتجاوز 20 حرف")
      .required("مطلوب")
      .oneOf([Yup.ref("password"), null], "الرقم السري غير متطابق"),
    address: Yup.string().min(10, "العنوان غير صالح").required("مطلوب"),
    age: Yup.number().moreThan(18, "العمر يجب ان يكون اكبر من 18"),
    role: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      phone: 0,
      password: "",
      passwordConfirm:'',
      address: "",
      age: 0,
      role: "",
    },
    validationSchema: Schema,
    onSubmit: async (user) => {
      setIsLoading(true);
      const {name,email,username,phone,password,address,age,role} = user
       try {
        let   response = await axios.post("http://localhost:4000/user/register", {
          name,email,username,phone,password,address,age,role
        });
        console.log(response);
        if (
          response.data.message === "User created successfully"
        ) {
          setIsLoading(false);
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
  });

  
  return (
    <div className="register w-100">
      <div className="container">
      <div className="form-container  ">
        <div className="d-flex ">
          <div className="register-img">
          <img src={TheImage}/>
          </div>
        <div className="signup-form">
          <h2>إنشاء حساب جديد</h2>
          <p>الرجاء إنشاء حساب حتي تتمكن من استخدام الموقع</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-container">
              <div className="input-container">
                <input
                  type="text"
                  onChange={formik.handleChange}
                  name="name"
                  placeholder="الاسم بالكامل"
                />
                <small className="error-msg">{formik.errors.name}</small>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  onChange={formik.handleChange}
                  name="email"
                  placeholder="أضف حسابك"
                />
                <small className="error-msg">{formik.errors.email}</small>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  onChange={formik.handleChange}
                  name="username"
                  placeholder="اسم مستخدم"
                />
                <small className="error-msg">{formik.errors.username}</small>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  onChange={formik.handleChange}
                  name="phone"
                  placeholder="الهاتف"
                />
                <small className="error-msg">{formik.errors.phone}</small>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  onChange={formik.handleChange}
                  name="password"
                  placeholder="كلمة المرور"
                  id="password"
                />
                <small className="error-msg">{formik.errors.password}</small>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                />
                <small className="error-msg">
                  {formik.errors.passwordConfirm}
                </small>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  onChange={formik.handleChange}
                  name="address"
                  placeholder="ادخل عنوان صالح"
                />
                <small className="error-msg">{formik.errors.address}</small>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  onChange={formik.handleChange}
                  name="age"
                  placeholder="ادخل عمرك"
                />
                <small className="error-msg ">{formik.errors.age}</small>
              </div>
              <div className="input-container">
                <select
                  className="role"
                  name="role"
                  onChange={formik.handleChange}
                >
                  <option value="">اختاري نوع الحساب </option>
                  <option value="mother">أم</option>
                  <option value="seller">تاجر</option>
                </select>
              </div>
              <div className="input-container">
                <button className="btn-signin w-100" type="submit">
                  {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "إنشاء حساب"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
       
      </div>
    </div>
    </div>
    
  );
}
