import { createSlice } from "@reduxjs/toolkit";

export const products = [
    {id: 1, name: "Apple Watch 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, orci non tempor dictum, dolor odio gravida erat, et ultricies elit dolor id erat. Suspendisse potenti. Phasellus magna erat, rutrum a nisl vel,", images: ["/product_images/product1_image1.jpeg", "/product_images/product1_image2.jpeg", "/product_images/product1_image3.jpeg"], price: 450, quantity: 0},
    {id: 2, name: "Apple Watch 5", description: "some description", images: ["/product_images/product2_image1.jpeg", "/product_images/product2_image2.jpeg", "/product_images/product2_image3.jpeg"], price: 475, quantity: 0},
    {id: 3, name: "Apple Watch 5", description: "some description", images: ["/product_images/product3_image1.jpeg", "/product_images/product3_image2.jpeg", "/product_images/product3_image3.jpeg"], price: 500, quantity: 0}
]

export const ProductSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        incrementQuantity: (state, action) => {
            const product_id = action.payload
            const product_in_cart = state.find(product => product.id === product_id);
            if(product_in_cart){
                product_in_cart.quantity++
            }
            else{
                const product = products.find(product => product.id === product_id);
                product.quantity++;
                state.push(product)
            }
        },
        decrementQuantity: (state, action) => {
            const product_id = action.payload
            const product = state.find(product => product.id === product_id)
            if(product && product.quantity > 0){
                product.quantity--;
            }
        }
    }
})

export const selectProducts = () => {return products};
export const {incrementQuantity, decrementQuantity} = ProductSlice.actions;

export default ProductSlice.reducer