import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../App";


const DeliveryItemsCard = (props) => {
  const { img, name, price,quantity,id } = props.data;
const {handleRemoveItem} = props.removeItem;


  return (
    <div class="card mb-2" style={{ maxWidth: "540px" }}>

      <div class="row no-gutters">
        <div class="col-5 p-2">
          <img src={img} class="img-fluid" alt="..." style={{width: "120px"}} />
        </div>
        <div class="col-6 py-2">
          <p class="d-inline">{name} × {quantity}x </p>
              <h5 className="text-danger">$ {price}</h5>
          <small>Delivery fee</small>
        </div>
        <div className="col-1">
        <h2 class="d-inline font-weight-bold md-h1" onClick={()=>props.removeItem(id)}>×</h2>
        </div>
      </div>
    </div>
  );
};

export default DeliveryItemsCard;
