import { useState } from "react";
import DeleteFoodModal from "./modals/DeleteFoodModal";
import Buttons from "./Buttons";
import { MasterType } from "./types";

interface FoodCardProps {
  item: MasterType;
  deleteFoodItem: (id: string) => void; // Function to delete the card
}

export default function FoodCard({
  item: { imageSrc, altText, description, id },
  deleteFoodItem,
}: FoodCardProps) {
  //sets the state for the text
  const [text, setText] = useState(description);
  const [isEditing, setIsEditing] = useState(false); //sets the state for edit button
  const [showModal, setShowModal] = useState(false); //adds the Modal State

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      className="card shadow-sm p-3 bg-light rounded m-2 position-relative"
      style={{
        width: "25rem",
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="card-img-top"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="card-body">
        {isEditing ? (
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            rows={7}
            style={{
              resize: "none",
              height: "150px",
            }}
          />
        ) : (
          <p>{text}</p>
        )}

        <div className="mt-3">
          <Buttons //Keeping Edit button as is
            toggleEdit={toggleEdit}
            deleteButton={
              <DeleteFoodModal //Activates Modal when clickling Delete
                show={showModal}
                handleShow={() => setShowModal(true)}
                handleClose={() => setShowModal(false)}
                handleDelete={() => deleteFoodItem(id)}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
