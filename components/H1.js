import React from "react";
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function H1() {
  return (
    <>
      <div class="head1-container">
        <h1>
          Hi,
          <br />
          I&apos;m Suraj,
          <br />
          Software Developer
        </h1>

        <div class="socials">
          {/* Mailto */}
          <a
            href="mailto: S_pun.mail@proton.me"
            target="_blank"
            rel="noreferrer"
          >
            <FaRegEnvelope />
          </a>

          {/* Linked-in */}
          <a
            href="https://www.linkedin.com/in/surpun/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
