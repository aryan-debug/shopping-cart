import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../app/reducers/ProductSlice";

export default function QuantityBox({id}){
    const dispatch = useDispatch()
    return (
        <span className="quantity-box">
            <button className="decrease-btn" onClick = {(e) => {e.stopPropagation(); e.preventDefault(); dispatch(decrementQuantity(id))}}>-</button>
            <h2 className="product-quantity">{useSelector(state => state.products.find(product => product.id === id)).quantity}</h2>
            <button className = "increase-btn" onClick={(e) => {e.stopPropagation(); e.preventDefault(); dispatch(incrementQuantity(id))}}>+</button>
        </span>
    )
}

