import React from 'react';

class AddOption extends React.Component {
    render() {
        return(
            <div className="addoption">
              <input className="addoption__textbox" type="text" />
              <button className="addoption__button">追加</button>
            </div>
        );
    }
}

export default AddOption;