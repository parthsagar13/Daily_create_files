import { ErrorMessage, useFormik } from "formik";
import React from "react";
import * as yup from "yup";

export default function UseFormik() {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
    gender: yup.string().required("Please  Select your Gender Type"),
    termsAndCond: yup
      .boolean()
      .oneOf([true], "Please  Select your Gender Type"),
    transportMode: yup.string().required("Please  Select your Gender Type"),
  });

  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      termsAndCond: false,
      transportMode: "",
    },
    validationSchema: validationSchema,
    handleSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div>
      <div className="container">
        <div className="col-md-12 text-center mt-5">
          <h1>Form Validation with Formik and Yup</h1>
          <div className="col-md-12 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              className="form-control"
              onChange={Formik.handleChange}
              value={Formik.values.name}
            />
            <p className="text-danger ">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Emai"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <select
              name="gender"
              placeholder="Select Your Gender"
              className="form-control"
              onChange={Formik.handleChange}
              value={Formik.values.gender}
            >
              <option value="" disabled>
                Please select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="text-danger">
              <ErrorMessage name="gender" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <label className="form-check">
              <input
                type="checkbox"
                name="termsAndCond"
                onChange={Formik.handleChange}
                checked={Formik.values.termsAndCond}
              />
            </label>
            <p className="text-danger">
              <ErrorMessage name="termsAndCond" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <label>
              <input
                type="radio"
                value="bike"
                name="transportMode"
                onChange={Formik.handleChange}
                checked={Formik.values.transportMode === "bike"}
              />
              Bike
            </label>
            <label>
              <input
                type="radio"
                value="car"
                name="transportMode"
                onChange={Formik.handleChange}
                checked={Formik.values.transportMode === "car"}
              />
              Car
            </label>

            <p className="text-danger">
              <ErrorMessage name="transportMode" />
            </p>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
