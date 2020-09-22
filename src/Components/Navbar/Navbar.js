import React, { useContext } from "react";
import Logo from "../../Img/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {value,value2} = useContext(UserContext)
  const [addfoodItems,setAddFoodItems] = value2;
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" fixed-top>
        <div className="container">
        <a class="navbar-brand" href="#">
          <Link to="/home">
          <img src={Logo} width="170"  alt=""/>
          </Link>
        
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            
            <li class="nav-item mr-md-4">
              <a class="nav-link" href="#">
                <Link to="/deliveryDetails">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-dark"></FontAwesomeIcon>
                </Link>
              </a>
            </li>
            {
              addfoodItems.length > 0 &&  <li class="nav-item mr-md-4">
              <a class="nav-link font-weight-bold text-danger" href="#">
               {addfoodItems.length}
              </a>
            </li>
            }
            <li class="nav-item mr-md-4 ">
              <a class="nav-link font-weight-bold" href="#"> 
                Log in
              </a>
            </li>
            <button class="btn btn-danger my-sm-0" type="submit">Sign in</button>
          </ul>
        </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
