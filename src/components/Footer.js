import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="our-stores">
          <h4>Our stores</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu
          </p>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="posts"></div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>Terms and condition</li>
            <li>FAQ</li>
            <li>Payment</li>
            <li>Refunds</li>
            <li>Track Order</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="contact"></div>
      </div>
    </div>
  );
};

export default Footer;
