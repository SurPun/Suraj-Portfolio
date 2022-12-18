import React from "react";
import { FaLinkedinIn, FaRegEnvelope, FaSearch } from "react-icons/fa";

export default function H1() {
  return (
    <>
      <div class="head1-container">
        <h1>
          Hi,
          <br />
          I&apos;m Suraj,
          <br />
          <span class="role">Software Developer;</span>
        </h1>

        <div class="socials">
          {/* Linked-in */}
          <a
            href="https://www.linkedin.com/in/surpun/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          {/* Mailto */}
          <a
            href="mailto: S_pun.mail@proton.me"
            target="_blank"
            rel="noreferrer"
          >
            <FaRegEnvelope />
          </a>
        </div>

        {/* Search Icon */}
        <div id="search">
          <FaSearch />
        </div>
      </div>
    </>
  );
}
