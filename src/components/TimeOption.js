import React from "react";

class TimeOption extends React.Component {
  render() {
    return (
      <div className="option">
        {this.props.time && (
          <p className="option__content">{this.props.time}</p>
        )}
        {/**this.props.deleteOne(this.props.subject) をそのまま入れるとerrorでpure functionじゃないとダメって言われる
         */}
        <button
          className="option__button"
          onClick={() => this.props.deleteOne(this.props.time)}
        >
          delete
        </button>
      </div>
    );
  }
}

export default TimeOption;
