// import StarIcon from "@mui/icons-material/Star";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLDOUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div>
        <div className="card1">
          {badgeText && <p className="sold-out">{badgeText}</p>}
          <img className="cardImg" src={props.coverImg} alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" /> {props.rating} ({props.reviewCount}){" "}
            {props.location}
          </div>
          <div>
            <span className="desc">{props.title}</span>
          </div>
          <div>
            <p className="price">From ${props.price} / person</p>
          </div>
        </div>
      </div>
    </div>
  );
}
