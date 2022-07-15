import Header from "./components/Header";
import "./static/styles/style.scss";
import image from "../src/static/images/homepage_watch.png"
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <div id = "homepage">
        <div className="image-bg" />
        <Header className = "default"/>
        <div id = "blur-bg">
          <img src={image} alt = "apple watch" id = "homepage-img"></img>
          <h1>Buy <br/> Now</h1>
          <Link to = "/shop"><button>Click Here</button></Link>
        </div>
    </div>
  );
}

export default Homepage;