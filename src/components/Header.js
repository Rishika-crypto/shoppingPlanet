import React from 'react'
// import img from "../images/Banner-web.png";
import '../CSS/Header.css';
export default function Header() {
  return (
    <>
    <br/>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <div class="d-block w-100" id='banner' alt="banner">
              </div> */}
              <div id='head-content'>
              <p>
                  <div>
                    <div id='earnings'>Earnings</div> 
                    <div id='money'>$14 000,00</div>
                    <div>
                      <button id='download-btn'>Download</button>
                      </div>
                  </div> 
                  {/* <div id='money'> */}
                  {/* </div> */}
                  <div>
                    
                  </div>
                </p>
                <div id='banner'></div>
              </div>
            </div>
        </div>
      </div>
      <br/>
    </>
  )
}
