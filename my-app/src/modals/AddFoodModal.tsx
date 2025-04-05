import { useState, FC } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type AddFoodModalProps = {
  //set props for newfood in my modal
  show: boolean;
  handleClose: () => void;
  handleAdd: (newFood: {
    imageSrc: string;
    altText: string;
    description: string;
  }) => void;
};

const AddFoodModal: FC<AddFoodModalProps> = ({
  show,
  handleClose,
  handleAdd,
}) => {
  //sets the state
  const [imageSrc, setImageSrc] = useState("");
  const [altText, setAltText] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (imageSrc && altText && description) {
      handleAdd({ imageSrc, altText, description });
      // Reset after submit
      setImageSrc("");
      setAltText("");
      setDescription("");
      handleClose();
    }
  };

  return (
    //set up for AddFoodModal
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Image Path</Form.Label>
            <Form.Control
              type="text"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              placeholder="ex: src/assets/Tacos.png" //Not sure how to do URL?
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Tacos"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description of the recipe..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Recipe
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFoodModal;
