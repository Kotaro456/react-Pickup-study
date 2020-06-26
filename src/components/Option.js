import React from 'react';

class Option extends React.Component {
    constructor(props){
        super();
        this.state={
            subjects: ["数学", "国語", "化学"]
        }
    }
    render() {
        return (
            <div>
              <p>{this.state.subjects[0]}</p>
              <p>{this.state.subjects[1]}</p>
              <p>{this.state.subjects[2]}</p>
            </div>
        );
    }
}


export default Option;