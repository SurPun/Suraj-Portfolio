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

        {/* IET Big Card */}
        <div className="big-card card">
          <a
            id="IET"
            href="https://iet-kebbah.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            IET
          </a>
        </div>

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

        {/* Project TBA */}
        <div className="little-card card">
          <a id="TBA" href="" target="_blank" rel="noreferrer">
            TBA
          </a>
        </div>

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
