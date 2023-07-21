import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addbaby, getBaby } from "../../../Redux/Slices/MohterSlice";



export default function AddBaby() {
  const dispatch = useDispatch();



  const formik =useFormik ({
    initialValues: {
        name: "",
        weight: "",
        height: "",
        headSize: "",
        birthDate: "",
        temperature: "",
    }
    ,
    onSubmit: (values,{resetForm}) => {
        const babyInfo = {
          name : values.name,
          weight: values.weight,
          height: values.height,
          headSize: values.headSize,
          birthDate: values.birthDate,
          temperature: values.temperature,
        }
        dispatch(addbaby({babyInfo})).then(()=>{
          dispatch(getBaby());
        })

        resetForm();

    }
  })


  return (
    <>
      <button
        type="button"
        className="btn btn-warning me-5"
        data-bs-toggle="modal"
        data-bs-target="#babyModal"
      >
اضافة طفل      </button>

      <div
        className="modal fade"
        id="babyModal"
        tabIndex="-1"
        aria-labelledby="babyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-5" id="babyModalLabel">
اضافة طفل              </h1>
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
                        name="name"
                        placeholder="اسم الطفل"
                        className="form-control"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        name="weight"
                        type="number"
                        placeholder="الوزن"
                        className="form-control"
                        value={formik.values.weight}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        name="height"
                        type="number"
                        placeholder="الطول"
                        className="form-control"
                        value={formik.values.height}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        name="headSize"
                        type="number"
                        placeholder="حجم الرأس"
                        className="form-control"
                        value={formik.values.headSize}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        name="birthDate"
                        type="date"
                        placeholder="العمر"
                        className="form-control"
                        value={formik.values.birthDate}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div>
                      <input
                        name="temperature"
                        type="number"
                        placeholder="درجة الحرارة"
                        className="form-control"
                        value={formik.values.temperature}
                        onChange={formik.handleChange}
                      />
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