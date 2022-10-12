// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {seconds: 0, isTimer: false}

  timeRunning = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onClickStartOrPause = () => {
    const {isTimer} = this.state

    if (!isTimer) {
      this.intervalId = setInterval(this.timeRunning, 1000)
    } else {
      clearInterval(this.intervalId)
    }
  }

  onStartTimer = () => {
    this.setState(prevState => ({isTimer: !prevState.isTimer}))
    this.onClickStartOrPause()
  }

  onStopTimer = () => {
    this.setState(prevState => ({isTimer: !prevState.isTimer}))
    this.onClickStartOrPause()
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimer: false, seconds: 0})
  }

  renderStopWatch = () => {
    const {seconds} = this.state

    const isMinutes = Math.floor(seconds / 60)
    const isSeconds = Math.floor(seconds % 60)

    const finalMinutes = isMinutes > 9 ? isMinutes : `0${isMinutes}`
    const finalSeconds = isSeconds > 9 ? isSeconds : `0${isSeconds}`

    return `${finalMinutes}:${finalSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-logo"
              />
              <p>Timer</p>
            </div>
            <h1 className="time">{this.renderStopWatch()}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="btn-style-one"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn-style-two"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn-style-three"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
