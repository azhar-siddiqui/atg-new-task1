import React, { useEffect, useState } from "react";

import "./AllPost.css";
import Location from "./Location";
import { data } from "../../../data/data";

const AllPost = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="post__MainContainer">
      <div className="post__container">
        {data.map((item, id) => {
          return (
            <div className="post__secondContainer" key={id}>
              <img src={item.postImg} alt="" />
              <div className="post_detailsContainer">
                <div className="post__details">
                  <p>{item.icon}</p>
                  <p style={{ padding: "4px 0 0 15px" }}>{item.postTitle}</p>
                </div>
                <div
                  className="post__details pt-10"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "10px",
                  }}
                >
                  <h3>{item.postMassage}</h3>
                  <item.postDetailIcons className="btn__click" />
                </div>
                {item.postIcon ? (
                  <div className="post_DetailsFields">
                    <div className="d-flex">
                      <p className="post__DetailsIcons">{item.postIcon}</p>
                      <p>{item.postDate}</p>
                    </div>
                    <div className="d-flex">
                      <item.postLocationIcon className="post__DetailsIcons" />
                      <p>{item.postLocation}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <p className="pt-10">{item.postDetailsMassage}</p>
                {item.visit ? (
                  <button
                    className="vist__btn"
                    style={{ color: item.visit.color }}
                  >
                    {item.visit.visitBtn}
                  </button>
                ) : (
                  ""
                )}
                <div className="usr">
                  <div className="flex-class">
                    <img
                      src={item.profileIcon}
                      alt={item.profileIcon}
                      className="profile__Img"
                      style={{ width: "auto" }}
                    />
                    <p className="profile__Name">{item.profileName}</p>
                  </div>

                  <p>
                    <item.EyeIcon />
                    <span>{item.postViews}</span>
                  </p>
                  <item.shairBtn className="btn__click share" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {screenWidth > 1080 && <Location />}
    </div>
  );
};

export default AllPost;
