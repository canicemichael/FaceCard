// import StarIcon from "@mui/icons-material/Star";

export default function Card({ props }) {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLDOUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div>
        <div className="card1">
          {badgeText && <p className="sold-out">{badgeText}</p>}
          <img className="cardImg" src={props.item.coverImg} alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" /> {props.item.stats.rating} (
            {props.item.stats.reviewCount}) {props.item.location}
          </div>
          <div>
            <p className="desc">{props.item.title}</p>
          </div>
          <div>
            <p className="price">From ${props.item.price} / person</p>
          </div>
        </div>
      </div>
    </div>
  );
}
