import "./styles.css";
import React, { useState } from "react";
import { ReactComponent as Img } from "./shopping-cart.svg";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">
        Flanbieuto
        <span id="searchBar">
          <select>
            <option> All </option>
            <option> Clothes </option>
            <option> Electronics </option>
            <option> Books </option>
            <option> Baby </option>
            <option> Watches </option>
            <option> Today's Deals</option>
          </select>
          <input type="text" />
          <button>
            <span role="img" aria-label="">
              🔍
            </span>
          </button>
          <Img className="Img" />
        </span>
      </h1>
    </div>
  );
}
