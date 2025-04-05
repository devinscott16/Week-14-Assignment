interface ButtonsProps {
  toggleEdit: () => void;
  deleteButton: React.ReactNode;
}

export default function Buttons({ toggleEdit, deleteButton }: ButtonsProps) {
  return (
    <div className="d-flex justify-content-end gap-1">
      <button className="btn btn-outline-primary btn-sm" onClick={toggleEdit}>
        Edit
      </button>
      {deleteButton}
    </div>
  );
}
