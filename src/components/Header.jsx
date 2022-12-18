import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/hero3.png";
import hero4 from "../../public/images/hero4.png";
import hero5 from "../../public/images/hero5.png";
import hero6 from "../../public/images/hero6.png";
import hero7 from "../../public/images/hero7.png";
import hero8 from "../../public/images/hero8.png";
import hero9 from "../../public/images/hero9.png";

export default function Header() {
  return (
    <div>
      <div className="hero">
        <div className="heroCol hero1">
          <img className="heroImgWidth" src={hero1} alt="" />
        </div>
        <div className="heroCol hero2">
          <img className="heroImgWidth" src={hero2} alt="" />
          <img className="heroImgWidth" src={hero3} alt="" />
        </div>
        <div className="heroCol hero3">
          <img className="heroImgWidth" src={hero4} alt="" />
          <img className="heroImgWidth" src={hero5} alt="" />
        </div>
        <div className="heroCol hero4">
          <img className="heroImgWidth" src={hero6} alt="" />
          <img className="heroImgWidth" src={hero7} alt="" />
        </div>
        <div className="heroCol hero5">
          <img className="heroImgWidth" src={hero8} alt="" />
          <img className="heroImgWidth" src={hero9} alt="" />
        </div>
      </div>
      <div className="hero-two">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
