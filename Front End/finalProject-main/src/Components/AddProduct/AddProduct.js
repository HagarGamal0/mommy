import { useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./addProduct.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addProduct, getAllProducts } from "../../Redux/Slices/SellerSlice";

export default function AddProduct() {

  let form_data = new FormData();
  const dispatch = useDispatch();
  const _id= localStorage.getItem("id")

  function handleImage(e) {
    console.log(e.target.files);
    formik.setFieldValue("image", e.target.files[0]);
  }

  const Schema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().required(),
    stock: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
      seller: _id,
    },
    validationSchema: Schema,
    onSubmit:  (values) => {
      form_data.append("name", values.name);
      form_data.append("stock", values.stock);
      form_data.append("price", values.price);
      form_data.append("description", values.description);
      form_data.append("image", values.image);
      form_data.append("seller",values.seller)
      dispatch(addProduct({form_data})).then(()=> {
        dispatch(getAllProducts());
      })
    },
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-warning btn-block text-black"
        data-bs-toggle="modal"
        data-bs-target="#addProduct"
      >
        أضف منتج
      </button>

      <div
        className="modal fade"
        id="addProduct"
        tabindex="-1"
        aria-labelledby="addProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="addProductLabel">
                إضافة منتج
              </h1>
              <button
                type="button"
                className="btn-close mx-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    id="productName"
                    type="text"
                    name="name"
                    placeholder="اسم المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    placeholder="وصف المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    placeholder="السعر"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="stock"
                    placeholder="الكمية"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    accept="image/jpeg , image/png"
                    placeholder="Image"
                    onChange={handleImage}
                    className="form-control border border-secondary"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    الغاء
                  </button>
                  <button type="submit" className="btn btn-outline-primary">
                    اضافة منتج
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
