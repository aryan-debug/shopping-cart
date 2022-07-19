import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import ProductView from "./components/ProductView";
import Shop from "./components/Shop";
import Homepage from "./Homepage";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element = {<Homepage/>}/>
                <Route path = "/shop" element = {<Shop />} />
                <Route path = "/shop/:id" element = {<ProductView />} />
                <Route path = "/cart" element = {<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default RouteSwitch