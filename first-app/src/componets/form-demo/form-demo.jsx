import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
export function FormDemo() {
  function validateUser(formData) {
    let errors = {};
    if (formData.City === "-1") {
      errors.City = "select your city";
    }

    if (formData.Gender.length === 0) {
      errors.Gender = "gender required";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      User: "",
      Age: "",
      City: "-1",
      Gender: "",
      Mobile: "",
    },
    onSubmit: function (user) {
      console.log(user);
    },
    validate: validateUser,
    validationSchema:yup.object({
      User:yup.string().required('User Required').min(4,"User too short"),
      Age:yup.number().required('Age is required').min(15,'Age is grather than 15').max(30,'Age is Lessthan 30'),
      Mobile:yup.string().required('Mobile is required').matches(/^\+91\d{10}\$/)
    })
  });
  return (
    <div className=" container-fluid d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={formik.handleSubmit}
        className="shadow-sm p-4 w-25 rounded-2"
      >
        <h2 className="fs-4 text-center fw-bold text-primary">
          Form Registration
        </h2>
        <dl>
          <dt className="my-1">UserName</dt>
          <dd>
            <input
              className="form-control"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="User"
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.User && formik.errors.User}
          </dd>

          <dt className="my-1">Age</dt>
          <dd>
            <input
              className="form-control"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="Age"
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Age && formik.errors.Age}
          </dd>

          <dt className="my-1">City</dt>
          <dd>
            <select
              className="form-select"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="City"
            >
              <option value="-1">Select Your City</option>
              <option value="hyd">Hyderabad</option>
              <option value="delhi">Delhi</option>
              <option value="indore">Indore</option>
            </select>
          </dd>
          <dd className="text-danger">
            {formik.touched.City && formik.errors.City}
          </dd>

          <dt className="my-1">Gender</dt>
          <dd>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="radio"
              className="form-check-input"
              name="Gender"
              value="male"
            />{" "}
            Male &nbsp;&nbsp;
            <input
              className="form-check-input"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="radio"
              name="Gender"
              value="female"
            />{" "}
            Female
          </dd>
          <dd className="text-danger">
            {formik.touched.Gender && formik.errors.Gender}
          </dd>

          <dt className="my-1">Mobile</dt>
          <dd>
            <input
              className="form-control"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="Mobile"
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Mobile && formik.errors.Mobile}
          </dd>
        </dl>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50 text-center">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
