
import React from "react"
import { useSelector } from "react-redux";
import { selectProducts } from "../app/reducers/ProductSlice";
import "../static/styles/shop.scss"
import Header from "./Header";
import ProductCard from "./ProductCard";
import uniqid from "uniqid";

function Shop(){
    const products = useSelector(selectProducts);
    
    return (
    <div id = "shop-box">
        <Header className = "default dark"></Header>
        <div id = "sale-box">
            <div id = "blur-box">
                <h1>Pride Month Sale!</h1>
            </div>
        </div>

        <div id = "product-card-grid">
            {products.map(product => {
                return <ProductCard key = {uniqid()} product_id = {product.id} images = {product.images}/>
            })}
        </div>
    </div>)
}
export default Shop;