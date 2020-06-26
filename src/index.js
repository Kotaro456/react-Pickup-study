import React from 'react';
import {render} from 'react-dom';

class Test extends React.Component {
    render() {
        return (
            <div>
              Hello React!!
            </div>
        );
    }
}

render(<Test />, document.getElementById('app'));