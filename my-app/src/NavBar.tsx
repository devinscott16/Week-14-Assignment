import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

interface NavBarProps {
  addFoodItem: () => void; // Type
}

export default function NavBar({ addFoodItem }: NavBarProps) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Add Your Recipe</Navbar.Brand>
        <Button variant="outline-primary" size="lg" onClick={addFoodItem}>
          Click here to Add
        </Button>
      </Container>
    </Navbar>
  );
}
