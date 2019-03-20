import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  testData = {
    name: "James",
    friends: "Harris",
    skill: { java: 5, css: 2 },
    goals: {
      holidays: ["japan", "canada"],
      football: "premiere"
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Table App 2</h1>
        <table className="Whole Table">
          <thead>
            <tr id="test data headers">
              {Object.keys(this.testData).map(item => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="row 1 containing all the test data">
              {Object.keys(this.testData).map(item => {
                if (typeof this.testData[item] === "string")
                  return <td>{this.testData[item]}</td>;
                else {
                  return (
                    <td>
                      <table>
                        <thead>
                          <tr>
                            {Object.keys(this.testData[item]).map(key => {
                              return <th>{key}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {Object.keys(this.testData[item]).map(key => {
                              return typeof this.testData[item][key] ===
                                "object" ? (
                                <td>
                                  {this.testData[item][key].map(item => (
                                    <li>{item}</li>
                                  ))}
                                </td>
                              ) : (
                                <td>{this.testData[item][key]}</td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
