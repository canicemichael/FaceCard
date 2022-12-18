import airbnbImg from "../../public/images/Vector.png";

export default function NavBar() {
  return (
    <div>
      <div className="nav">
        <img className="nav--logo" src={airbnbImg} alt="" />
      </div>
    </div>
  );
}
