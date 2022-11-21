import React from 'react'
import '../CSS/Cards.css';
import img1 from "../images/customers@2x.png";
import img2 from "../images/products@2x.png";
import img3 from "../images/sales@2x.png";
import img4 from "../images/refunds@2x.png";
export default function Cards() {
  return (
    <>
      <div class="flex-container">
        <div id='box'>
        {/* <div id='cus'></div> */}
          <div id='content'> <span id='num'>39,354</span> <span id='per'>-4%</span> <img src={img1} alt='cus'/></div>
          <div id='dep'>Customers</div>
          
        </div>
        <div id='box'>
        <div id='content'> <span id='num'>4,396</span> <span id='per'>+23%</span> <img src={img2} alt='prod'/> </div>
          <div id='dep'>Products</div>
          {/* <div id='prod'></div> */}
        </div>
        <div id='box'>
        <div id='content'> <span id='num'>423,39</span> <span id='per'>+38%</span> <img src={img3} alt='sale'/> </div>
          <div id='dep'>Sales</div>
          {/* <div id='sale'></div> */}
        </div>
        <div id='box'>
        <div id='content'> <span id='num'>39,354</span> <span id='per'>-4%</span> <img src={img4} alt='ref'/> </div>
          <div id='dep'>Refunds</div>
          {/* <div id='ref'></div> */}
        </div>
      </div>
    </>
  )
}
