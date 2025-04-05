import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FC } from "react";

type DeleteFoodModalProps = {
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
  handleDelete: () => void;
};

const DeleteFoodModal: FC<DeleteFoodModalProps> = ({
  show,
  handleClose,
  handleDelete,
  handleShow,
}) => {
  return (
    <>
      {/* Trigger Button */}
      <Button variant="danger" onClick={handleShow} className="delete-btn">
        Delete
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Your Recipe?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this recipe?</Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "50%" }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
              handleClose();
            }}
            style={{ width: "50%" }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteFoodModal;
