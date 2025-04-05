import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AddFoodModal from "./modals/AddFoodModal";
import { useState } from "react";

type NavBarProps = {
  addFoodItem: (food: {
    imageSrc: string;
    altText: string;
    description: string;
  }) => void;
};

export default function NavBar({ addFoodItem }: NavBarProps) {
  const [showModal, setShowModal] = useState(false); //sets state with modal

  return (
    <>
      <Navbar className="bg-body-tertiary mb-4">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">Add Your Recipe</Navbar.Brand>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => setShowModal(true)} //calls Modal when clicked
          >
            Click here to Add
          </Button>
        </Container>
      </Navbar>

      <AddFoodModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleAdd={addFoodItem}
      />
    </>
  );
}
