import React from "react";
import TimeOption from "./TimeOption";

class TimeOptions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="options">
        <div className="options__header">
          <h1 className="options__header-title">Time</h1>
          <div>
            <button
              onClick={this.props.defaultBackTime}
              className="options__header-button"
            >
              default
            </button>
            <br></br>
            <button
              onClick={this.props.deleteAll}
              className="options__header-button"
            >
              delete all
            </button>
          </div>
        </div>
        <div className="options__contents">
          {/**subjects配列を1つずつpropsとして入れている */}
          {this.props.studyTimes.map((time) => {
            //             keyをつけないといけないらしい。よくわからん。後で調べる
            return (
              <TimeOption
                deleteOne={this.props.deleteOne}
                key={time}
                time={time}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TimeOptions;
