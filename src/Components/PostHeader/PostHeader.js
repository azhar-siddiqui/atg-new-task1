import React, { useEffect, useState } from "react";
import "./PostHeader.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import CombineComponents from "../CombineComponents";

const PostHeader = () => {
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

  return (
    <>
      {screenWidth > 1080 && (
        <div className="post__HeaderContainer">
          <div className="post__BtnSection">
            <NavLink to="/" className="all_post">
              All Post(32)
            </NavLink>
            <NavLink to="/article">Article</NavLink>
            <NavLink to="/event">Event</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/job">Job</NavLink>
          </div>
          <div className="New__BtnPostContainer">
            <NavLink to="/writepost">
              <span>Write a Post</span>
              <MdOutlineArrowDropDown className="btn__icons" />
            </NavLink>
            <NavLink to="/joingroup" className="grp__btn">
              <AiOutlineUsergroupAdd className="btn__icons1" />
              <span>Join Group</span>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default PostHeader;
