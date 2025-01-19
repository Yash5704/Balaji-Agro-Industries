import React, { useState, useEffect } from "react";
import Aranda from "../Photos/producct/Screenshot 2024-12-31 at 2.46.26 PM.png";
import Til from "../Photos/producct/Tal.png";
import CorianderSeeds from "../Photos/producct/2560px-Coriander_Seeds.jpg";
import Cotton from "../Photos/producct/AdobeStock_136921602.jpeg";
import CuminSeeds from "../Photos/producct/Cumin Seeds.jpeg";
import variyali from "../Photos/producct/variyali .jpeg";
import temp1 from "../Photos/producct/Untitled design.png";
import temp6 from "../Photos/backgrond/jpeg6.jpeg";
import temp7 from "../Photos/backgrond/jpeg7.jpeg";
import temp8 from "../Photos/backgrond/jpeg8.jpeg";
import temp12 from "../Photos/backgrond/jpeg12.jpeg";
import temp13 from "../Photos/producct/Untitled design (1).png";
import about from "../Photos/backgrond/Export_1.jpg";
import styled from "styled-components";

const StyledText = styled.div`
  font-family: "Bodoni Moda", serif;
`;

function Con() {
  // Image collections
  const myCollection = [
    {
      label: "Aranda",
      imgPath: Aranda,
      name: "Castor Seeds",
      text: "Castor seeds are the source of castor oil, a versatile and highly valuable natural product. Castor oil is widely used in industries such as cosmetics, pharmaceuticals, and manufacturing. Known for its potent moisturizing properties, castor oil is a staple in skincare and hair care products, providing nourishment and promoting hair growth. It also serves as a base ingredient in soaps, lipsticks, and lotions. In the pharmaceutical sector, castor oil is employed as a natural laxative and is a component in certain medications and ointments.",
    },

    {
      label: "Til",
      imgPath: Til,
      name: "Sesame Seeds",
      text: "Sesame seeds are tiny, oil-rich seeds that have been cultivated for thousands of years. They are known for their nutty flavor and are commonly used in baking, cooking, and garnishing dishes. These seeds are a rich source of healthy fats, protein, vitamins, and minerals, particularly calcium and magnesium. Sesame seeds are often processed to extract sesame oil, which is a popular cooking oil due to its distinctive taste and health benefits. In addition to their culinary uses, sesame seeds are used in traditional medicine to support bone health, improve skin, and promote heart health.",
    },

    {
      label: "Coriander Seeds",
      imgPath: CorianderSeeds,
      name: "Coriander Seeds",
      text: "derived from the coriander plant, are a cornerstone in global cuisines, adding a warm, citrusy flavor to dishes. Ground or whole, they are used in spice blends, curries, marinades, and baking. Nutritionally, coriander seeds are rich in dietary fiber, calcium, and iron, promoting digestive health and strengthening bones. They also contain essential oils with antimicrobial properties, making them beneficial in traditional medicine for treating colds, boosting immunity, and improving gut health. Coriander seeds are a natural remedy for managing blood sugar levels and improving cholesterol profiles, thus supporting cardiovascular health",
    },

    {
      label: "Cotton",
      imgPath: Cotton,
      name: "Cotton",
      text: "Cotton stands as one of the most significant natural fibers globally, primarily fueling the textile industry. Cotton fibers are spun into yarn and woven into fabrics like denim, muslin, and calico, renowned for their breathability, durability, and comfort. Beyond textiles, cotton is essential in the medical field, where absorbent cotton is used in surgical dressings and wound care. Its seeds yield cottonseed oil, a widely used cooking oil and ingredient in processed foods. Cottonseed meal, a byproduct, serves as protein-rich livestock feed. Environmentally, cotton holds an edge over synthetic fibers due to its biodegradability, helping reduce ecological footprints when sustainably cultivated.",
    },

    {
      label: "Cumin Seeds",
      imgPath: CuminSeeds,
      name: "Cumin Seeds",
      text: "Cumin seeds are celebrated for their robust, earthy flavor, making them a staple in Indian, Middle Eastern, and Latin American cuisines. Used in soups, stews, spice rubs, and curries, cumin’s aromatic essence elevates culinary creations. Beyond flavor, cumin seeds are a nutritional boon, rich in iron and antioxidants. They aid digestion, alleviate bloating, and are often used in traditional medicine to treat respiratory disorders and improve metabolism. Research suggests that cumin may also enhance memory and support weight management, underscoring its health benefits.",
    },

    {
      label: "variyali",
      imgPath: variyali,
      name: "Fennel Seeds",
      text: "Fennel seeds with their sweet, licorice-like flavor, are widely used as a spice and digestive aid. Commonly consumed after meals in many cultures, fennel seeds freshen breath and promote digestion. They are a versatile ingredient in teas, baked goods, and spice blends, lending a subtle sweetness to recipes. Nutritionally, fennel seeds are rich in dietary fiber, vitamins, and minerals like potassium and magnesium, supporting heart health and reducing blood pressure. Traditional medicine attributes fennel seeds with anti-inflammatory and diuretic properties, making them useful for alleviating menstrual discomfort and promoting detoxification.",
    },
  ];

  const myhome = [
    {
      label: "temp1",
      imgPath: temp1,
      name: "BALAJI AGRO INDUSTRIES",
      text: "WELCOME TO Balaji Agro Manufacturing! We take pride in producing high-quality agricultural products for our local community. With a strong commitment to excellence and sustainability.",
    },
    {
      label: "temp13",
      imgPath: temp13,
      name: "BALAJI AGRO INDUSTRIES",
      text: "Experience the essence of pure, farm-fresh goodness Our state-of-the-art facilities ensure that the journey from field to fork is seamless, guaranteeing the retention of maximum flavor, nutrients, and freshness. We invite you to savor the difference that our commitment to quality makes.",
    },
  ];

  // Separate indexes for each slideshow
  const [homeIndex, setHomeIndex] = useState(0);
  const [collectionIndex, setCollectionIndex] = useState(0);

  // Automatic transitions
  useEffect(() => {
    const homeTimeout = setTimeout(() => {
      setHomeIndex((prev) => (prev + 1) % myhome.length);
    }, 3000);

    const collectionTimeout = setTimeout(() => {
      setCollectionIndex((prev) => (prev + 1) % myCollection.length);
    }, 3000);

    return () => {
      clearTimeout(homeTimeout);
      clearTimeout(collectionTimeout);
    };
  }, [homeIndex, collectionIndex]);

  // Manual navigation
  const goToNext = (type) => {
    if (type == "home") {
      setCollectionIndex((prev) => (prev + 1) % myCollection.length);
    } else {
      setHomeIndex((prev) => (prev + 1) % myhome.length);
    }
  };

  const goToPrev = (type) => {
    if (type == "home") {
      setCollectionIndex(
        (prev) => (prev - 1 + myCollection.length) % myCollection.length
      );
    } else {
      setHomeIndex((prev) => (prev - 1 + myhome.length) % myhome.length);
    }
  };

  return (
    <>
      <StyledText>
        {/* home */}
        <div
          id="Home"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            width: "100%",
            height: "auto",
            boxSizing: "border-box",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="homeimg"
            style={{
              position: "relative",
              width: "100%",
              height: "80vh",
              transform: "",
            }}
          >
            <img
              src={myhome[homeIndex].imgPath}
              alt={myhome[homeIndex].label}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                transition: "opacity 0.5s ease-in-out",
                opacity: "0.6",
              }}
            />

            <div
              style={{
                marginTop: "20px",
                flexDirection: "column",
                position: "absolute",
                top: "35%",
                alignItems: "end",
                height: "50%",
                width: "50%",
                right: "25%",
              }}
            >
              <div>
                <div
                  style={{
                    color: "black",
                    fontSize: "20px",
                    textAlign: "center",
                    right: "25%",
                  }}
                >
                  <h1 id="head2">
                    {myhome[homeIndex].name}
                  </h1>
                  <p id ='headalt'>
                    {myhome[homeIndex].text}
                  </p>
                </div>
              </div>

              <div id='homebuttons' style={{ alignItems: "center" }}>
                
                <button class="Hbtn" onClick={goToPrev} style={buttonStyle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                  </svg>
                </button>

                <button
                  class="Hbtn"
                  onClick={goToNext}
                  type="home"
                  style={buttonStyle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </button>
              </div>
            
            </div>
          </div>
        </div>

        {/* Gap between */}
        {/* <div style={{ padding: "50px" }} /> */}

        {/* Poductcs */}
        <div
          id="Product"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            width: "100%",
            height: "auto",
            boxSizing: "border-box",
          }}
        >
          <div style={{ backgroundColor: "#D9EAFD", padding: "10px" }}>
            <div style={{ padding: "10px", marginBottom: "20px",textAlign: "center",}}>
              <h2>Balaji Agro Industrice</h2>
              <h3>Brings To You Quality Products</h3>
            </div>

            <div class="productContainer" 
              style={{ width: "100%" }}>

              <div class="Productimgs" style={{maxWidth:"50%", height: "auto",overflow: "hidden"}} >
                <img
                  src={myCollection[collectionIndex].imgPath}
                  alt={myCollection[collectionIndex].label}
                  style={{ width: "100%", height: "auto" }}
                  onMouseOver={(e) => {e.target.style.zIndex.current = 10;}}
                />
              </div>

              <div class='productDetail' style={{maxWidth:"50%"}}>
                <h1>{myCollection[collectionIndex].name}</h1>
                <p>{myCollection[collectionIndex].text}</p>

                <div id="ProductButton" style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <button class='Pbtn' onClick={() => goToPrev("home")} style={buttonStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                    </svg>
                  </button>
                  <button class='Pbtn' onClick={() => goToNext("home")} style={buttonStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div style={{ padding: "50px" }} />
          </div>

          {/* About */}
          <div
            id="About"
            style={{
              maxWidth: "100%",
              width: "100%",
              backgroundColor: "#BCCCDC",
              padding: "50px",
              top: "10px",
              zIndex: 10,
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "24px",
                marginBottom: "20px",
                maxWidth: "100%",
                width: "100%",
              }}
            >
              About Us
            </h1>

            <div id="AboutContainer"
              style={{
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "start",
                  color: "black",
                  margin: "20px",
                  display: "flex",
                  textAlign: "justify",
                }}
              >
                Balaji Agro Industries is a family-owned business that has been
                operating since 2015. We are dedicated to providing high-quality
                agricultural products to our local community and beyond. Our
                commitment to excellence and sustainability drives us to produce
                the best in agro products. We take pride in our diverse range of
                offerings and are always looking for ways to improve and expand
                our product line.
                <br />
                <br />
                Experience the essence of pure, farm-fresh goodness Our
                state-of-the-art facilities ensure that the journey from field
                to fork is seamless, guaranteeing the retention of maximum
                flavor, nutrients, and freshness. We invite you to savor the
                difference that our commitment to quality makes
                <br />
                <br />
                We invite you to explore our website and learn more about our
                company and the products we offer. Thank you for choosing Balaji
                Agro Industries!
              </p>
              <img
                src={about}
                alt="About Us"
                style={{
                  margin: "10px",
                  height: "50%",
                  maxWidth: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </StyledText>
    </>
  );
}

// Inline styling for buttons
const buttonStyle = {
  backgroundColor: "gray",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  opacity: 0.8,
  margin: "12px",
};

export default Con;
