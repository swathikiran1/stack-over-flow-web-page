import {Component} from 'react'
import {LiaLessThanSolid} from 'react-icons/lia'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {CiGlobe} from 'react-icons/ci'
import TabItem from './components/TabItem'
import TopNavItem from './components/TopNavbarItem'
import JobsContainer from './components/JobsContainer'
import CommentItem from './CommentItem'
import TechnologyItems from './TechnologyItems'

import './App.css'

const featuresList = [
  'about us',
  'tour',
  'help',
  'blog',
  'chat',
  'data',
  'legal',
  'privacy policy',
  'work here',
  'advertising info',
  'mobile',
  'contact us',
  'feedback',
]

class App extends Component {
  render() {
    return (
      <>
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
                <div className="comments-container">
                  <CommentItem />
                </div>
                <div className="website-end-logo-container">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/stackoverflow-1024.png"
                    alt="website-end-logo"
                    className="website-end-logo"
                  />
                </div>
                <div className="line-container">
                  <div className="orange-line1">{}</div>
                  <div className="blue-line1">{}</div>
                  <div className="orange-line2">{}</div>
                  <div className="orange-line3">{}</div>
                  <div className="blue-line2">{}</div>
                </div>
                <h1 className="ending-heading">Looking for more?</h1>
                <p className="ending-paragraph">
                  Browse the{' '}
                  <span className="ending-span">
                    complete list of questions
                  </span>
                  , or <span className="ending-span">popular tags</span>. Help
                  us answer unanswered questions.
                </p>
              </div>
              <JobsContainer />
            </div>
          </div>
          <hr />
        </div>
        <div className="features-logo-container">
          <ul className="features-list">
            {featuresList.map(eachFeature => (
              <li className="feature">{eachFeature}</li>
            ))}
          </ul>
          <div className="logos-container">
            <BsTwitter className="logos" />
            <FaFacebookF className="logos" />
            <CiGlobe className="logos" />
          </div>
        </div>
        <hr className="hr" />
        <TechnologyItems />
        <hr />
        <div className="last-container">
          <p className="last-paragraph">
            site design/logo © 2016 Stack Exchange Inc: user contributions
            licensed under co by-sa 3.0 with attribution required
          </p>
          <p className="last-paragraph">rev 2016.8.1.3852</p>
        </div>
      </>
    )
  }
}

export default App
