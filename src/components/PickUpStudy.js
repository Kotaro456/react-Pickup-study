import React from "react";
import Header from "./Header";
import PickUp from "./PickUp";
import AddOption from "./AddOption";
import AddTime from "./AddTime";
import Options from "./Options";
import TimeOptions from "./TimeOptions";
import Modal from "./Modal";
import Explain from "./Explain";

class PickUpStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: ["数1A", "数2B", "英語", "現代文", "古典・漢文", "休憩"],
      studyTime: ["10", "30", "20", "40", "60", "80"],
      isModal: false,

      // pickUpSubjectTime()で変更するstateたち
      randomSubject: null,
      randomTime: null,
    };

    // ほかのコンポーネントに渡すときにbindする必要あり、Yehuda Katzの記事
    this.addOption = this.addOption.bind(this);
    this.addTime = this.addTime.bind(this);
    this.deleteAllSubjects = this.deleteAllSubjects.bind(this);
    this.deleteAllTime = this.deleteAllTime.bind(this);
    this.defaultBack = this.defaultBack.bind(this);
    this.defaultBackTime = this.defaultBackTime.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.pickUpSubjectTime = this.pickUpSubjectTime.bind(this);
    this.removeSubjectTime = this.removeSubjectTime.bind(this);
  }

  deleteAllSubjects() {
    this.setState({ subjects: [] });
  }

  deleteAllTime() {
    this.setState({ studyTime: [] });
  }

  defaultBack() {
    this.setState({
      subjects: ["数1A", "数2B", "英語", "現代文", "古典・漢文", "休憩"],
    });
  }

  defaultBackTime() {
    this.setState({
      studyTime: ["10", "20", "40", "60", "80"],
    });
  }

  deleteOne(removeOption) {
    {
      /**filter()で配列から特定の要素を抽出し削除 */
    }
    {
      /**prevStateは変更前のthis.state subjects配列の要素を1つずつremoveSubjectと照らし合わせる
        q1removeSubjectはOptionコンポーネントでdeleteボタンを押されたもの */
    }
    this.setState((prevState) => ({
      subjects: prevState.subjects.filter(function (subject) {
        return removeOption !== subject;
      }),
      studyTime: prevState.studyTime.filter(function (time) {
        return removeOption !== time;
      }),
    }));
  }

  // 追加メソッド 引数subjectはAddOptionコンポーネントからで取得したtextValue
  addOption(subject) {
    // pushはオリジナルのstateのsubjects配列をいじるが、concatは新しい配列を生成
    // pushを使うとstateが変異するため、react的には好ましくないためconcatの方が良い
    this.setState((prevState) => ({
      subjects: prevState.subjects.concat([subject]),
    }));
  }

  addTime(time) {
    this.setState((prevState) => ({
      studyTime: prevState.studyTime.concat([time]),
    }));
  }

  // これはページを更新してもデータが残る処理
  // ほかのライフサイクルメソッドのcomponentWillMountが将来的に変更されるらしいい
  // ページが表示される前の処理
  componentDidMount() {
    // localStorageからデータを取得
    const jsonObj = localStorage.getItem("subjects");

    // オブジェクトなのでJSON文字列から値をJSで使えるように変換
    const jsObj = JSON.parse(jsonObj);

    // データが存在するのであればstateにsetする
    if (jsonObj) {
      this.setState({ subjects: jsObj });
    }
  }

  // ユーザーがページ使っている最中
  componentDidUpdate(prevProps, prevState) {
    // 配列の要素数を比べて、違ったら変更ありと判断
    if (prevState.subjects.length !== this.state.subjects.length) {
      // データをJSON文字列に変換
      const obj = JSON.stringify(this.state.subjects);

      // localStorageにstateの変更をset
      localStorage.setItem("subjects", obj);
    }
  }

  // モーダルの処理メソッド

  // モダールオープン
  handleOpenModal() {
    this.setState({ isModal: true });

    this.pickUpSubjectTime();
  }

  // ランダムの教科時間取得
  pickUpSubjectTime() {
    // インデックス番号ランダムに取得
    const subjectNum = Math.floor(Math.random() * this.state.subjects.length);
    const timeNum = Math.floor(Math.random() * this.state.studyTime.length);

    // それぞれstateとしてデータ保存
    this.setState({ randomSubject: this.state.subjects[subjectNum] });
    this.setState({ randomTime: this.state.studyTime[timeNum] });
  }

  // モダールクローズ
  handleCloseModal() {
    this.setState({ isModal: false });

    this.removeSubjectTime();
  }

  // モダールクローズでの取得データ削除
  removeSubjectTime() {
    // モダールオープンでpickUpSubjectTime()したstateをもとに戻す
    this.setState({ randomSubject: null });
    this.setState({ randomTime: null });
  }

  render() {
    return (
      <div className="study">
        <Header />
        {
          /**条件に合わなければ、modalは表示しない JSXないではif文使えない(アロー関数とか使うといける)、３項演算子OK!*/
          this.state.isModal === true ? (
            <Modal
              subject={this.state.randomSubject}
              studyTime={this.state.randomTime}
              handleCloseModal={this.handleCloseModal}
              isModal={this.state.isModal}
            />
          ) : (
            <p className="study__insteadModal">Stay hungry. Stay foolish</p>
          )
        }

        <PickUp handleOpenModal={this.handleOpenModal} />
        <Options
          subjects={this.state.subjects}
          deleteAllSubjects={this.deleteAllSubjects}
          deleteOne={this.deleteOne}
          defaultBack={this.defaultBack}
          subjects={this.state.subjects}
          studyTime={this.state.studyTime}
        />
        <AddOption subjects={this.state.subjects} addOption={this.addOption} />

        <TimeOptions
          deleteAllTime={this.deleteAllTime}
          deleteOne={this.deleteOne}
          defaultBackTime={this.defaultBackTime}
          studyTimes={this.state.studyTime}
        />

        <AddTime times={this.state.studyTime} addTime={this.addTime} />
        <Explain />
      </div>
    );
  }
}

export default PickUpStudy;
