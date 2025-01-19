import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../Photos/preloader/Screenshot 2025-01-02 at 11.52.43 AM copy.png";
import styled from "styled-components";

const StyledText = styled.div`
  font-family: "Bodoni Moda", serif;
`;

function Nevbar() {
  return (
    <StyledText>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            textAlign: "center",
            position: "fixed",
            width: "100vw",
            height: "100px",
            top: "0px",
            left: "0px",
            zIndex: 1,
            boxShadow: "rgba(0, 0, 0, 0.08) 5px 8px 14px 7px",
            background: "#F8FAFC",
            transition: "top 0.6s",
          }}
        >
          <Navbar.Brand href="#">
            <img id="logo"
              src={logo}
              alt="Balaji Agro Industries Logo" // Alt text for accessibility
              style={{ width: "100%", height: "auto",zoom:"normal" }} // Adjust the size as needed
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" >
            <span class="navbar-toggler-icon"></span>
            <div className="navtog" style={{display:"none"}}> 
            <Link
                to="Home" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                HOME
              </Link>

              <Link
                to="Product" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                PRODUCT
              </Link>

              <Link
                to="About" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                ABOUT
              </Link>

              <Link
                to="contactUs" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                CONTACT US
              </Link>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll" style={{maxHeight: "100px",width:'30%',}}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                // marginLeft:"850px",
                background: "#F8FAFC",
              }}
              navbarScroll
            >
              {/* Use Link from react-scroll for smooth scrolling */}
              <Link
                to="Home" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                HOME
              </Link>

              <Link
                to="Product" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                PRODUCT
              </Link>

              <Link
                to="About" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                ABOUT
              </Link>

              <Link
                to="contactUs" // Target ID of Footer component
                smooth={true} // Enable smooth scrolling
                duration={75} // Scroll duration in ms
                offset={-70} // Adjust if navbar covers part of the target element
                className="nav-link" // For styling consistency
              >
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledText>
  );
}

export default Nevbar;
