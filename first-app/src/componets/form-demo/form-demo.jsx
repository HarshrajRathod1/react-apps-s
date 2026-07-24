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
    validate: validateUser,
    validationSchema: yup.object({
      User: yup.string().required("User Required").min(4, "User too short"),
      Age: yup
        .number()
        .required("Age is required")
        .min(15, "Age is grather than 15")
        .max(30, "Age is Lessthan 30"),
      Mobile: yup
        .string()
        .required("Mobile is required")
        .matches(/^\+91\d{10}$/, "number is invalid"),
    }),
    onSubmit: function (user) {
      console.log(user);
    },
  });
  return (
    <div className="row container-fluid">
      <div className="col-6">
        <form onSubmit={formik.handleSubmit}>
          <h2>Form Registration</h2>
          <dl>
            <dt>UserName</dt>
            <dd>
              <input
                {...formik.getFieldProps("User")}
                type="text"
                name="User"
              />
            </dd>

            <dt>Age</dt>
            <dd>
              <input {...formik.getFieldProps("Age")} type="text" name="Age" />
            </dd>

            <dt>City</dt>
            <dd>
              <select {...formik.getFieldProps("City")} name="City">
                <option value="-1">Select Your City</option>
                <option value="hyd">Hyderabad</option>
                <option value="delhi">Delhi</option>
                <option value="indore">Indore</option>
              </select>
            </dd>

            <dt>Gender</dt>
            <dd>
              <input
                {...formik.getFieldProps("Gender")}
                type="radio"
                name="Gender"
                value="male"
              />
              Male &nbsp;&nbsp;
              <input
                {...formik.getFieldProps("Gender")}
                type="radio"
                name="Gender"
                value="female"
              />
              Female
            </dd>

            <dt>Mobile</dt>
            <dd>
              <input
                {...formik.getFieldProps("Mobile")}
                type="text"
                name="Mobile"
              />
            </dd>
          </dl>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="col-6 " >
        <div className={`text-danger ${(formik.isValid)?'d-none':'d-block'}`}>
          <h3>Check the following Errors</h3>
          <ul>
            {
              Object.values(formik.errors).map(error=><li key={error}>{error}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
