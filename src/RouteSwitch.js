import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import Homepage from "./Homepage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Homepage/>}/>
                <Route path = "/shop" element = {<Shop />} />
            </Routes>
        </BrowserRouter>
    )
} 

export default RouteSwitch