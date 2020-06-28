import React from 'react';

class Option extends React.Component {

    render() {
        return (
            <div>
              {this.props.subject && <p>{this.props.subject}</p> }
              {/**this.props.deleteOne(this.props.subject) をそのまま入れるとerrorでpure functionじゃないとダメって言われる
            　　 */}
              <button onClick={()=> this.props.deleteOne(this.props.subject)}>delete</button>
            </div>
        );
    }
}


export default Option;