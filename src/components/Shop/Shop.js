import React, { useState, useEffect } from 'react';
import './Shop.css';
import SingleProduct from '../SingleProduct/SingleProduct';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProducts(data);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            // console.log(savedCart);
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                addedProduct.quantity = savedCart[key];
                storedCart.push(addedProduct);
                // console.log(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const orderProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const searchProduct = (event) => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const getMatchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(getMatchedProducts);
    }

    return (
        <div>
            <div className="search-area">
                <input onChange={searchProduct} className="input" type="text" placeholder="Search product..." />
            </div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        searchProducts.map(product => <SingleProduct key={product.key} orderProduct={orderProduct} product={product} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;