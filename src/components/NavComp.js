// import React, { Component } from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
// import {Routes, Route, BrowserRouter} from "react-router-dom";
// import { NavLink } from 'react-router-dom';

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
// import Employees from '../pages/Employees';
// import Ecommerce from '../pages/Ecommerce';

// export default class NavbarComp extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <div>

//                     <Navbar bg="dark" variant={"dark"} expand="lg">
//                         <NavbarBrand href="#">Navbar Demo Arjun Codes</NavbarBrand>
//                         <NavbarToggle aria-controls="navbarScroll" />
//                         <NavbarCollapse id="navbarScroll">
//                             <Nav
//                                 className="mr-auto my-2 my-lg-0"
//                                 style={{ maxHeight: '100px' }}
//                                 navbarScroll
//                             >
//                                 <NavLink as={Link} to="/ecommerce"><Employees/></NavLink>
//                                 <NavLink as={Link} to="/employees"><Ecommerce/></NavLink>
//                                 <NavLink as={Link} to="/lines"><Lines/></NavLink>

//                             </Nav>

//                         </NavbarCollapse>
//                     </Navbar>
//                 </div>
//                 <div>
//                     <Switch>
//                         <Route path="/about">
//                             <About />
//                         </Route>
//                         <Route path="/contact">
//                             <Contact />
//                         </Route>
//                         <Route path="/">
//                             <Home />
//                         </Route>
//                     </Switch>
//                 </div>
//             </BrowserRouter>
//         )
//     }
// }