import React, { useState, useEffect } from "react";
import "./Login.css";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import formImg from "../../assets/Group_3.svg";
const Login = ({ setOpenmodal }) => {
  const [login, setLogin] = useState(true);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handalCloseModal = () => {
    setOpenmodal(false);
  };

  const handleClickdata = (e) => {
    e.preventDefault();
  };

  const HandleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={handalCloseModal} className="titleCloseBtn">
          <IoCloseOutline />
        </button>
        <div className="title">
          <h1>Create Account</h1>
          {login ? (
            <p>
              Already have an account?{" "}
              <button className="sign__InBtn" onClick={HandleLogin}>
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don’t have an account yet?{" "}
              <button className="sign__InBtn" onClick={HandleLogin}>
                Create new for free!
              </button>
            </p>
          )}
        </div>

        <div className="body-form">
          {login === true ? (
            <form className="form-section" onSubmit={handleClickdata}>
              <div className="Naming_section">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button
                className="accountBtn btn-account"
                onClick={handalCloseModal}
              >
                Create Account
              </button>
              <button className="accountBtnWithFacbook btn-account social-btn">
                <FaFacebook className="facebook__icon" /> Sign up with Facebook
              </button>
              <button className="accountBtnGogle btn-account social-btn">
                <FcGoogle className="google__icon" /> Sign up with Google
              </button>
            </form>
          ) : (
            <form className="form-section" onSubmit={handleClickdata}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button
                className="accountBtn btn-account"
                onClick={handalCloseModal}
              >
                Sign In
              </button>
              <button className="accountBtnWithFacbook btn-account social-btn">
                <FaFacebook className="facebook__icon" /> Sign up with Facebook
              </button>
              <button className="accountBtnGogle btn-account social-btn">
                <FcGoogle className="google__icon" /> Sign up with Google
              </button>
              <button className="forget_passBtn">Forgot Password</button>
            </form>
          )}

          {screenWidth > 550 && <img src={formImg} alt="" />}
        </div>

        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Login;
