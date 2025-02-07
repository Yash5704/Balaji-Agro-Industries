import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styled from "styled-components";
// import logo from '../Photos/BALAJI 3 (1).png'

const StyledText = styled.div`font-family: "Bodoni Moda", serif;`;

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <>
    <StyledText>
    <div>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <span>BALAJI</span>
          <p>AGRO INDUSTRIES</p>
          {/* <img src={logo} alt="" /> */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate("/Home")}>
          HOME
          </button>

          <button className="nav-link" onClick={() => navigate("/Products")}>
          PRODUCTS
          </button>

          <button className="nav-link" onClick={() => navigate("/About")}>
          ABOUT
          </button>
          
          <button className="nav-link" onClick={() => navigate("/Contact")}>
          CONTACT US
          </button>

        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu">
          <input type="checkbox" id="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
          <label htmlFor="checkbox">
            <i className="icon">
              <span className="top" id="one"></span>
              <span className="mid"></span>
              <span className="top" id="two"></span>
            </i>
          </label>

          {/* Dropdown Menu (Conditional Rendering) */}
          {isOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-link" onClick={() => navigate("/Home")}>
              HOME
              </button>

              <button className="dropdown-link" onClick={() => navigate("/Products")}>
              PRODUCTS
              </button>

              <button className="dropdown-link" onClick={() => navigate("/About")}>
              ABOUT
              </button>
              <button className="dropdown-link" onClick={() => navigate("/Contact")}>
                CONTACT US
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    
      {/* <div style={{display:"inline-table",width:"15%",height:"15%",position:"absolute",backgroundColor:"#1b262c",color:"white",padding:"10px 20px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",marginTop:"90px",borderRadius:"5px",marginLeft:"70%"}}>
        <ul>
          <button onClick={() => navigate("/fruits")} >Fruits</button>
          <li><button>Vegetables</button></li>
          <li><button >Spices</button></li>
          <li><button>Cereal & Pulses</button></li>
        </ul>
      </div> */}
      
    </StyledText>
    </>
  )
}

export default Navbar;
