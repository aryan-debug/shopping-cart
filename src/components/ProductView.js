import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import AddButton from "./AddButton";
import Header from "./Header";
import { products } from "../app/reducers/ProductSlice";

export default function ProductView(){
    const [imageCounter, setImageCounter] = useState(0);
    let params = useParams();
    const product_id = parseInt(params.id);
    const product = useSelector(() => products.find(product => product.id === product_id));

    const nextImage = () => {setImageCounter(mod(imageCounter + 1, product.images.length))}
    const previousImage = () => {setImageCounter(mod(imageCounter - 1, product.images.length))}

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    function handleImageClick(e){
        const target = e.target;
        const parent = target.parentNode;
        const children = parent.children;
        setImageCounter(Array.from(children).indexOf(target));
        Array.from(children).forEach(child => child.classList.remove("active"))
    }


    return (
    <div className="product-page">
        <Header className = "default dark"></Header>
        <div className="product-box">
            <div className="images-box">
                <div className="main-image-box">
                    <button className=" slide-btn left-slide-btn" onClick = {(e) => {e.stopPropagation(); e.preventDefault(); previousImage()}}><FontAwesomeIcon icon={faAngleLeft}/></button>
                    <img src = {process.env.PUBLIC_URL + product.images[imageCounter]} alt = "product"></img>
                    <button className = "slide-btn right-slide-btn" onClick={(e) => {e.stopPropagation(); e.preventDefault(); nextImage()}}><FontAwesomeIcon icon = {faAngleRight}/></button>
                </div>
                <div className="product-images">
                    {product.images.map((image, index) => <img className={index === imageCounter ? "active": ""} onClick = {handleImageClick} key = {image} src = {process.env.PUBLIC_URL + image} alt = "product"></img>)}
                </div>
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>Price: ${product.price}</h3>
                <AddButton id = {product_id}/>
            </div>
        </div>
    </div>)
}