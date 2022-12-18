import Card from "./Card";

export default function Cards() {
  // const cardELements = () => {
  //   return (

  //   )
  // }
  return (
    <div className="cardsCont">
      <Card
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={300}
      />
      <Card
        rating="4.5"
        reviewCount={32}
        country="USA"
        title="Learn wedding photography"
        price={250}
      />
      <Card
        rating="4.0"
        reviewCount={10}
        country="USA"
        title="Group Mountain Biking"
        price={126}
      />
    </div>
  );
}
