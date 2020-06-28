import React from "react";

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);

        this.state = {
          errorMessage : ''
        }
    }

   addOption(event) {
       {/**ユーザーが行うイベントのため　event.preventDefault();いれた方がいいかも */}
       event.preventDefault();

       {/**入力されたテキストを取得                            trim()で入力値の前後の空白取り除く */}
       const textValue = event.target.elements.textBox.value.trim();

       {/**PickUpStudyコンポーネントから受け取ったメソッド発動 */}
       {/**ifの条件式で入力フォームが空じゃないこと確認 */}
       if(textValue !== ''){
          this.props.addOption(textValue);
          this.setState({ errorMessage: '' });

          // addOptionでstateにデータ設置できたら、入力フォームを空にする
          event.target.elements.textBox.value = '';
       }else if(textValue === '') {
          this.setState({ errorMessage: '何か入力してください' });
       }
   }


  render() {
    return (
      <div>
        {this.state.errorMessage !== '' && <p>{this.state.errorMessage}</p>}
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
