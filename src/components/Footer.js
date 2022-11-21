import React from 'react'
import '../CSS/Footer.css';
import img from '../images/graph1.png';
import img2 from '../images/graph2.png';
export default function Footer() {
  return (
    <>
      <div id='revenue'>
        Revenue
      </div>
      <div id='head-content-foot'>
      <br/>
        <div id='num'>
          $93,438 <button id='inc'>23%</button>
        </div>
        <div id='dep'>
          Budget
        </div>
        <br/>
        <div id='imgg'>
        <div id='num'>
          $48,438
        </div>
        <div id='dep'>
          Expense
          <br/>
          
          <img id='graph1' src={img}/>
          <img id='graph2' src={img2}/>
          </div>
        </div>
      </div>
    </>
  )
}
