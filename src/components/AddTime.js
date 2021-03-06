import React from "react";

class AddTime extends React.Component {
  constructor(props) {
    super(props);
    this.addTime = this.addTime.bind(this);

    this.state = {
      errorMessage: "",
    };
  }

  addTime(event) {
    {
      /**ユーザーが行うイベントのため　event.preventDefault();いれた方がいいかも */
    }
    event.preventDefault();

    {
      /**入力されたテキストを取得                            trim()で入力値の前後の空白取り除く */
    }
    const textValue = event.target.elements.textBox.value.trim().toString();

    const times = this.props.times;
    {
      /**PickUpStudyコンポーネントから受け取ったメソッド発動 */
    }
    {
      /**ifの条件式で入力フォームが空じゃないこと確認
       * 配列の要素が重複していないかの確認
       * 重複や入力値が空の時のエラーメッセージ
       */
    }
    if (textValue !== "") {
      if (times.indexOf(textValue) > -1) {
        this.setState({ errorMessage: "すでに同じ時間があります" });
      } else {
        this.props.addTime(textValue);
        this.setState({ errorMessage: "" });
      }

      // addOptionでstateにデータ設置できたら、入力フォームを空にする
      event.target.elements.textBox.value = "";
    } else if (textValue === "") {
      this.setState({ errorMessage: "何か入力してください" });
    }
  }

  render() {
    return (
      <div>
        {this.state.errorMessage !== "" && (
          <p className="error-message">{this.state.errorMessage}</p>
        )}
        <form
          className="addoption"
          name="form"
          id="add_from"
          onSubmit={this.addTime}
        >
          <input className="addoption__textbox" name="textBox" type="number" />
          <button className="addoption__button">追加</button>
        </form>
      </div>
    );
  }
}

export default AddTime;
