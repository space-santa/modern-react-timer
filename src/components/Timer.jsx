import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.timerStatus !== prevState.timerStatus) {
      var clear = () => {
        clearInterval(this.timer);
        this.timer = undefined;
      };
      switch (this.state.timerStatus) {
      case 'started':
        this.startTimer();
        break;
      case 'stopped':
        this.setState({count: 0});
        clear();
        break;
      case 'paused':
        clear();
        break;
      default:
          // do nothing
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount > 0 ? newCount : 0
      });

    }, 1000);
  }

  handleStatusChange = (newStatus) => {
    this.setState({timerStatus: newStatus});
  }

  render() {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}

export default Timer;
