import React from 'react';
import Clock from './Clock';
class PickUp extends React.Component {
    render() {
        return (
            <div className="pickup">
              <Clock />
              <button onClick={this.props.handleOpenModal} className="pickup__pickup-button">何を勉強する？</button>
            </div>
        );
    }
}

export default PickUp;