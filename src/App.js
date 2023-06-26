import React from "react";
// import Home from "./components/16-day_23_june/React_Router/Home";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/19-day_26_june/Login_Page/HomePage";
import Login from "./components/19-day_26_june/Login_Page/Login";
import Singup from "./components/19-day_26_june/Login_Page/Signup";
// import About from "./components/16-day_23_june/React_Router/About";
// import Navbar from "./components/16-day_23_june/React_Router/Navbar";
// import OrderSummary from "./components/16-day_23_june/React_Router/OrderSummary";
// import NoMatchRoutes from "./components/16-day_23_june/React_Router/NoMatchRoutes";
// import FeaturedProduct from "./components/16-day_23_june/React_Router/FeaturedProduct";
// import NewProduct from "./components/16-day_23_june/React_Router/NewProduct";
// import Product from "./components/16-day_23_june/React_Router/Product";
// import User from "./components/16-day_23_june/React_Router/Dynemic_Routes/User";
// import UserDetails from "./components/16-day_23_june/React_Router/Dynemic_Routes/UserDetails";
// import Admin from "./components/16-day_23_june/React_Router/Dynemic_Routes/Admin";
// import UseFormik from './components/14-day_21_june/Formik and yup/UseFormik'
// import FormikForms from './components/14-day_21_june/Formik and yup/FormikForms'
// // import Parth from './components/16-day_23_june/Formik/Parth'
// import App1 from './components/13-day_20_june/Nested Component/App1'
// import UseEffect from './components/10-day_17_june/useEffect/UseEffect'
// import NestedpassProps from './components/13-day_20_june/Nested Component/NestedpassProps'
// import Nested from './components/13-day_20_june/Nested Component/Nested'
// import UseTransition from './components/12-day_19_june/useTransition/UseTransition'
// import UseReducer from './componqents/12-day_19_june/useRedcer/UseReducer'
// import UseContext from './components/12-day_19_june/useContext/UseContext'
// import UseCallback from './components/12-day_19_june/useCallback/UseCallback'
// import UsxeMemo from './components/10-day_17_june/useMemo/UseMemo'
// import UseRef from './components/10-day_17_june/useRef/UseRef'
// import UseNavigate from './components/10-day_17_june/useNavigate/UseNavigate'
// import UseLayoutEffect from './components/10-day_17_june/useLayout/UseLayout'
// import Usestate from './components/10-day_17_june/usestate/Usestate'

export default function App() {
  return (
    <div>
      {/* <Usestate/> */}
      {/* <UseEffect/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseNavigate/> */}
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseTransition/> */}
      {/* <Nested/> */}
      {/* <NestedpassProps/> */}
      {/* <App1/> */}
      {/* <FormikForms/> */}
      {/* <UseFormik/> */}
      {/* <Parth/> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Singup />} />
      
        
      {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ordersummary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route path="featuredProduct" element={<FeaturedProduct />} />
          <Route index element={<FeaturedProduct />} />
          <Route path="newProduct" element={<NewProduct />} />
        <Route path="*" element={<NoMatchRoutes />} />
        </Route>
        <Route path="user" element={<User />}>
        <Route path=":userId" element={<UserDetails />}/>
        <Route path="admin" element={<Admin />}/>
       </Route> */}
      </Routes>
    </div>
  );
}
