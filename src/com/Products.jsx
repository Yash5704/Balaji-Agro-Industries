import React from 'react';
import Navbar from "./Nevbar.jsx";
import Footer from "./Footer.jsx";
import './Products.css';
import styled from "styled-components";
import { Fade, Slide, Zoom } from 'react-reveal';

import mango from "../Photos/producct/Fruits/mango.jpg"
import banana from "../Photos/producct/Fruits/banana1.jpg"
import muskmelon from "../Photos/producct/Fruits/muskmelon.jpeg"
import papaya from "../Photos/producct/Fruits/Papaya1.jpg"
import pomegranate from "../Photos/producct/Fruits/Untitled-2-1.png"
import watermelon from "../Photos/producct/Fruits/watermelon.jpg"
import grapes from "../Photos/producct/Fruits/grapes.jpg"

import blackPepper from "../Photos/producct/Spices/black-pepper-.jpg"
import gingerPowder from "../Photos/producct/Spices/dry_ginger_powder_1.jpg"
import turmeric from "../Photos/producct/Spices/TURMERIC-Slides-V3_2-1-1.jpg"
import chilli from "../Photos/producct/Spices/indian-chilly-powder-500x500-1.jpg"
import cumin from "../Photos/producct/Spices/Cumin-Powder-2-3.jpg"
import coriander from "../Photos/producct/Spices/Coriander.jpg"
import Cloves from "../Photos/producct/Spices/Cloves-Laving.jpg"
import ZillisRedOnionPowder from "../Photos/producct/Spices/Zillis-Red-Onion-Powder.jpg"

import amla from "../Photos/producct/Vegetables/Amla-1024x1024-1.jpg"
import beat from  "../Photos/producct/Vegetables/Beat-Root.webp"
import Cluster from "../Photos/producct/Vegetables/Cluster-Beans-1024x1024-1.webp"
import drumstick from "../Photos/producct/Vegetables/drumstick-1.jpg"
import garlic from "../Photos/producct/Vegetables/garlic.jpg"
import ginger from "../Photos/producct/Vegetables/ginger.jpg"
import greenpeas from "../Photos/producct/Vegetables/Green-Peas-1024x1024-1.jpg"
import GreenChilli from "../Photos/producct/Vegetables/GreenChilli_600x.jpg"
import ivy from "../Photos/producct/Vegetables/Ivy-Gourd-1024x1024-1.jpg"
import Karela from "../Photos/producct/Vegetables/Karela-Bitter-Gourd-Bangalore-1024x1024-1.jpeg"
import lemon from "../Photos/producct/Vegetables/lemon.jpg"
import onion from "../Photos/producct/Vegetables/onion-2.jpg"
import okra from "../Photos/producct/Vegetables/okra.jpg"
import potato from "../Photos/producct/Vegetables/RED-POTATO.webp"
import tomtomato from "../Photos/producct/Vegetables/tomato-1024x1024-1.webp"

import BlackSesae from "../Photos/producct/cereal and pulses/Black-sesame.jpg"
import chickpea from "../Photos/producct/cereal and pulses/chick-pea.jpg"
import CorianderSeeds from "../Photos/producct/cereal and pulses/Coriander-Seeds.jpg"
import desichana from "../Photos/producct/cereal and pulses/desichana-1024x1024-1.webp"
import FennelSeeds from "../Photos/producct/cereal and pulses/Fennel_Seeds-1.jpg"
import fenugreek from "../Photos/producct/cereal and pulses/fenugreek-steven-foster-square.jpg"
import greengsam from "../Photos/producct/cereal and pulses/green-gsam-spilit-1.jpg"
import groundnut from "../Photos/producct/cereal and pulses/groundnut.jpg"
import jeera from "../Photos/producct/cereal and pulses/jeera-whole-1.jpg"
import MethiSeed from "../Photos/producct/cereal and pulses/Methi-Seed.jpg"
import millet from "../Photos/producct/cereal and pulses/millet.jpg"
import mungBean from "../Photos/producct/cereal and pulses/Mung-beans.jpg"
import mustard from "../Photos/producct/cereal and pulses/mustard-1.jpg"
import peanuts from "../Photos/producct/cereal and pulses/peanuts.jpg"
import Ragi from "../Photos/producct/cereal and pulses/Ragi.webp"
import sesame from "../Photos/producct/cereal and pulses/sesame-1.jpg"
import soybean from "../Photos/producct/cereal and pulses/soybean.jpg"
import Turmeric from "../Photos/producct/cereal and pulses/Turmeric-Root-Raw-1024x1024-1.jpg"
import wholeblack from "../Photos/producct/cereal and pulses/whole-black.jpg"
import yellowPeas from "../Photos/producct/cereal and pulses/yellow-peas-split-hd.png"

const StyledText = styled.div`font-family: "Bodoni Moda", serif;`;

