import React from 'react';

class Option extends React.Component {

    render() {
        return (
            <div className="option">
              {this.props.subject && <p className="option__content">{this.props.subject}</p> }
              {/**this.props.deleteOne(this.props.subject) をそのまま入れるとerrorでpure functionじゃないとダメって言われる
             */}
              <button className="option__button" onClick={()=> this.props.deleteOne(this.props.subject)}>delete</button>
            </div>
        );
    }
}


export default Option;