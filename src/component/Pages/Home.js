import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import './styles.css'
import Banner from "../Banner";
import Cards from "../Cards";
import ContactUs from "../ContactUs";
import ProductsCTA from "../ProductsCTA";
export const Home = () => {
  
  return (
    <div>
      <div className="section" style={{marginTop: "-80px"}}>
        <Banner/>
      </div>
      <div className="section">
        <Cards/>
      </div>
      <div className="section">
        <ProductsCTA/>
      </div>
      <div className="section">
        <ContactUs/>
      </div>
    </div>
  );
};
