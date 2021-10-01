import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // console.log(props.cart);

    let subTotal = 0;
    let totalQuantity = 0;
    for (let i = 0; i < props.cart.length; i++) {
        if (!props.cart[i].quantity) {
            props.cart[i].quantity = 1;
        }
        subTotal += props.cart[i].price * props.cart[i].quantity;
        totalQuantity += props.cart[i].quantity;
    }

    const shipping = subTotal > 0 ? 15 : 0;

    let tax = subTotal * (10 / 100);

    const total = subTotal + shipping + tax;

    // console.log(total);

    const flexStyle = {
        display: "flex"
    }
    const marginStyle = {
        paddingLeft: "20px"
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h1>Order Summary</h1>
                <h3>Item Order: <i class="fas fa-shopping-cart" style={{ color: "goldenrod" }}></i> {totalQuantity}</h3>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Sub Total: </td>
                        <td style={marginStyle}>$ {subTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total Shipping: </td>
                        <td style={marginStyle}>$ {shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax: </td>
                        <td style={marginStyle}>$ {tax.toFixed(2)}</td>
                    </tr>
                </table>
                <div className="total" style={{ display: "flex", marginLeft: "50px" }}>
                    <p>Total: </p>
                    <p style={{ paddingLeft: "115px" }}>$ {total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;