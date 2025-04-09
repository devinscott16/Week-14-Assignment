import FoodCard from "./FoodCard";
import { MasterType } from "./types";

interface FoodListProps {
  //sets the types for FoodList Props
  foodItems: MasterType[];
  deleteFoodItem: (id: string) => void;
}

export default function FoodList({ foodItems, deleteFoodItem }: FoodListProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {foodItems.map((food) => (
        <FoodCard
          key={food.id}
          item={food} // Pass food item id
          deleteFoodItem={deleteFoodItem} // Pass delete function
        />
      ))}
    </div>
  );
}
