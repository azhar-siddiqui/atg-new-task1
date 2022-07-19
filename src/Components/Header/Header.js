import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Login from "../Login/Login";
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [openmodal, setOpenmodal] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      {screenWidth > 450 && (
        <nav className="header__container">
          <NavLink to="/">
            <img src={Logo} alt="" className="logo__img" />
          </NavLink>
          {screenWidth > 900 && (
            <div className="search__bar">
              <AiOutlineSearch className="search__icon" />
              <input
                type="text"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          )}

          <div
            onClick={() => {
              setOpenmodal(true);
            }}
            className="account__section"
          >
            <span className="account__details">Create account. </span>
            <span className="account__details user_details">It’s free!</span>
            <MdOutlineArrowDropDown className="drop__icons" />
          </div>
        </nav>
      )}
      {/* {openmodal == true ? <Login /> : null} */}
      {openmodal && <Login setOpenmodal={setOpenmodal} />}
      {screenWidth < 500 && (
        <button
          onClick={() => {
            setOpenmodal(true);
          }}
          className="Join__Group1"
        >
          Join Group
        </button>
      )}
    </>
  );
};

export default Header;
