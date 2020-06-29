import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // 日時をこれでゲット　toLocalTimeStringで国別の日時を文字列で返す
            currentTime : new Date().toLocaleTimeString(),
        };

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

    render() {
        return(
            <div className="pickup__pickup-time">{this.state.currentTime}</div>
        );
    }
}

export default Clock;