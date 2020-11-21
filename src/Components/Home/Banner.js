import React from "react";
import "./Home.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-box">
          <h1 className="banner-title text-center">
            Best food waiting for your belly
          </h1>
              <div class="input-group search-box input-group-lg text-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search food items..."
                />
                <div class="input-group-append">
                  <span class="btn btn-lg btn-danger " id="basic-addon2">
                    Search
                  </span>
                </div>
              </div>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
