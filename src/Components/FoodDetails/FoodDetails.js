import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import fakeData from "../FakeData";
import "./FoodDetails.css";

const FoodDetails = () => {
  const {value,value2} = useContext(UserContext)
  const [addfoodItems,setAddFoodItems] = value2;
  const [quantity,setQuantity] = useState(1)

  const { foodName } = useParams();
  const [foodItem, setFoodItem] = useState([]);
  useEffect(() => {
    const foodData = fakeData.find(
      (foodItem) => foodItem.name.toLocaleLowerCase() === foodName
    );
    setFoodItem(foodData);
  }, []);

  const handleAddToCart = (food) =>{
    const newCart = [...addfoodItems, food]
    foodItem.quantity = quantity
    setAddFoodItems(newCart);
  }

  const handleAddQuantity = () =>{
    setQuantity(quantity+1)
  }
  const handleRemoveQuantity = () =>{
    if(quantity > 1){
      setQuantity(quantity-1)
    } 
  }
  

  return (
    <div className="container foodDetails-container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="align-self-center">
            <h1>{foodItem.name}</h1>
            <p>{foodItem.description}</p>
            <h1 className="d-inline">${foodItem.price}</h1>

            <button class="btn btn-default ml-4 mr-2" onClick={handleRemoveQuantity }> - </button>

            <input type="text" className="quantity" value={quantity} min="1" />

            <button class="btn btn-default ml-2" onClick={handleAddQuantity}>+</button>

          </div>

          <button className="btn btn-danger btn-lg" onClick={()=>handleAddToCart(foodItem)}>
            Add <FontAwesomeIcon icon={faShoppingCart} />
          </button>

        </div>
        <div className="col-md-6">
          <img src={foodItem.img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
