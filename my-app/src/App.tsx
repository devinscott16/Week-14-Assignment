import FoodList from "./FoodList";
import NavBar from "./NavBar";

export default function App() {
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
        <NavBar />
        <div className="d-flex">
          <FoodList />
        </div>
      </div>
    </div>
  );
}
