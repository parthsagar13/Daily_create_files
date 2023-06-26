import React from "react";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <nav className="flex justify-between bg-slate-500  text-white   items-center  w-full h-full">
          <div className="flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="">About</NavLink>
          </div>
          <div className="flex">
            <button
              onClick={() => navigate("login")}
              className="btn mr-6  btn-primary"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("signup")}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </nav>
        <div>
          <h1 className="text-center  ">Home Page</h1>
        </div>
      </div>
    </>
  );
}
