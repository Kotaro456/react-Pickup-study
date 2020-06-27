import React from "react";
import Option from "./Option";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: this.props.subjects,
    };
  }
  render() {
    return (
      <div className="options">
        <div className="options__header">
          <h1 className="options__header-title">Subjects</h1>
          <button className="options__header-button">delete all</button>
        </div>
        <div>
        {/**subjects配列を1つずつpropsとして入れている */}
          {this.state.subjects.map((subject) => {
            return <Option key={subject} subject={subject} />;
          })}
        </div>
      </div>
    );
  }
}

export default Options;
