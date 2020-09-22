import React from "react";
import "./OrderPlaced.css"

const OrderPlaced = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-5 route"> 

        </div>

        <div class="col-md-5 offset-md-2 bg-light">
          <ul class="list-group list-group-flush destination-detail">
            <li class="">Cras justo odio</li>
            <div style={{height:"65px", width:"50px", borderLeft:"1px solid black",marginLeft:"6px"}}></div>
            <li class="">Dapibus ac facilisis in</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
