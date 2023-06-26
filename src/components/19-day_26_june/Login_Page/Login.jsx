import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Outlet } from "react-router-dom";
import * as yup from "yup";

// import { useLocation } from 'react-router-dom';
export default function Login() {
  const defaultvalue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  
  return (
    <>
      <div className="flex justify-center col-md-16 mt-4  ">
        <Formik
          initialValues={defaultvalue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h2>Login</h2>
            <div className="">
              <label>Email</label>
              <Field
                type="text"
                name="email"
                placeholder="Enter Your email"
                className="form-control"
              />
              <p className="text-danger ">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="">
              <label>Password</label>
              <Field
                type="text"
                name="password"
                placeholder="Enter Your password"
                className="form-control"
              />
              <p className="text-danger ">
                <ErrorMessage name="password" />
              </p>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <br />
          </Form>
        </Formik>
        <Outlet />
      </div>
    </>
  );
}
