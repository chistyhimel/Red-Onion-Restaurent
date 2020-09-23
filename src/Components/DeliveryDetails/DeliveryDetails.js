import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import DeliveryItemsCard from "./DeliveryItemsCard";

const DeliveryDetails = () => {
  const { value, value2 } = useContext(UserContext);
  const [addfoodItems, setAddFoodItems] = value2;
  let subTotal = 0;
  let tex = 2.75;
  let deliveryFee = 4.21;

  for (let i = 0; i < addfoodItems.length; i++) {
    const element = addfoodItems[i];
    subTotal += element.price*element.quantity;
    
  }
  let total = subTotal+tex+deliveryFee;

  const handleRemoveItem =(itemName)=>{
   
    const remainingItem = addfoodItems.filter(item=> item.id !== itemName)
    setAddFoodItems(remainingItem)
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col-md-5">
          <h3>Edit Delivery Details</h3>
          <hr />

          <form className="mb-2">
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="House Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Road No/Lane"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Flat/Suit or Floor"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Bussiness Name"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="2"
                placeholder="Add Delivery Instruction"
              />
            </div>

            <button type="submit" class="btn btn-danger btn-block btn-lg">
              Submit
            </button>
          </form>
        </div>
        <div class="col-md-5 offset-md-2">
          {addfoodItems.map((foodItem) => (
            <DeliveryItemsCard data={foodItem} removeItem={handleRemoveItem}></DeliveryItemsCard>
          ))}
          

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Subtotal
          <span class="badge badge-light">$ {subTotal}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Tex
          <span class="badge badge-light">$ {addfoodItems.length > 0 ? `${tex}` : "0"}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Delivery fee
              <span class="badge badge-light">$ {addfoodItems.length > 0 ? `${deliveryFee}` : "0"}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
              Total
              <span class="badge badge-light">$ {addfoodItems.length > 0 ? `${total.toFixed(2)}` : "0"}</span>
            </li>
          </ul>
            
            <Link to="/orderPlaced"> 
            <button className="btn btn-lg btn-danger btn-block">Place Order</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
