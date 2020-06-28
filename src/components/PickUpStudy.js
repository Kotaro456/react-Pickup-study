import React from 'react';
import Header from './Header';
import PickUp from './PickUp';
import AddOption from './AddOption';
import Options from './Options';





class PickUpStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            studyTime: ["10min", "20min", "40min", "60min", "80min"],
        };

        // ほかのコンポーネントに渡すときにbindする必要あり、Yehuda Katzの記事
        this.addOption = this.addOption.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.deleteOne = this.deleteOne.bind(this);

    }

    deleteAll() {
        this.setState({ subjects: []});
    }

    deleteOne (removeOption) {
        {/**filter()で配列から特定の要素を抽出し削除 */}
        this.setState((prevState) => ({ subjects: prevState.subjects.filter(function(option){
            return removeOption !== option;
        }) }));
    }

    addOption(subject) {
        this.setState((prevState) => ({ subjects: prevState.subjects.concat([subject]) }));
    }

    render() {
        return (
            <div className="study">
            <Header />
              <PickUp
               subjects={this.state.subjects}
               studyTime={this.state.studyTime}
               />
              <Options
               subjects={this.state.subjects}
               deleteAll={this.deleteAll}
               deleteOne={this.deleteOne}
              />
              <AddOption
               subjects={this.state.subjects}
               addOption={this.addOption}
              />
            </div>
        );
    }
}

export default PickUpStudy;