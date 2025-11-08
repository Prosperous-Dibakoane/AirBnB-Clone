import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`images/${props.img}`} alt={props.title} className="card-image" />

      <div className="card-stats">
        <div className="stats-row">
          <span>⭐ {props.rating}</span>
          <span className="gray">({props.reviewCount}) • {props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span>From {props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
