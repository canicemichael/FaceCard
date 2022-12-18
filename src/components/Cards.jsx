import Card from "./Card";
import data from "../../data";
console.log(data);

export default function Cards() {
  const cardELements = data.map((item) => {
    return (
      <Card
        key={cards.id}
        item={item}
        // rating={cards.stats.rating}
        // title={cards.title}
        // reviewCount={cards.stats.reviewCount}
        // location={cards.location}
        // price={cards.price}
        // coverImg={cards.coverImg}
        // openSpots={cards.openSpots}
      />
    );
  });
  return (
    <>
      <div className="cardsCont">{cardELements}</div>
    </>
  );
}
