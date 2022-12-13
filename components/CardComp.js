import React from "react";

export default function CardComp() {
  return (
    <>
      <div className="card-group">
        {/* I Small Card */}
        <div className="little-card card" id="iCard"></div>

        <div className="big-card card"></div>

        {/* Wordle Small Card */}
        <div className="little-card card">
          <a
            class="link"
            href="https://wordle-surpun.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Wordle
          </a>
        </div>

        <div className="big-card card"></div>

        <div className="little-card card"></div>

        <div className="big-card card"></div>

        <div className="little-card card"></div>

        <div className="big-card card"></div>
      </div>
    </>
  );
}