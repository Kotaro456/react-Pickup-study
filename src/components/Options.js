import React from 'react';
import Option from './Option';

class Options extends React.Component {
    render() {
        return (
            <div>
              <h1>Subjects</h1>
              <button>delete all</button>
              <Option />
            </div>
        );
    }
}

export default Options;

