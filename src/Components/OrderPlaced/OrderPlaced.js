import React from "react";
import dileveryManImg from "../../Img/Image/Group 1151.png"
import helmetImg from "../../Img/Image/Group 1152.png"
import mapImg from "../../Img/Image/map.png"
const OrderPlaced = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-7 route">
            <img src={mapImg} alt="" className="img-fluid"/>
        </div>

        <div class="col-md-4 offset-md-1 bg-light">
          <img src={dileveryManImg} className="img-fluid pt-4 pb-4" alt="" style={{width:"170px"}}/>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h6 className="font-weight-bold">Your Location</h6>
              <p>107 RD No 08</p>
            </li>
            <li class="list-group-item text-light">BLANK</li>
            <li class="list-group-item">
              <h6 className="font-weight-bold">Restaurant Location</h6>
              <p>Gulshan Plaza Restaura GRP</p>
            </li>
          </ul>

          <h1 className="lead mt-3" style={{fontSize:"35px"}}>9.30</h1>
          <small className="lead">Estemated Time</small>
          
          <div className="row mt-3 mb-2">
            <div className="col-4">
              <img src={helmetImg} alt="" style={{width:"100px"}} className="img-fluid p-2"/>
            </div>
            <div className="col-8 pt-3">
                <h6 className="">Hamim</h6>
                <small>Your Raider</small>
            </div>
          </div>
          <button className="btn btn-danger btn-lg btn-block mt-3">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
