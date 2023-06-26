import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import * as yup from 'yup'


// import { useLocation } from 'react-router-dom';
export default function Singup() {
  const location = useLocation();

   const defaultvalue = {
    email:"",
    password:""
   }
   const  validationSchema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    
  })
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("values", values)   
    setTimeout(() => {
      setSubmitting(false);
      location.push('/');
    }, 1000);
  }
  return (
    
    <>
    
   <div className="flex justify-center col-md-16 mt-4  ">
    
    <Formik 
      initialValues={defaultvalue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
        <Form>
        <h2>Sign Up</h2>
            <div className="">
                <label>Name</label>
                <Field
                 type="text"
                 name="email" 
                 placeholder="Enter Your email"
                 className="form-control"/>
                  <p className="text-danger ">
                    <ErrorMessage name="email"/>
                </p>
            </div>
            <div className="">
                 <label>Password</label>
                <Field
                 type="text"
                 name="password" 
                 placeholder="Enter Your password"
                 className="form-control"/>
                  <p className="text-danger ">
                    <ErrorMessage name="password"/>
                </p>
            </div>
              <button className="btn btn-primary" disabled={isSubmitting} type="submit">Submit</button>
        </Form>
        )}
    </Formik>
    <Outlet/>
   </div>

    </>
  )
}
