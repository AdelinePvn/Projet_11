import React from "react";
import "./banner.scss";

export default function Banner({ text, textBanner }) {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2 dangerouslySetInnerHTML={{ __html: text }} />
        <p> {textBanner} </p>
      </div>
    </div>
  );
}
