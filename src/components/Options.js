import React from "react";
import Option from "./Option";

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="options">
        <div className="options__header">
          <h1 className="options__header-title">Subjects</h1>
          <button onClick={this.props.deleteAll} className="options__header-button">delete all</button>
        </div>
        <div>
        {/**subjects配列を1つずつpropsとして入れている */}
          {this.props.subjects.map((subject) => {
            //             keyをつけないといけないらしい。よくわからん
            return <Option deleteOne={this.props.deleteOne} key={subject} subject={subject} />;
          })}
        </div>
      </div>
    );
  }
}

export default Options;
