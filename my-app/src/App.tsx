import { useState } from "react";
import FoodList from "./FoodList";
import NavBar from "./NavBar";

export default function App() {
  const initialFoodItems = [
    {
      id: 1,
      imageSrc: "src/assets/Chicken Alfredo.png",
      altText: "Chicken Alfredo",
      description:
        "Chicken Alfredo is a pasta dish featuring fettuccine noodles tossed in a rich, creamy sauce made with butter, Parmesan cheese, and often cream, with added chicken.",
    },
    {
      id: 2,
      imageSrc: "src/assets/Spaghetti.png",
      altText: "Spaghetti",
      description:
        "Spaghetti is a classic Italian pasta dish made with long, thin noodles served with tomato sauce and often topped with grated cheese.",
    },
    {
      id: 3,
      imageSrc: "src/assets/Pizza.png",
      altText: "Pizza",
      description:
        "Pizza is a savory dish made with a flat round base of dough topped with tomatoes, cheese, and often other ingredients like meats and vegetables.",
    },
    {
      id: 4,
      imageSrc: "src/assets/Sushi.png",
      altText: "Sushi",
      description:
        "Sushi is a Japanese dish consisting of vinegared rice combined with various ingredients, such as raw or cooked seafood, vegetables, and sometimes tropical fruits.",
    },
  ];

  // delcare food items in state
  const [foodItems, setFoodItems] = useState(initialFoodItems);

  // set up delete
  const deleteFoodItem = (id: number) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // add a new food item
  const addFoodItem = () => {
    const newFoodItem = {
      id: foodItems.length + 1,
      imageSrc: "src/assets/Ramen.png",
      altText: "New Dish",
      description: "Click the EDIT button to add your discription.",
    };

    setFoodItems((prevItems) => [...prevItems, newFoodItem]);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/background%20Image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
      }}
    >
      <div className="container-fluid">
        <NavBar addFoodItem={addFoodItem} />{" "}
        {/* Passes add function to nav bar */}
        <div className="d-flex flex-wrap justify-content-center">
          <FoodList foodItems={foodItems} deleteFoodItem={deleteFoodItem} />
          {/* Passes delete function in the food list */}
        </div>
      </div>
    </div>
  );
}
