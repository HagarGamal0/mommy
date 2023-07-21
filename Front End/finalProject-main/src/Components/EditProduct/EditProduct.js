import { useDispatch } from "react-redux";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {  editProduct, getAllProducts } from "../../Redux/Slices/SellerSlice";

export default function EditProduct({ product }) {
  const dispatch = useDispatch();
  const _id = localStorage.getItem("id");
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
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      prdId: product._id,
      seller: _id,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      let form_data = new FormData();

      form_data.append("name", values.name);
      form_data.append("stock", values.stock);
      form_data.append("price", values.price);
      form_data.append("description", values.description);
      form_data.append("seller", values.seller);
      let id = values.prdId;
      console.log("FormData:", form_data);
      dispatch(editProduct( {id,form_data} )).then(() => {
        dispatch(getAllProducts());
      });
    },
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-warning btn-block text-black me-5"
        data-bs-toggle="modal"
        data-bs-target={`#editProduct${product._id}`}
      >
        تعديل
      </button>

      <div
        className="modal fade"
        id={`editProduct${product._id}`}
        tabindex="-1"
        aria-labelledby="editProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="editProductLabel">
                تعديل منتج
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
                    value={formik.values.name}
                    placeholder="اسم المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    value={formik.values.description}
                    placeholder="وصف المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    value={formik.values.price}
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
                    value={formik.values.stock}
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
                    تعديل منتج
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
