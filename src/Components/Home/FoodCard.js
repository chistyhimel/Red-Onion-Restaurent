import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const FoodCard = (props) => {


    const {name,img,shortDescription} = props.data;
    return (
        <div class="card">
        <img src={img} class="card-img-top p-5" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{shortDescription}</p>
          <Link to={`/foodDetails/${name.toLocaleLowerCase()}`}>
          <button className="btn btn-danger">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
          </Link>
        </div>
      </div>
    );
};

export default FoodCard;