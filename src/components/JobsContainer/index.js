import {MdLocationOn} from 'react-icons/md'
import {FaGlobeAfrica} from 'react-icons/fa'
import {HiBuildingOffice} from 'react-icons/hi2'
import {FiChevronRight} from 'react-icons/fi'
import JobItem from '../JobItem'
import NetworkQuestions from '../NetworkQuestions'

import './index.css'

const jobsList = [
  {
    id: 1,
    jobName: 'Front End Developer with Angular',
    websiteName: 'WalletHub',
    salary: '',
    locationIcon() {
      return <MdLocationOn className="icon" />
    },
    location: 'Washington, DC',
    workingLocationIcon() {
      return <FaGlobeAfrica className="icon" />
    },
    workingLocation: 'Remote',
    skill1: 'angular js',
    skill2: 'cordova',
  },
  {
    id: 2,
    jobName: 'Senior IOS/iPhone Engineer',
    websiteName: 'Perk.com INC.',
    salary: '',
    locationIcon() {
      return <MdLocationOn className="icon" />
    },
    location: 'Bengaluru, India',
    workingLocationIcon() {
      return <HiBuildingOffice className="icon" />
    },
    workingLocation: 'In Office',
    skill1: 'iOS',
    skill2: 'iPhone',
  },
  {
    id: 3,
    jobName: 'Software Engineer',
    websiteName: 'SparkNET Technologies',
    salary: '$25,000 - $40,000',
    locationIcon() {
      return <MdLocationOn className="icon" />
    },
    location: 'No Location',
    workingLocationIcon() {
      return <FaGlobeAfrica className="icon" />
    },
    workingLocation: 'Remote',
    skill1: 'iOS',
    skill2: 'ruby on rails',
  },
]

const JobsContainer = () => (
  <div className="jobs-container">
    <h1 className="heading">Looking out for...</h1>
    <ul className="jobs-list">
      {jobsList.map(eachItem => (
        <JobItem jobDetails={eachItem} />
      ))}
    </ul>
    <div className="view-jobs-container">
      <p className="view-jobs">VIEW ALL JOBS</p>
      <FiChevronRight id="arrow" />
    </div>
    <NetworkQuestions />
  </div>
)

export default JobsContainer
