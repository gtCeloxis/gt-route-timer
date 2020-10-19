import React, {Component} from 'react';

class StartTimer extends Component {
    state = {
        time: 0
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({
            time: this.state.time + 1
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
       return (
        <p>Timer: {this.state.time}</p>
    ) 
    }
    
}

export default StartTimer;