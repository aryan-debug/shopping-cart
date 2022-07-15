import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "products",
    initialState: [
            {id: 1, name: "Apple Watch 5", description: "some description", images: ["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"], price: 450, quantity: 0},
            {id: 2, name: "Apple Watch 5", description: "some description", images: ["/product_images/product2_image1.jpeg", "/product_images/product2_image2.jpeg", "/product_images/product2_image3.jpeg"], price: 475, quantity: 0},
            {id: 3, name: "Apple Watch 5", description: "some description", images: ["/product_images/product3_image1.jpeg", "/product_images/product3_image2.jpeg", "/product_images/product3_image3.jpeg"], price: 500, quantity: 0}
        ],
    reducers: {
        incrementQuantity: (state, action) => {
            const product_id = action.payload
            const product = state.find(product => product.id === product_id)
            if(product){
                product.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const product_id = action.payload.product_id
            const product = state.find(product => product.id === product_id)
            if(product && product.quantity > 0){
                product.quantity--;
            }
        }
    }
})

export const selectProducts = state => state.products

export const {incrementQuantity, decrementQuantity} = ProductSlice.actions;

export default ProductSlice.reducer