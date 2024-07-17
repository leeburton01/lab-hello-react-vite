import React from "react";

function Feature({ imgSrc, title, description }) {
  return (
    <div className="feature">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
