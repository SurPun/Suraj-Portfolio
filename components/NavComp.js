import React, { useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

export default function NavComp() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div class="topnav" id="myTopnav">
        {/* Home */}
        <a href="#home" class="active">
          Home
        </a>

        {/* About */}
        <a href="#about">About</a>

        {/* Work */}
        <a href="#work">Work</a>

        {/* Contact */}
        <a href="#contact">Contact</a>

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          {/* Hamburger */}
          <FaBars />
        </a>
      </div>
    </>
  );
}
