import React from "react";

export default function CardComp() {
  return (
    <>
      <div className="card-group">
        <div className="little-card card"></div>

        <div className="big-card card"></div>

        <div className="little-card card"></div>

        <div className="big-card card"></div>

        <div className="little-card card"></div>

        <div className="big-card card"></div>

        <div className="little-card card">
          <a
            class="link"
            href="https://wordle-surpun.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Wordle App
          </a>
        </div>

        <div className="big-card card"></div>
      </div>
    </>
  );
}
