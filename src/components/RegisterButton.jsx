import React from "react";
import { Link } from "react-router-dom";
import "./registerButton.css";
const RegisterButton = () => {
  return (
    // <Link to={"/register"}>
    <button className="button button--hyperion w-full border-2 border-solid border-black px-10 py-3 text-xl font-bold">
      <span>
        <span>Register</span>
      </span>
    </button>
    // </Link>
  );
};

export default RegisterButton;
