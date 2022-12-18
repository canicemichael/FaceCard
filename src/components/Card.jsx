import card1 from "../../public/images/card1.png";
import card2 from "../../public/images/card1.png";
import card3 from "../../public/images/card1.png";
// import StarIcon from "@mui/icons-material/Star";

export default function Card({ rating, reviewCount, country, title, price }) {
  return (
    <div className="card">
      <div>
        <div className="card1">
          <p className="sold-out">SOLD OUT</p>
          <img className="cardImg" src={card1} alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" /> {rating} ({reviewCount}) {country}
          </div>
          <div>
            <p className="desc">{title}</p>
          </div>
          <div>
            <p className="price">From ${price} / person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
  <div className="card1">
    <p className="sold-out">SOLD OUT</p>
    <img className="cardImg" src={card2} alt="" />
  </div>
  <div>
    <div>
      <i></i> 5.0 (30) USA
    </div>
    <div>
      <p className="desc">Learn wedding photography</p>
    </div>
    <div>
      <p className="price">From $125 / person</p>
    </div>
  </div>
</div>
<div>
  <div className="card1">
    <p className="sold-out">ONLINE</p>
    <img className="cardImg" src={card3} alt="" />
  </div>
  <div>
    <div>
      <i></i> 4.8 (2) USA
    </div>
    <div>
      <p className="desc">Group Mountain Biking</p>
    </div>
    <div>
      <p className="price">From $50 / person</p>
    </div>
  </div>
</div> */
}
