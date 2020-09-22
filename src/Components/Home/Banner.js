import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className="banner mb-md-5">
          <div className="banner-box">
            <h1 className="font-weight-bold pb-4">Best Food Waiting for Your Belly</h1>
            <div className="row">
                <div className="col-md-9">
                      <input type="text" className="form-control form-control-lg"/>
                </div>
                <div className="col-md-3">
                      <button className="btn btn-danger form-control btn-lg">Search</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;