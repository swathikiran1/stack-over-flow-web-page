import {Component} from 'react'
import {LiaLessThanSolid} from 'react-icons/lia'
import TabItem from './components/TabItem'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="left-side-container">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.pj8N4JVPWqPmnrm4HlmppgHaC5&pid=Api&P=0&h=180"
            alt="stackOverFlow-logo"
            className="stack-logo"
          />
          <div className="arrow-container">
            <LiaLessThanSolid className="arrow" />
          </div>
          <ul className="tabs-container">
            <TabItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default App
