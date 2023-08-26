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
      <BsQuestionLg className="tab-icon tab-icon1" />
      <p className="tab-name tab-name1">QUESTIONS</p>
    </li>
    <li className="tab-container">
      <PiBagSimple className="tab-icon" />
      <p className="tab-name">JOBS</p>
    </li>
    <li className="tab-container">
      <IoDocumentTextOutline className="tab-icon" />
      <p className="tab-name">DOCUMENTATION</p>
      <p className="new">NEW</p>
    </li>
    <li className="tab-container">
      <BsTag className="tab-icon" />
      <p className="tab-name">TAGS</p>
    </li>
    <li className="tab-container">
      <FaRegUser className="tab-icon" />
      <p className="tab-name">USERS</p>
    </li>
    <li className="tab-container">
      <BsBookmark className="tab-icon" />
      <p className="tab-name">BADGES</p>
    </li>
    <li className="tab-container">
      <TbSpeakerphone className="tab-icon" id="icon" />
      <p className="tab-name">ASK QUESTION</p>
    </li>
    <li className="tab-container">
      <FaStackExchange className="tab-icon" />
      <p className="tab-name">STACK EXCHANGE</p>
    </li>
    <li className="tab-container">
      <HiInbox className="tab-icon" id="icon" />
      <p className="tab-name">INBOX</p>
      <p className="count">24</p>
    </li>
  </>
)

export default TabItem
