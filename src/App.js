import React from 'react';
import './App.css';
import Greet from './components/Greet'

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       <Welcome />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakMins: 5,
      sessionMins: 25,
      seconds: 0
    }
  }
  render() {
    return (
      <div id="" className="container">
        <h1>25 + Clock</h1>
        <div id="length-section" className="">
          <div id="b-length">
            <h3 id="break-label">Break Length</h3>
            <div id="b-length-adj">
              <a id="break-decrement"><i className="fa-solid fa-arrow-down"></i></a>
              <h3 id="break-length"></h3>
              <a id="break-increment"><i className="fa-solid fa-arrow-up"></i></a>
            </div>
          </div>
          <div id="s-length">
            <h3 id="session-label">Session Length</h3>
            <div id="s-length-adj">
              <a id="session-decrement"><i className="fa-solid fa-arrow-down"></i></a>
              <h3 id="session-length"></h3>
              <a id="session-increment"><i className="fa-solid fa-arrow-up"></i></a>
            </div>
          </div>
        </div>
        <div id="sess-timer">
          <h3 id="timer-label">Session</h3>
          <h1 id="time-left">{`${this.state.sessionMins}:${this.state.seconds}`}</h1>
        </div>
        <div id="bottom-icons">
          <a id="start_stop">
            <div>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-pause"></i>
            </div>
          </a>
          <a id="reset"><i className="fa-solid fa-arrows-rotate"></i></a>
        </div>
      </div>
    )
  }
}

export default App;
