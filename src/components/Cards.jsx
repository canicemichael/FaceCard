import Card from "./Card";
import data from "../../data";
console.log(data);

export default function Cards() {
  const cardELements = data.map((item) => {
    return (
      <Card
        // item={item}
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <>
      <div className="cardsCont">{cardELements}</div>
    </>
  );
}
