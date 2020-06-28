import React from 'react';
import Header from './Header';
import PickUp from './PickUp';
import AddOption from './AddOption';
import Options from './Options';





class PickUpStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: ['数1A', '数2B', '英語', '現代文', '古典・漢文', '休憩'],
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

    deleteOne (removeSubject) {
        {/**filter()で配列から特定の要素を抽出し削除 */}
        {/**prevStateは変更前のthis.state subjects配列の要素を1つずつremoveSubjectと照らし合わせる
        　removeSubjectはOptionコンポーネントでdeleteボタンを押されたもの */}
        this.setState((prevState) => ({ subjects: prevState.subjects.filter(function(subject){
            return removeSubject !== subject;
        }) }));
    }

    // 追加メソッド 引数subjectはAddOptionコンポーネントからで取得したtextValue
    addOption(subject) {

        // pushはオリジナルのstateのsubjects配列をいじるが、concatは新しい配列を生成
        // pushを使うとstateが変異するため、react的には好ましくないためconcatの方が良い
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