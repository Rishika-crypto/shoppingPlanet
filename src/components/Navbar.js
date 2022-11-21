import React from "react";
import '../CSS/Navbar.css';
import img from "../images/shopping-planet-logo@2x.png"
import img2 from "../images/cart.svg"
import img3 from "../images/message.png"
import img4 from "../images/bell-notification.svg"
import img5 from "../images/avatar.png"
import {Link} from "react-router-dom";
const Navbar=()=>{
  return(
  <>
       <nav style={{margin:'-10px -8px -4px -8px'}}>
      <div class="menu-icon">
        <span class="fas fa-bars"></span>
      </div>
      <Link to="/"><h1><img src={img} style={{height:'45px',width:'175px',marginLeft:'-100px'}} alt="img"/></h1></Link>

      <div class="nav-items">
      <li><Link class='link' to="/">Ecommerce</Link></li>
      <li><Link class='link' to="/employee">Employee</Link></li>
        <li><Link class='link' to="/lines">Lines</Link></li>
        {/* <li><Link class='link' to="/cart">Cart</Link></li>
        <li><Link class='link' to="/chat">Chat</Link></li>
        <li><Link class='link' to="/profile">Profile</Link></li> */}
      </div>
      
      <Link to="/cart"><h1><img src={img2} style={{height:'24px',width:'24px',marginRight:'30px'}} alt="img"/></h1></Link>
      <Link to="/chat"><h1><img src={img3} style={{height:'24px',width:'24px',marginRight:'30px'}} alt="img"/></h1></Link>
      <Link to="/notif"><h1><img src={img4} style={{height:'24px',width:'24px',marginRight:'30px'}} alt="img"/></h1></Link>
      <Link to="/profile"><h1><img src={img5} style={{height:'24px',width:'24px',marginRight:'30px'}} alt="img"/></h1></Link>
      {/* <form action="#"> 
        <input type="search" class="search-data" placeholder="Search" required/>
      </form> */}
    
    </nav>

      
    
  </>
  )
}

export default Navbar;