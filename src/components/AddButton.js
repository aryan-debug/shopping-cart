import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity } from "../app/reducers/ProductSlice";

export default function AddButton({id}){
    const dispatch = useDispatch();
    return (
        <button className="add-button" onClick = {(e) => {e.stopPropagation(); e.preventDefault(); dispatch(incrementQuantity(id))}}>Add to Cart</button>
    )
}