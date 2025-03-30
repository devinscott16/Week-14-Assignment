interface ButtonsProps {
  // set type for props
  toggleEdit: () => void;
  deleteFoodItem: () => void; // Function to delete the card
}

export default function Buttons({ toggleEdit, deleteFoodItem }: ButtonsProps) {
  return (
    <div className="d-flex justify-content-end position-absolute bottom-0 end-0 p-2">
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={toggleEdit} // Toggle edit mode
      >
        Edit
      </button>
      <button
        className="btn btn-danger btn-sm ms-2"
        onClick={deleteFoodItem} // Call the delete function
      >
        Delete
      </button>
    </div>
  );
}
