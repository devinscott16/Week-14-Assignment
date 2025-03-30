import FoodCard from "./FoodCard";

interface FoodListProps {
  //sets the types for FoodList Props
  foodItems: {
    id: number;
    imageSrc: string;
    altText: string;
    description: string;
  }[];
  deleteFoodItem: (id: number) => void;
}

export default function FoodList({ foodItems, deleteFoodItem }: FoodListProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {foodItems.map((food) => (
        <FoodCard
          key={food.id}
          imageSrc={food.imageSrc}
          altText={food.altText}
          description={food.description}
          id={food.id} // Pass food item id
          deleteFoodItem={deleteFoodItem} // Pass delete function
        />
      ))}
    </div>
  );
}
