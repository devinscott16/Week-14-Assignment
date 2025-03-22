import React from "react";
import Buttons from "./Buttons";

interface FoodCardProps {
  imageSrc: string;
  altText: string;
  description: string;
}

export default function FoodCard({
  imageSrc,
  altText,
  description,
}: FoodCardProps) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        backgroundColor: "lightgray",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="card-img-top"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="card-body">
        <textarea
          className="form-control"
          defaultValue={description}
          rows={10}
        />
        <Buttons />
      </div>
    </div>
  );
}
