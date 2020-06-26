import React from 'react';
import Header from './Header';
import PickUp from './PickUp';
import Options from './Options';
import AddOption from './AddOption';



class PickUpStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Pick up Study"
        }
    }
    render() {
        return (
            <div>
            <Header />
              {this.state.title}
              <PickUp />
              <Options />
              <AddOption />
            </div>
        );
    }
}

export default PickUpStudy;