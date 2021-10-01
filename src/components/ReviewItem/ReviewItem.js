import React from 'react';
import Rating from 'react-rating';

const ReviewItem = (props) => {

    const { name, seller, star, price, quantity, img } = props.item;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="name">{name}</h3>
                <p>By: {seller}</p>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon"
                ></Rating>
                <p>Quantity: {quantity}</p>
                <h4>Price: $ {price}</h4>
                <button onClick={() => props.removeItem(props.item)} className="addBtn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;