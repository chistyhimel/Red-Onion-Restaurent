import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeliveryItemsCard = (props) => {
  const { img, name, price,quantity } = props.data;
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row no-gutters">
        <div class="col-3">
          <img src={img} class="card-img" alt="..." />
        </div>
        <div class="col-9 py-2">
          <p class="card-title">{name}</p>
          <div className="row">
            <div className="col-md-5">
              <h5 className="text-danger">$ {price}</h5>
            </div>
            <div className="col-md-7">
              <button class="btn">-</button>

              <input
                type="text"
                className="form-control d-inline"
                value={quantity}
                min="0"
                style={{ width: "35px", height: "35px" }}
              />

              <button class="btn">+</button>
            </div>
          </div>
          <small>Delivery fee</small>
        </div>
      </div>
    </div>
  );
};

export default DeliveryItemsCard;
