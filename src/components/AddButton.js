import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity } from "../app/reducers/ProductSlice";

export default function AddButton({id}){
    const dispatch = useDispatch();
    return (
        <button className="add-button" onClick = {(e) => {e.stopPropagation(); e.preventDefault(); dispatch(incrementQuantity(id)); e.target.style.backgroundColor = "red"; e.target.style.backgroundColor = "white"; e.target.style.color = "#00E9A3"; e.target.style.border = "2px solid #00E9A3"}}
        onMouseLeave = {(e) => {e.target.style.backgroundColor = "#00E9A3"; e.target.style.color = "white"}}>Add to Cart</button>
    )
}