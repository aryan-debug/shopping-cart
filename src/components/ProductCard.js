import React from "react";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import QuantityBox from "./QuantityBox";


export default function ProductCard({product_id, images}){
    const [imageCounter, setImageCounter] = useState(0);

    const nextImage = () => {setImageCounter(mod(imageCounter + 1, images.length))}
    const previousImage = () => {setImageCounter(mod(imageCounter - 1, images.length))}

    function mod(n, m) {
        return ((n % m) + m) % m;
      }

    return (
        <div className = "product-card">
            <div className="image-slider">
                <button className="left-slide-btn" onClick = {previousImage}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <img src = {images[imageCounter]} alt = "product_img" className="product-image-card"/>
                <button className = "right-slide-btn" onClick={nextImage}><FontAwesomeIcon icon = {faAngleRight}/></button>
            </div>
            <QuantityBox id = {product_id}/>
        </div>
    )
}