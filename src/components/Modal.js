import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div>
            <div>
              <h1>{this.props.subject}</h1>
              <h2>{this.props.studyTime}</h2>
              <button onClick={this.props.handleCloseModal}>とじる</button>
            </div>
      </div>
    );
  }
}

export default Modal;
