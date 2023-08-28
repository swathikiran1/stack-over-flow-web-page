import {BsQuestionLg, BsTag, BsBookmark} from 'react-icons/bs'
import {PiBagSimple} from 'react-icons/pi'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {FaRegUser, FaStackExchange} from 'react-icons/fa'
import {TbSpeakerphone} from 'react-icons/tb'
import {HiInbox} from 'react-icons/hi'

import './index.css'

const TabItem = () => (
  <>
    <li className="tab-container question">
      <div className="sub-tab-container1" id="sub-tab-container2">
        {}
      </div>
      <div className="tab-container1">
        <BsQuestionLg className="tab-icon tab-icon1" />
        <p className="tab-name tab-name1">QUESTIONS</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <PiBagSimple className="tab-icon" />
        <p className="tab-name">JOBS</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <IoDocumentTextOutline className="tab-icon" />
        <p className="tab-name">DOCUMENTATION</p>
        <p className="new">NEW</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <BsTag className="tab-icon" />
        <p className="tab-name">TAGS</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <FaRegUser className="tab-icon" />
        <p className="tab-name">USERS</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <BsBookmark className="tab-icon" />
        <p className="tab-name">BADGES</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <TbSpeakerphone className="tab-icon" id="icon" />
        <p className="tab-name">ASK QUESTION</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <FaStackExchange className="tab-icon" />
        <p className="tab-name">STACK EXCHANGE</p>
      </div>
    </li>
    <li className="tab-container">
      <div className="sub-tab-container1">{}</div>
      <div className="tab-container1">
        <HiInbox className="tab-icon" id="icon" />
        <p className="tab-name">INBOX</p>
        <p className="count">24</p>
      </div>
    </li>
  </>
)

export default TabItem
