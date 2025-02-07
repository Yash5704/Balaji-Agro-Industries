import React, { useState } from 'react';
import Navbar from "./Nevbar.jsx";
import Swal from 'sweetalert2'
import Footer from "./Footer.jsx";
import styled from "styled-components";
import { Zoom,Fade } from 'react-reveal';

function ContactUs(){

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "6bb0b7ee-8d85-4b18-bda9-3c2c5b7ad418");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "We received your Message!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: "swal-button-success",
          buttonsStyling: false,
          background: "#007bff",
          color: "white",
          timer: 2000,
        });
    }
  
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const StyledText = styled.div`
  font-family: "Bodoni Moda", serif;`;

    return (
      <>
        <StyledText>
        <Navbar />
        
        <div
          className="right"
          style={{
            maxWidth: "500px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
          <Fade top duration={1000}>
          <h1 style={{ fontSize: 'auto', color: "#333", marginBottom: "20px" }}>
            Contact US
          </h1></Fade>

          <Zoom duration={1000}>
          <form onSubmit={onSubmit} className="form" style={{ display: "flex", flexDirection: "column" }}>

            {/* First Name */}
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="firstName"
                
              >
              First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                
              />
            </div>

            {/* Last Name */}
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                
              />
            </div>

            {/* Email */}
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="mobile"
              >
                Mobile:
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Massage */}
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="massage"
              >
                Massage:
              </label>
              <textarea
                style={{
                  width: "100%",
                  height: "150px",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  border: "1px solid #0c0000",
                  borderStyle: "dashed",
                  margin: "auto",
                }}
                id="massage"
                name="massage"
                value={formData.massage}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                backgroundColor: "#3f51b5",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2c387e")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3f51b5")}
            >
              Submit
            </button>
          </form>
          </Zoom>

        </div>
        <Footer />

        </StyledText>
      </>
    )
}

export default ContactUs;