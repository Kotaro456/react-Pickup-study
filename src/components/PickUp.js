import React from 'react';

class PickUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // 日時をこれでゲット　toLocalTimeStringで国別の日時を文字列で返す
            currentTime : new Date().toLocaleTimeString(),
        };

        this.pickUpSubject = this.pickUpSubject.bind(this);
    }

    // タイマーをセットするときはcomponentDidMount()、componentDidUpdate()はダメだった
    componentDidMount() {
        // setIntervalで1秒ごとに、currentTimeを更新するpassOneSecond()を行う
        this.timeId = setInterval(() => {
            this.passOneSecond();
        }, 1000)
    }

    passOneSecond (){
        this.setState({currentTime: new Date().toLocaleTimeString()})
    }

    componentWillMount() {
        // clearIntervalはsetIntervalの解除を行う
        clearInterval(this.timeId);
    }

    // ここまで現在時刻表示

    // ランダムに教科を選ぶ
    pickUpSubject() {
        // ここのコードもう少しきれいにできる気がする

        const randomSubject = this.props.subjects[
            // ランダムに配列の中から選ぶ
            Math.floor(Math.random() * this.props.subjects.length)
        ];

        const randomStudyTime = this.props.studyTime[
             Math.floor(Math.random() * this.props.studyTime.length)
        ]

        alert(`${randomSubject}を${randomStudyTime}`);
    }
    render() {
        return (
            <div className="pickup">
              <p className="pickup__pickup-time">{this.state.currentTime}</p>
              <button onClick={this.pickUpSubject} className="pickup__pickup-button">何を勉強する？</button>
            </div>
        );
    }
}

export default PickUp;