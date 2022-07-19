import React from "react";
import { useSelector } from "react-redux";
import QuantityBox from "./QuantityBox";
import Header from "./Header";

export function Cart(){
    const products_in_cart = useSelector(state => state.products)
    return (
        <div className = "cart-page">
            <Header className = "default dark"></Header>
            <div className = "cart">
                <h3>Your Items</h3>
                <div className = "cart-list">
                    {products_in_cart.map(product => {
                        return (
                        <div>
                            <div key = {product.id} className = "cart-product">
                                <div className="left-side">
                                    <img src = {process.env.PUBLIC_URL + product.images[0]} alt = {product.name}></img>
                                    <div className="column">
                                        <h3>Price</h3>
                                        <h2>$ {product.price}</h2>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <div className="column">
                                        <h3>Quantity</h3>
                                        <QuantityBox id = {product.id} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}