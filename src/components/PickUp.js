import React from 'react';

class PickUp extends React.Component {
    render() {
        return (
            <div className="pickup">
              <p className="pickup__pickup-time">時間：00:00:00</p>
              <button className="pickup__pickup-button">何を勉強する？</button>
            </div>
        );
    }
}

export default PickUp;