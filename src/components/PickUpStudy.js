import React from 'react';
import Header from './Header';
import PickUp from './PickUp';
import Options from './Options';
import AddOption from './AddOption';




class PickUpStudy extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="study">
            <Header />
              <PickUp />
              <Options />
              <AddOption />
            </div>
        );
    }
}

export default PickUpStudy;