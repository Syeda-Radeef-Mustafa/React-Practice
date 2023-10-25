import React, { useEffect, useState } from 'react';
import image5 from './images/image5.png';
import './index.css';

function Divs() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPositionToShowSections = 200;

      if (window.scrollY > scrollPositionToShowSections) {
        setShowSections(true);
      } else {
        setShowSections(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="div-with-sections">
      <div className={`section ${showSections ? 'show' : ''}`}>
        <div className="inner-section1">
          <div className="text-column">
            <b>
              <h3>NEW ARRIVALS</h3>
            </b>
            <h1>PLACE YOUR TITLE HERE</h1>
            <button>
              <b>SHOP NOW</b> <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="image-column">
            <img src={image5} alt="Image 1" />
          </div>
        </div>
        <div className="inner-section2">
          <div className="text-column">
            <b>
              <h3>NEW ARRIVALS</h3>
            </b>
            <h1>PLACE YOUR TITLE HERE</h1>
            <button>
              <b>SHOP NOW</b> <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="image-column">
            <img src={image5} alt="Image 2" />
          </div>
        </div>
      </div>
      <div className={`section ${showSections ? 'show' : ''}`}>
        <div className="section3">
        {/* <div className="special-offer">
            <p><b>50%<br/>OFF</b></p>
          </div> */}
          <div className="text-column1">
            <b>
              <h3>NEW ARRIVALS</h3>
            </b>
            <h1>PLACE YOUR TITLE HERE</h1>
            <button>
              <b>SHOP NOW</b> <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="image-column1">
            <img src={image5} alt="Image 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Divs;