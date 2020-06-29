import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
            <div className="modal__content">
              <h1 className="modal__content-subject">{this.props.subject}</h1>
              <h2 className="modal__content-studyTime">{this.props.studyTime}</h2>
              <button className="modal__content-button" onClick={this.props.handleCloseModal}>とじる</button>
            </div>
      </div>
    );
  }
}

export default Modal;
