import React, {Component} from 'react';

class LocalTimer extends Component {
    state = {
        time: 0,
        countTime: false
    }

    startTimer = () => {
        this.setState({countTime: true});
            this.timer = setInterval(() => {
                this.setState({
                    time: this.state.time + 1
                })
            }, 1000);
            console.log('countTime state: ' + this.state.countTime);
        }

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({countTime: false});
    }

    render() {
        return (
            <div>
                <p>Timer: {this.state.time}
                <br/>
                {
                this.state.countTime ? 
                <button onClick={this.stopTimer}>Stop</button> : <button onClick={this.startTimer}>Start</button>
                }
                </p>

            </div>
        )
    }
}

export default LocalTimer;