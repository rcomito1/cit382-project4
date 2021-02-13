import React, { Component } from "react";
import { useState } from "react";

export function DataEntry({ addName = (f) => f }) {
  const name = "";
  const handleInputChange = (e) => {
    console.log("handleInputChange()");
    console.log("Input: ", e.target.value);
    name.setState({ input: e.target.value });
  };
  console.log("Name:", name);
  return (
    <div>
      <h2 className="StyleEntry">Data Entry</h2>
      <label htmlFor="NameInput">Name: </label>
      <input id="NameInput" value={name} onChange={handleInputChange} />
    </div>
  );
}
