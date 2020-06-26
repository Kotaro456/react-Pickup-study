import React from "react";
import Option from "./Option";

class Options extends React.Component {
  render() {
    return (
      <div className="options">
        <div className="options__header">
          <h1 className="options__header-title">Subjects</h1>
          <button className="options__header-button">delete all</button>
        </div>
        <Option />
      </div>
    );
  }
}

export default Options;
