import React from "react";
//import "./Hero.css";
import { Link } from "react-router-dom";


const Hero = () =>{
return (
<div className="hero">
<div className="d-flex align-items-center justify-content-between">
    
   <h2>Holiday Central</h2>
    <div className="d-none d-xl-flex algin-items-center">
    </div>
</div>
<div>
    <div className="btn btn-dark fw-bold ms-1"><Link to="/">Flights</Link></div>
    <div className="btn btn-primary fw-bold ms-1"><Link to="/searchingtickets">Hotels</Link></div>
    <div className="btn btn-primary fw-bold ms-1">Holiday Package</div>
</div>

</div>

);
};

export default Hero;