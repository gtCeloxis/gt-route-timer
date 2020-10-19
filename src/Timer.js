import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import StartTimer from './StartTimer';
import StopTimer from './StopTimer';

class Timer extends Component {

    render() {
        //console.log('render');
        return (
            <div>
                <div>
                <NavLink to={{pathname: '/start',}}>Start</NavLink>
                <NavLink to={{pathname: '/stop',}}>Stop</NavLink>
                </div>
                <Switch>
                    <Route path="/start" exact component={StartTimer} />
                    <Route path="/stop"  component={StopTimer} />
                </Switch> 
            </div>
        )
    }
}

export default Timer;