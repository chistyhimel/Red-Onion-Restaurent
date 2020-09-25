import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Home.css"

const FoodCard = (props) => {


    const {name,img,shortDescription} = props.data;
    return (
        <div className="card food-card mt-3">
        <img src={img} className="card-img-top p-5" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{shortDescription}</p>
          <Link to={`/foodDetails/${name.toLocaleLowerCase()}`}>
          <button className="btn btn-danger">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
          </Link>
        </div>
      </div>
    );
};

export default FoodCard;