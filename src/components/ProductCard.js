import React from "react";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";


export default function ProductCard({product_id, images}){
    const [imageCounter, setImageCounter] = useState(0);
    const navigate = useNavigate();
    const nextImage = () => {setImageCounter(mod(imageCounter + 1, images.length))}
    const previousImage = () => {setImageCounter(mod(imageCounter - 1, images.length))}

    function mod(n, m) {
        return ((n % m) + m) % m;
      }

    return (
        <div className = "product-card" onClick={() => navigate(`/shop/${product_id}`)}>
            <div className="image-slider">
                <button className="slide-btn left-slide-btn" onClick = {(e) => {e.stopPropagation(); e.preventDefault(); previousImage()}}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <img src = {images[imageCounter]} alt = "product_img" className="product-image-card"/>
                <button className = "slide-btn right-slide-btn" onClick={(e) => {e.stopPropagation(); e.preventDefault(); nextImage()}}><FontAwesomeIcon icon = {faAngleRight}/></button>
            </div>
            <AddButton id = {product_id}/>
        </div>
    )
}