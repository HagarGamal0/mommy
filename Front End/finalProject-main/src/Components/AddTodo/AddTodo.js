import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../../Redux/Slices/TodoSlice";
import { useFormik } from "formik";

export default function AddTodo() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id")



  const formik =useFormik ({
    initialValues: {
        title: "",
        body: "",
        status: "pending",
        user: userId,
    }
    ,
    onSubmit: (values,{resetForm}) => {
        dispatch(addTodo({title: values.title,body: values.body,status: values.status,User: values.user})).then(()=> {
          dispatch(getTodos(values.user))
        })
        resetForm();

    }
  })


  return (
    <>
      <button
        type="button"
        className="btn btn-primary me-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        انشاء مهمه جديدة
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-5" id="exampleModalLabel">
                انشاء مهمه جديدة
              </h1>
              <button
                type="button"
                className="btn-close ms-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="add-todo">
                <form onSubmit={formik.handleSubmit}>
                  <div className="d-flex flex-column gap-3">
                    <div className="">
                      <input
                        type="text"
                        name="title"
                        value={formik.values.title}
                        placeholder="العنوان"
                        className="form-control"
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <textarea
                        name="body"
                        placeholder="الوصف"
                        value={formik.values.body}
                        rows={4}
                        className="form-control"
                        onChange={formik.handleChange}
                      ></textarea>
                    </div>
                    <div className="d-flex gap-5">
                      <button type="submit" className="btn btn-success">
                        اضافة
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        الغاء
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
