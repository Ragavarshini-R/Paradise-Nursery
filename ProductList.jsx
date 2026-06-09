import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    image: "https://via.placeholder.com/200",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Our Plants
      </h1>

      <div className="products-container">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <button onClick={() => handleAddToCart(plant)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
