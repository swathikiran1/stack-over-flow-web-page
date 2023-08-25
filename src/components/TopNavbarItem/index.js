import {AiOutlineMenu} from 'react-icons/ai'
import {HiSearch} from 'react-icons/hi'
import {IoIosHelpBuoy} from 'react-icons/io'
import {MdOutlineMonitor, MdKeyboardArrowDown} from 'react-icons/md'

import './index.css'

const TopNavItem = () => (
  <div className="nav-container">
    <div className="menu-container">
      <AiOutlineMenu className="icon" />
      <div className="search-container">
        <HiSearch className="icon" />
        <input type="search" placeholder="Search" className="search" />
      </div>
    </div>
    <div className="profile-container">
      <div className="container">
        <IoIosHelpBuoy className="icon" />
        <p className="help">Help</p>
      </div>
      <div className="container">
        <MdOutlineMonitor className="icon" />
        <p className="help">Tour</p>
      </div>
      <div>
        <img
          src="https://michaelanthonysalondc.com/wp-content/uploads/2019/04/bigstock-Handsome-man-in-black-suit-wit-240819310.jpg"
          className="profile-pic"
          alt="profile-pic"
        />
        <MdKeyboardArrowDown className="icon icon1" />
      </div>
    </div>
  </div>
)

export default TopNavItem
