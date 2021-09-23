import React from 'react';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const SingleProduct = (props) => {
    // console.log(props.product);
    const { name, price, img, stock, seller, star } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="info-area">
                <h3 className="name">{name}</h3>
                <p>By: {seller}</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon"
                ></Rating>
                <h4>Price: $ {price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.orderProduct(props.product)} className="addBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;