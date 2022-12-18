import React from "react";

import { FaLaptopCode } from "react-icons/fa";
// FaLaptopCode

export default function FooterComp() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-text">
            Trained with{" "}
            <a
              id="founders"
              href="https://www.foundersandcoders.com/"
              target="_blank"
              rel="noreferrer"
            >
              Founders & Coders
            </a>{" "}
            and aspiring to become a Full-Stack Developer.
          </div>

          {/* Icon */}
          <div id="footer-icon">
            <FaLaptopCode />
            <span class="line"></span>
            <FaLaptopCode />
          </div>
        </div>
      </footer>
    </>
  );
}
