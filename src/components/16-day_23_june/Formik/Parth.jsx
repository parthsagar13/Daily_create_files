import { useFormik } from "formik";
import React from "react";
import "./App3.css";
import * as Yup from 'yup'

export default function Parth() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channle: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      channle: Yup.string().required("Channel is required"),
    }),
   
      
    
    onSubmit: values =>{
      console.log("form values", values)
    }
  });
  // console.log("Form values", formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}  
      className="position-absolute top-0 start-50 translate-middle-x"
      // validationSchema={validationSchema}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
           {formik.touched.name && formik.errors.name && (
          <div className="text-danger" >{formik.errors.name}</div>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
           {formik.touched.email && formik.errors.email && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
        <label htmlFor="channle">Channle</label>
        <input
          type="text"
          id="channle"
          placeholder="Enter your Name Channle"
          onChange={formik.handleChange}
          value={formik.values.channle}
        />
          {formik.touched.channle && formik.errors.channle && (
          <div className="text-danger">{formik.errors.channle}</div>
        )}
        <br />
        <button className="btn btn-primary" type="submit" >Submit</button>
      </form> 
    </div>
  );
}
