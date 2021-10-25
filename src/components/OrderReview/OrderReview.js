import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    document.title = "/e-jhon/order review"

    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    // remove handler
    const removeItem = (product) => {
        const newCart = cart.filter(item => item.key !== product.key);
        setCart(newCart);
        removeFromDb(product.key);
    }

    const history = useHistory();

    const shipping = () => {
        if (cart.length > 0) {
            // setCart([]);
            // clearTheCart();
            history.push('/shipping');
        }
        else {
            alert("Cart have empty!");
        }
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(item => <ReviewItem removeItem={removeItem} item={item} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
                <div style={{ textAlign: "center" }}>
                    <button onClick={shipping} className="reviewBtn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;