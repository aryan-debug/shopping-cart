import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux'
import ProductCard from "../components/ProductCard";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../app/reducers/ProductSlice"
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
    reducer: {
        products: productReducer,
    }
})

describe("Product card component", () => {
    it("has product image", () => {
        render(<BrowserRouter><Provider store = {store}><ProductCard name = "Apple Watch 5" images = {["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"]} product_id = {1}/></Provider></BrowserRouter>)
        screen.getByAltText("Apple Watch 5")
    })
    it("has left and right button", () => {
        const { getAllByRole } = render(<BrowserRouter><Provider store = {store}><ProductCard name = "Apple Watch 5" images = {["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"]} product_id = {1}/></Provider></BrowserRouter>)
        expect(getAllByRole("button")[0]).toBeInTheDocument()
        expect(getAllByRole("button")[1]).toBeInTheDocument()
    })    
    it("next image displays on right click", () => {
        render(<BrowserRouter><Provider store = {store}><ProductCard name = "Apple Watch 5" images = {["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"]} product_id = {1}/></Provider></BrowserRouter>)
        const right_button = screen.getAllByRole("button")[1]
        userEvent.click(right_button)
        expect(screen.getByAltText("Apple Watch 5").src).toMatch("product_images/product1_image2.jpeg")
    })
    it("previous image displays on left click", () => {
        render(<BrowserRouter><Provider store = {store}><ProductCard name = "Apple Watch 5" images = {["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"]} product_id = {1}/></Provider></BrowserRouter>)
        const left_button = screen.getAllByRole("button")[0]
        userEvent.click(left_button)
        expect(screen.getByAltText("Apple Watch 5").src).toMatch("product_images/product1_image3.jpeg");
    })
})