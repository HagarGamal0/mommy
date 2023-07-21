import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { addNewBlog, getBlogs } from "../../Redux/Slices/BlogSlice";
import { useDispatch } from "react-redux";
import "./addBlog.css"

function AddBlog() {
  const dispatch = useDispatch();
  const form_data = new FormData();
  const _id = localStorage.getItem("id");


  function handleImage(e) {
    console.log(e.target.files);
    formik.setFieldValue("image", e.target.files[0]);
  }

  const Schema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: "",
      author: _id,
    },
    validationSchema: Schema,
    handleImage: () => {

    },
    onSubmit:  (values,{resetForm}) => {
      form_data.append("title", values.title);
      form_data.append("content", values.content);
      form_data.append("author", values.author);
      form_data.append("image", values.image);
      dispatch(addNewBlog(form_data)).then(()=> {
        dispatch(getBlogs());
        resetForm();
      });

    },
  });
  return (
    <>
      <button
        type="button"
        className="btn btn-outline btn-block addBlogBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"

      >
        اضافة منشور جديد{" "}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                إضافة منشور
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
                    name="title"
                    placeholder="عنوان المنشور"
                    className="form-control border border-secondary"
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="اضف وصف مناسب لسؤالك "
                    className="form-control my-2 p-2"
                    name="content"
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    accept="image/jpeg , image/png"
                    placeholder="Image"
                    className="form-control border border-secondary"
                    onChange={handleImage}
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
                    اضافة منشور
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

export default AddBlog;
