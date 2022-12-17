import React from "react";

export default function CardComp() {
  return (
    <>
      <div className="card-group">
        {/* I Small Card */}
        <div className="little-card card">
          <a
            id="iCard"
            href="https://github.com/SurPun"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>

        <div className="big-card card"></div>

        {/* Wordle Small Card */}
        <div className="little-card card">
          <a
            id="wordle"
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

        {/* TSC Small Card */}
        <div className="little-card card">
          <a
            id="TSC"
            href="https://surpun.github.io/Slightly-Curious/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Pottery</span> Studio
          </a>
        </div>

        <div className="big-card card"></div>
      </div>
    </>
  );
}
