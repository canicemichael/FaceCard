import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";
import hero7 from "../assets/hero7.png";
import hero8 from "../assets/hero8.png";
import hero9 from "../assets/hero9.png";

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
