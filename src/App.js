import {Component} from 'react'
import {LiaLessThanSolid} from 'react-icons/lia'
import TabItem from './components/TabItem'
import TopNavItem from './components/TopNavbarItem'
import JobsContainer from './components/JobsContainer'

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
        <div className="middle-container">
          <TopNavItem />
          <div className="middle-container1">
            <div className="sub-container">
              <div className="question-container">
                <p className="questions">Questions</p>
                <div className="elements-container">
                  <p className="element element1">intersting</p>
                  <p className="element">
                    featured <span className="features-count">432</span>
                  </p>
                  <p className="element">hot</p>
                  <p className="element">week</p>
                  <p className="element">month</p>
                </div>
              </div>
              <hr />
            </div>
            <JobsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App
