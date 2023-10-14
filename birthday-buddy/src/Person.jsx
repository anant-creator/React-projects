import React from "react";

export default function Person({image, name, age}) {
    console.log("data");
  return (
    <div>
      <li key={id}>
        <div className="person">
          <img src={image} className="img-person" />
          <div>
            <h4>{name}</h4>
            <h6>{age} Years</h6>
          </div>
        </div>
      </li>
    </div>
  );
}
