import React from 'react';
import Header from './Header';
import PickUp from './PickUp';
import Options from './Options';
import AddOption from './AddOption';




class PickUpStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: ["数学", "国語", "理科", "英語", "社会"],
            studyTime: ["10min", "20min", "40min", "60min", "80min"],
        }
    }
    render() {
        return (
            <div className="study">
            <Header />
              <PickUp
               subjects={this.state.subjects}
               studyTime={this.state.studyTime}
               />
              <Options />
              <AddOption />
            </div>
        );
    }
}

export default PickUpStudy;