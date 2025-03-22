import FoodCard from "./FoodCard";

const foodItems = [
  {
    imageSrc: "/assets/Chicken Alfredo.png",
    altText: "Chicken Alfredo",
    description:
      "Chicken Alfredo is a pasta dish featuring fettuccine noodles tossed in a rich, creamy sauce made with butter, Parmesan cheese, and often cream, with added chicken.",
  },
  {
    imageSrc: "/assets/Spaghetti.png",
    altText: "Spaghetti",
    description:
      "Spaghetti is a classic Italian pasta dish made with long, thin noodles served with tomato sauce and often topped with grated cheese.",
  },
  {
    imageSrc: "/assets/Pizza.png",
    altText: "Pizza",
    description:
      "Pizza is a savory dish made with a flat round base of dough topped with tomatoes, cheese, and often other ingredients like meats and vegetables.",
  },
  {
    imageSrc: "/assets/Sushi.png",
    altText: "Sushi",
    description:
      "Sushi is a Japanese dish consisting of vinegared rice combined with various ingredients, such as raw or cooked seafood, vegetables, and sometimes tropical fruits.",
  },
];

export default function FoodList() {
  return (
    <div className="d-flex flex-wrap">
      {foodItems.map((food, index) => (
        <FoodCard
          key={index}
          imageSrc={food.imageSrc}
          altText={food.altText}
          description={food.description}
        />
      ))}
    </div>
  );
}
