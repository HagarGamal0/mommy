import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { updateUser } from "../../Redux/Slices/UserSlice";


function EditInfo() {
  const user = useSelector((state) => state.UserSlice.user);
  const dispatch = useDispatch();

  const Schema = Yup.object().shape({
    email: Yup.string().email().required(),
    phone: Yup.number()
      .min(11, "رقم الهاتف  يجب ان يتكون من 11 رقم")
      .max(11, "رقم الهاتف يجب ان يتكون من 11 رقم")
      .required(),
    password: Yup.string()
      .min(8, "الرقم السري لابد ان يكون اكبر من 8 حرف ")
      .max(20, "الرقم السري لا يمكن ان يتجاوز 20 حرف")
      .required("مطلوب"),
    confirmpassword: Yup.string()
      .min(8, "الرقم السري لابد ان يكون اكبر من 8 حرف ")
      .max(20, "الرقم السري لا يمكن ان يتجاوز 20 حرف")
      .required("مطلوب")
      .oneOf([Yup.ref("password"), null], "الرقم السري غير متطابق"),
    address: Yup.string().min(10, "العنوان غير صالح").required("مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      email: user.email,
      phone: user.phone,
      password: user.password,
      confirmpassword: "",
      address: user.address,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      const id = user._id
        dispatch(updateUser({values,id}))
        console.log(id)
    },
  });

  return (
    <div className="col-lg-9">
      <div className="profile-info ">
        <div className="container">
          <div className="card mb-4">
            <div className="card-body shadow  bg-white rounded">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">الاسم :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      defaultValue={user.name}
                      disabled
                      className="w-100 border border-secondary form-control"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">الايميل :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="email"
                      defaultValue={user.email}
                      className="w-100 border border-secondary form-control"
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">{formik.errors.email}</small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">الهاتف :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="phone"
                      maxLength={11}
                      defaultValue={user.phone}
                      className="w-100 border border-secondary form-control "
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">{formik.errors.phone}</small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">العنوان :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="address"
                      defaultValue={user.address}
                      className="w-100 border border-secondary form-control "
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">
                      {formik.errors.address}
                    </small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">الباسورد الحالي :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      name="oldPassword"
                      className="w-100 border border-secondary form-control"
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">
                      {formik.errors.password}
                    </small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">الباسورد الجديد :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      name="password"
                      className="w-100 border border-secondary form-control "
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">
                      {formik.errors.password}
                    </small>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="name">تاكيد الباسورد :</label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      name="confirmpassword"
                      className="w-100 border border-secondary form-control "
                      onChange={formik.handleChange}
                    />
                    <small className="text-danger">
                      {formik.errors.confirmpassword}
                    </small>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <button className="btn btn-outline-primary w-100">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInfo;
