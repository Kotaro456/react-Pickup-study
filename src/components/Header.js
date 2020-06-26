import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
              <h1 className="header__header-title">Pick up study</h1>
              <p className="header__header-subtitle">勉強する科目・時間を決める</p>
            </div>
        );
    }
}

export default Header;