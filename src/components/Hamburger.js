import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import me from '../images/me2.jpg'
import ImageModal from "./ImageModal"


import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import georgetown from "../images/cayman.jpg";
import jacksonville from "../images/jacksonville.jpg";
import newyork from "../images/newyork.webp";

const cities = [
  { name: "Cayman Islands", image: georgetown },
  { name: "New York", image: newyork },
  { name: "Jacksonville Beach", image: jacksonville }
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <svg ref={el => (reveal1 = el)} style={{display:"block"}} className='menu-secondary-background-color'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(123, 197, 231)" fill-opacity="5" d="M0,64L21.8,85.3C43.6,107,87,149,131,176C174.5,203,218,213,262,213.3C305.5,213,349,203,393,176C436.4,149,480,107,524,122.7C567.3,139,611,213,655,256C698.2,299,742,309,785,293.3C829.1,277,873,235,916,208C960,181,1004,171,1047,170.7C1090.9,171,1135,181,1178,192C1221.8,203,1265,213,1309,202.7C1352.7,192,1396,160,1418,144L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div ref={el => (cityBackground = el)} className='menu-city-background'>
      </div>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/projects'>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/aboutme'>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact'>
                      Contact 
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='egg-wrapper'>
                <img src={me} className="egg"/>
              </div>
              <div className='locations'>
                Locations:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
       </div>
  )
}

export default Hamburger;
