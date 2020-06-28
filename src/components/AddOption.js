import React from "react";

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }

   addOption(event) {
       {/**ユーザーが行うイベントのため　event.preventDefault();いれた方がいいかも */}
       event.preventDefault();

       {/**入力されたテキストを取得 */}
       const textValue = event.target.elements.textBox.value;

       {/**PickUpStudyコンポーネントから受け取ったメソッド発動 */}
       this.props.addOption(textValue);
   }


  render() {
    return (
      <div>
        <form  className="addoption" name="form" id="add_from" onSubmit={this.addOption}>
          <input className="addoption__textbox" name='textBox'  type="text" />
          <button className="addoption__button">
            追加
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
