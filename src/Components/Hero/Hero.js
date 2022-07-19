import React from "react";
import "./Hero.css";
import Heroimg from "../../assets/Hero.png";

const Hero = () => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);

  return (
    <div className="hero__mainContainer">
      <div className="hero__container">
        <img src={Heroimg} alt="Hero Section" className="hero__img" />
      </div>
      {/* {screenWidth < 1080 && (
        <button className="Join__Group">Join Group</button>
      )} */}
      <div className="hero__massage">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Hero;
