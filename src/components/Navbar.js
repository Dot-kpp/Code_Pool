import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThin, faSquirrel } from '@fortawesome/free-solid-svg-icons'

function navbar() {
  return (
    // <div className="navbar">
    //   <div className="logo">
    //   </div>
    //   <h1>CodePool</h1>
    //     <div className="nav-links">
    //       <a href="/">Home</a>
    //       <a href="/playground">Playground</a>
    //       <a href="#">Signup</a>
    //     </div>
    //   <div>
    //   </div>
    // </div>
    <body>

<nav class="navbar">


<div class="logo">CodePool</div>



<ul class="nav-links">



<input type="checkbox" id="checkbox_toggle" />

<label for="checkbox_toggle" class="hamburger">&#9776;</label>



<div class="menu">

<li><a href="/">Home</a></li>

<li><a href="/playground">Playground</a></li>

<li><a href="/playground">Login</a></li>

<li class="Join">

<a href="/">About us</a>




<ul class="dropdown">

<li><a href="/">Home</a></li>

<li><a href="/playground">Playground</a></li>

<li><a href="/">Login</a></li>

<li><a href="/">Signup</a></li>

<li><a href="/">Dropdown 4</a></li>

</ul>

</li>

</div>

</ul>

</nav>

</body>
  );
}

export default navbar;