import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        {this.props.subject === undefined ||
        this.props.studyTime === undefined ? (
          <div className="modal__content">
            <h1 className="modal__content-subject">
              教科を1つ以上設定してください
            </h1>
            <h2 className="modal__content-studyTime">
              時間を1つ以上設定してください
            </h2>
            <button
              className="modal__content-button"
              onClick={this.props.handleCloseModal}
            >
              とじる
            </button>
          </div>
        ) : (
          <div className="modal__content">
            <h1 className="modal__content-subject">{this.props.subject}</h1>
            <h2 className="modal__content-studyTime">
              {this.props.studyTime}min
            </h2>
            <button
              className="modal__content-button"
              onClick={this.props.handleCloseModal}
            >
              とじる
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
