// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAccelerator = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onApplyButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="cont">
        <h1>Speedometer</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1>Speed is {count}mph</h1>
        <br />
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <br />
        <div>
          <button className="btn1" type="button" onClick={this.onAccelerator}>
            Accelerate
          </button>
          <button className="btn2" type="button" onClick={this.onApplyButton}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
