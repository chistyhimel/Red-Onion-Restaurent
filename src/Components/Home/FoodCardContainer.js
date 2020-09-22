import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import fakeData from "../FakeData/index";
import FoodCard from "./FoodCard";

const FoodCardContainer = () => {
  const { value, value2 } = useContext(UserContext);
  const [addfoodItems, setAddFoodItems] = value2;

  const [foodCards, setFoodCards] = useState("breakfast");
  const [selectedFoodsItems, setSelectedFoodItems] = useState([]);

  useEffect(() => {
    const foodItems = fakeData.filter((food) => food.category === foodCards);
    setSelectedFoodItems(foodItems);
    console.log(selectedFoodsItems);
  }, [foodCards]);

  return (
    <div className="mb-lg-5">
      <ul className="nav justify-content-center mb-lg-3">
        <li className="nav-item">
          <h4 className="nav-link " onClick={() => setFoodCards("breakfast")}>
            Breakfast
          </h4>
        </li>
        <li className="nav-item">
          <h4 className="nav-link " onClick={() => setFoodCards("lunch")}>
            Lunch
          </h4>
        </li>
        <li className="nav-item">
          <h4 className="nav-link " onClick={() => setFoodCards("dinner")}>
            Dinner
          </h4>
        </li>
      </ul>

      <div className="card-columns container">
        {selectedFoodsItems.map((foodItems) => (
          <FoodCard data={foodItems}></FoodCard>
        ))}
      </div>
      <div className="text-center">
        {addfoodItems.length < 1 ? (
          <button className="btn btn-light btn-lg" disabled>
            show your orders
          </button>
        ) : (
          <Link to="/deliveryDetails">
            <button className="btn btn-outline-danger btn-lg">
              show your orders
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FoodCardContainer;
