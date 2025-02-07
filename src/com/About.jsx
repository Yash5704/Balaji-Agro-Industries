import React from 'react';
import Navbar from "./Nevbar.jsx";
import Footer from "./Footer.jsx";
import './About.css';
import styled from "styled-components";
import { Fade, Slide, Zoom } from 'react-reveal';

import Treckter from "../Photos/trector/photo_2024-06-09_11.35.51.jpg";
import who from '../Photos/trector/A-Guide-to-Utilizing-Bulk-Bags-in-Agriculture-1024x768.png';
import why from '../Photos/trector/221918_shree-tirupati-balajee-image-__w660__.jpg';

const StyledText = styled.div`font-family: "Bodoni Moda", serif;`;

function About() {

  return (
    <>
    <StyledText>
    <Navbar/>

        <div className="AboutUs">

            <Slide left> <div className='AboutFrst'>
                <Slide left><section className='AboutHead'>
                    <h1>About Us</h1> 
                </section> </Slide>
            </div></Slide>
            
            <div className="AboutSec">

                <section className='AboutLeft'>
                    <Slide left duration={500} > <h1>Welcome to Balaji Agro Industries</h1> </Slide>
                    <br />
                    <Slide right duration={500}> <h1>We bring selected goods to you…</h1> </Slide>
                    <br />
                    <Slide left duration={500}>  <p>Balaji Agro Industries is a team rooted to farmer’s background. Talking about farmers, they are the backbone of India and majority of the world rely on the farming industry of the country.</p> </Slide>
                </section>

                <section className='AboutRight'>
                    <Fade duration={2000} ><img src={Treckter} alt="Trector" /> </Fade>
                </section>

            </div>

            

            <div className="Aboutthrd">
                
                <div className='Aboutthrdhead' style={{backgroundColor:"#D9EAFD"}}>
                    <Zoom duration={2000} ><h1>Who We Are?</h1> </Zoom> 
                </div>

                <div className='Aboutthrdone'>
                    
                    <Fade ><img src={who} alt="who" /> </Fade>
                    
                    <Slide right duration={500}> 
                    <p>
                        At Balaji Agro Industries, we are committed to providing top-quality agricultural products and solutions to farmers, traders, and businesses. Located in the heart of the APMC market, we specialize in premium agro products, fertilizers, seeds, pesticides, and farm essentials that help enhance productivity and yield.
                            
                        With years of experience in the agro industry, we understand the needs of modern farming and ensure that our customers receive only the best quality products at competitive prices. Our team is dedicated to offering expert guidance, ensuring farmers and businesses make informed decisions for a prosperous agricultural future.
                            
                        At Balaji Agro Industries, we believe in trust, quality, and innovation—supporting the agricultural community with excellence and reliability.
                    </p>
                    </Slide>
                </div>

                <div className='Aboutthrdhead' style={{backgroundColor:"#D9EAFD"}}>
                
                    <Zoom duration={2000} ><h1>Why Choose Us?</h1> </Zoom>
                    
                </div>
                
                <div className='Aboutthrdtwo'>
                    <Slide left duration={500}>
                    <p>
                    → Quality You Can Trust :– We source only the best products for maximum farm productivity. <br />
                    → Customer-Centric Approach :– We prioritize our customers’ needs and offer expert guidance. <br />
                    → Competitive Pricing :- Fair prices for high-quality agricultural solutions. <br />
                    → Wide Product Range :– Everything a farmer needs, all under one roof. <br />
                    → At Balaji Agro Industries, we don’t just sell; we build relationships with farmers and businesses, supporting them in their growth journey. <br />
                        📍 Visit us at APMC Market to experience quality and service like never before!
                    </p>
                    </Slide>
                        
                    <Fade duration={2000} ><img src={why} alt="who" style={{borderRadius: "100px 0px 100px 0px"}} /> </Fade>
                </div>
            </div>


        </div>
        

    <Footer/>
    </StyledText>
    
    </>
 )
}

export default About;