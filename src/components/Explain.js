import React from "react";

class Explain extends React.Component {
  render() {
    return (
      <div className="explain">
        <h1 className="explain__title">使い方</h1>
        <ul className="explain__lists">
          <li className="explain__lists-list">
            「何を勉強する？」ボタンを押すと、科目・時間をランダムに選んでくれます。
          </li>

          <li className="explain__lists-list">
            delete
            allボタンでセットされている科目・時間全てを削除することができます。
          </li>

          <li className="explain__lists-list">
            defaultボタンを押すと、
            「数1A」,「数2B」,「英語」,「現代文」,「古典・漢文」,「休憩」が
            <br></br>
            又は「10min」,「20min」,「30min」,「40min」,「60min」,「80min」が
            セットされます。
          </li>
        </ul>
      </div>
    );
  }
}

export default Explain;
