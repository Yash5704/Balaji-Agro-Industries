import js from "@eslint/js";
import React, { useState } from "react";
import styled from 'styled-components';
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const StyledText = styled.div`font-family: 'Bodoni Moda', serif;`;

// Footer Component
function Footer() {
  
  return (

    <StyledText>
      <div className="footercontainer">
        <section  id="footer"  className="footer" >
          <div className="left">
              <h2>Balaji Agro Industries</h2>
              <p>'Balaji Agro Industries' is a team rooted to farmer’s background. The founders started the company by taking inspiration from their father who is a farmer.</p>
          </div>

          <div className="Profooter">
            <h2>Product</h2>
            <p>
            Fruits <br />
            Vegetables <br />
            Spices <br />
            Cereal and Pulses
            </p>
          </div>

          <div className="Confooter">
            <h2>Contact</h2>
            <p>
              <a href="tel:+919913885609"><IoCallOutline />: 9913885609  </a>
              <br/> 
              <a href="tel:+919825314030"><IoCallOutline /> : 9825314030 </a>
              <br/>
              <a href="mailto:balajiagroind2015@gmail.com"><CiMail /> : balajiagroind2015@gmail.com</a>
              <br />
              
                <span style={{display:"flex"}}>
                <a href=""><ImFacebook2 /></a> 
                <br />
                <a href="https://www.instagram.com/balajiagroind2015?igsh=MXJiYW01bmZubmlvbg=="><SiInstagram /></a> 
                <br />
                <a href="https://www.linkedin.com/in/balaji-agroind-6156bb195"><FaLinkedinIn /></a>
                </span>
            </p>  
          </div>

          <div className="Locfooter">
            <h2>Location</h2>
            <p>
                  Shop no.4, Dhangdhra Road APMC (Agricultural Produce Market Committee), Halvad, Gujarat, 363330
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117512.44102836844!2d71.05207256934693!3d23.014085000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395bd5340c040881%3A0xe93cbce8c860535d!2sBalaji%20Agro%20Products!5e0!3m2!1sen!2sin!4v1738185702220!5m2!1sen!2sin"></iframe>
          </div>
        </section>

        <section>
          <div className="copyright">
            <p><span>© 2025 Balaji Agro Industries All Rights Reserved</span></p>
          </div>
        </section>

      </div>
    </StyledText>
  );
}

export default Footer;
