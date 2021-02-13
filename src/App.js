import React, { Component } from "react";
import "./styles.css";
import { DataGraph } from "./DataGraph.js";
import { DataEntry } from "./DataInput.js";

export default class App extends Component {
  initialState = () => ({ items: [], input: "", age: "" });
  //adding an array property
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      input: "",
      age: 50,
      gender: "",
      isEmployed: true
    };
  }

  //connect eventHandler to each element
  handleAddEvent(e) {
    console.log("handleAddEvent()");

    if (this.state.input.trim().length > 0) {
      const { items, input } = this.state;
      items.push(input.trim());

      this.setState({ items: items.sort(), input: "" });
    }
  }

  handleClearEvent(e) {
    console.log("handleClearEvent()");
    this.setState(this.initialState());
  }
  handleInputChange(e) {
    console.log("handleInputChange()");
    console.log("Input: ", e.target.value);
    this.setState({ input: e.target.value });
  }
  handleAgeChange(e) {
    console.log("handleAgeChange()");
    console.log("age: ", e.target.value);
    this.setState({ age: e.target.value });
  }

  //display UI elements and implement callback event
  render() {
    console.log("render()");
    return (
      <div className="StyleAll">
        <h1>Group 23 Project 4</h1>
        <hr />

        <div className="StyleItems">
          <h2 className="StyleList">List</h2>
          People:
          {this.state.items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <pre></pre>
          <div>
            <button onClick={this.handleClearEvent.bind(this)}>Clear</button>
          </div>
        </div>

        <div className="StyleInput">
          <h2 className="StyleEntry">Data Entry</h2>
          <label htmlFor="NameInput">Name: </label>
          <input
            id="NameInput"
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)}
          />
          <div>
            {" "}
            <label htmlFor="AgeInput">Age: </label>
            <input
              id="Age"
              type="range"
              min={0}
              value={this.state.Age}
              onChange={this.handleAgeChange.bind(this)}
            ></input>
            &nbsp; &nbsp;
            <input
              id="AgeInput"
              style={{ width: "10%" }}
              value={this.state.age}
              onChange={this.handleAgeChange.bind(this)}
            />
          </div>
          <pre></pre>
          <div className="genderRadio">
            Gender:
            <br />
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <br />
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <pre></pre>
          <div>
            <label htmlFor="EmployedCheckbox">Employed: </label>
            <input
              id="EmployedCheckbox"
              type="checkbox"
              value={this.state.isEmployed}
              defaultChecked={this.state.isEmployed}
            />
          </div>
          <pre></pre>
          <div>
            <button onClick={this.handleAddEvent.bind(this)}>Add</button>
          </div>
        </div>

        <hr />
        <div className="Graph">
          <h2>Graph</h2>
          <DataGraph data={[]} />
        </div>
      </div>
    );
  }
}
