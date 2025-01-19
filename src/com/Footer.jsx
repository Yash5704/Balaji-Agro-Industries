import React, { useState } from "react";
import styled from 'styled-components';

const StyledText = styled.div`
  font-family: 'Bodoni Moda', serif;
`;

// Footer Component
function Footer() {
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
  };

  return (
    <StyledText>

      <div
        id="contactUs" // The id to which we will scroll
        className="footer"
        style={{
          backgroundColor: "#f4f4f4",
          padding: "40px",
          borderTop: "1px solid #ddd",
          backgroundColor: "#9AA6B2"  // Ensures responsiveness
        }}
      >
        {/* Left Section with Company Info */}
        <div
          className="left"
          style={{
            width: "45%",
            maxWidth: "500px",
            marginBottom: "20px", // Adds margin to bottom for spacing
          }}
        >
          <h3 style={{ color: "#333", fontWeight: "bold" }}>
            Balaji Agro Industries
          </h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Shop no.4, Dhangdhra Road APMC (Agricultural Produce Market Committee), Halvad, Gujarat, 363330
          </p>

          <p>📞 : +91 9913885609, 9825314030</p>
          <p>✉️ : balajiagroind2015@gmail.com</p>
        </div>

        {/* Right Section with Registration Form */}
        <div
          className="right"
          style={{
            width: "45%",
            maxWidth: "500px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px", // Adds margin to bottom for spacing
          }}
          >
          <h2 style={{ fontSize: 'auto', color: "#333", marginBottom: "20px" }}>
            Contact US
          </h2>
          <form onSubmit={handleSubmit} className="form" style={{ display: "flex", flexDirection: "column" }}>

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
        </div>
      </div>
    </StyledText>
  );
}

export default Footer;