function Product(){

  return (
    <>
    <StyledText>
      <Navbar />
      <div className="products">

        <div className='cerealpulses'>
          <Fade top duration={2000} ><h1 id='lbl'>Variety Of Cereal & Pulses</h1></Fade>
          <div>
            
            <div className="cerealpulsesImg">
            <img src={jeera}/>
            <img src={FennelSeeds}/>
            <img src={CorianderSeeds}/>
            <img src={fenugreek}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span>Cumin seeds</span>
            <span>Fennel Sesame</span>
            <span>Coriander Seeds</span>
            <span>Fenugreek</span>
            </div>
            </Zoom>
            
            <div className="cerealpulsesImg">
            <img src={mustard}/>
            <img src={BlackSesae}/> 
            <img src={sesame}/>
            <img src={wholeblack}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span>Rye(Mustard)</span>
            <span>Black Sesame</span>
            <span>Sesame</span>
            <span>Whole black</span>
            </div>
            </Zoom>

            <div className="cerealpulsesImg">
            <img src={groundnut}/>
            <img src={chickpea}/> 
            <img src={desichana}/>
            <img src={millet}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span> Groundnut</span>
            <span>Chick Pease</span>
            <span>Desi Chana</span>
            <span>Millet</span>
            </div>
            </Zoom>

            <div className="cerealpulsesImg">
            <img src={mungBean}/>
            <img src={Ragi}/>
            <img src={soybean}/>\
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span>Mung</span>
            <span>Ragi</span>
            <span>Soyabeans</span>
            
            </div>
            </Zoom>
          </div>
        </div>  

        <div className='Spices'>
          <Fade top duration={2000} ><h1 id='lbl'>Variety Of Spices</h1></Fade>
          <div>
            <div className="SpicesImg">
            <img src={cumin}/>
              <img src={blackPepper}/>
              <img src={gingerPowder}/>
              <img src={turmeric}/>
            </div>
          <Zoom duration={2000}>
            <div className='contain'>
              <span>Cumin</span>
              <span>Black Pepper</span>
              <span>Ginger Powder</span>
              <span>Turmeric</span>
            </div>
            </Zoom>
            
            <div className="SpicesImg">
              <img src={chilli}/>
              <img src={coriander}/>
              <img src={Cloves}/>
              
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
              <span>Chilli</span>
              <span>Coriander</span>
              <span>Cloves</span>
            </div>
          </Zoom>
          </div>
        </div>  

        <div className='Fruits'>
          <Fade top duration={2000} ><h1 id='lbl'>Variety Of Fruits</h1></Fade>
          <div>
            <div className="FruitsImg">
            <img src={mango}/>
            <img src={banana}/>
            <img src={muskmelon}/>
            <img src={papaya}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span>Mango</span>
            <span>Banana</span>
            <span>Muskmelon</span>
            <span>Papaya</span>
            </div>
            </Zoom>

            
            <div className="FruitsImg">
            <img src={pomegranate}/>
            <img src={watermelon}/>
            <img src={grapes}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
            <span>Pomegranate</span>
            <span>Watermelon</span>
            <span>Grapes</span>
            </div>
          </Zoom>
          </div>
        </div>  


        <div className='Vegetables'>
          <Fade top duration={2000} ><h1 id='lbl'>Variety Of Vegetables</h1></Fade>
          
          <div>
            <div className="VegetablesImg">
              <img src={amla}/>
              <img src={beat}/>
              <img src={Cluster}/>
              <img src={drumstick}/>
            </div>
          <Zoom duration={2000}>
            <div className='contain'>
              <span>Amla</span>
              <span>Beat</span>
              <span>Cluster</span>
              <span>Drumstick</span>
            </div>
            </Zoom>
            
            <div className="VegetablesImg">
              <img src={garlic}/>
              <img src={ginger}/>
              <img src={greenpeas}/>
              <img src={GreenChilli}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
              <span>Garlic</span>
              <span>Ginger</span>
              <span>Green Peas</span>
              <span>Green Chilli</span>
            </div>
            </Zoom>

            <div className="VegetablesImg">
              <img src={ivy}/>
              <img src={Karela}/>
              <img src={lemon}/>
              <img src={onion}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
              <span>Ivy</span>
              <span>Karela</span>
              <span>Lemon</span>
              <span>Onion</span>
            </div>
            </Zoom>

            <div className="VegetablesImg">
              <img src={okra}/>
              <img src={potato}/>
              <img src={tomtomato}/>
            </div>
            <Zoom duration={2000}>
            <div className='contain'>
              <span>Okra</span>
              <span>Potato</span>
              <span>Tomato</span>
            </div>
          </Zoom>
          </div>
        </div>

      </div>

      <Footer />
    </StyledText>
    </>
  )
}

export default Product;