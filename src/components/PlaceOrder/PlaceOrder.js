import React from 'react';
import placeOrderImg from '../../images/giphy.gif';

const PlaceOrder = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Order Has Been Successful!</h1>
            <img style={{ width: '400px' }} src={placeOrderImg} alt="" />
        </div>
    );
};

export default PlaceOrder;