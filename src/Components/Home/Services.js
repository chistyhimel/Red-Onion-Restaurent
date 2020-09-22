import React from "react";
import img1 from "../../Img/Image/adult-blur-blurred-background-687824.png"
import img2 from "../../Img/Image/chef-cook-food-33614.png"
import img3 from "../../Img/Image/architecture-building-city-2047397.png"
import icon1 from "../../Img/ICON/Group 204.png"
import icon2 from "../../Img/ICON/Group 1133.png"
import icon3 from "../../Img/ICON/Group 245.png"


const Services = () => {
  return (
    <div className="container mb-lg-5">
        <div class="card-deck">
      <div class="card">
        <img src={img1} class="card-img-top" alt="..." />
        <div class="card-body row">
          <div className="col-3">
              <img src={icon1} alt="" />
          </div>
          <div className="col-9">
          <h5 class="card-title">Fast Delivery</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> 
          </div>
        </div>
      </div>

      <div class="card">
        <img src={img2} class="card-img-top" alt="..." />
        <div class="card-body row">
          <div className="col-3">
              <img src={icon2} alt="" />
          </div>
          <div className="col-9">
          <h5 class="card-title">Fast Delivery</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> 
          </div>
        </div>
      </div>

      <div class="card">
        <img src={img3} class="card-img-top" alt="..." />
        <div class="card-body row">
          <div className="col-3">
              <img src={icon3} alt="" />
          </div>
          <div className="col-9">
          <h5 class="card-title">Fast Delivery</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> 
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Services;
