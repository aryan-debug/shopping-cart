import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./reducers/ProductSlice"

export default configureStore({
    reducer: {
        products: productReducer
    }
})