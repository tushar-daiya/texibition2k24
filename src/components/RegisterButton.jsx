import React from "react";
import { Link } from "react-router-dom";
import "./registerButton.css";
const RegisterButton = (props) => {
  return (
    // <Link to={"/register"}>
    <button
      name="Register"
      aria-label="Register"
      {...props}
      className="button button--hyperion w-full border-2 border-solid border-black px-10 py-3 text-xl font-bold"
    >
      <span>
        <span>Register</span>
      </span>
    </button>
    // </Link>
  );
};

export default RegisterButton;
