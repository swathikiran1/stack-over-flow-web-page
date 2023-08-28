import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    jobName,
    websiteName,
    salary,
    locationIcon,
    location,
    workingLocationIcon,
    workingLocation,
    skill1,
    skill2,
  } = jobDetails

  const isContainSalary = salary !== ''
  const salaryClsValue = isContainSalary ? 'salary1' : 'salary2'

  return (
    <li className="job-list">
      <div className="job-container">
        <p className="job-name">{jobName}</p>
        <p className="website-name">{websiteName}</p>
        <p className={salaryClsValue}>{salary}</p>
        <div className="location-container">
          <div className="location-container1">
            {locationIcon()}
            <p className="location">{location}</p>
          </div>
          <div className="location-container1">
            {workingLocationIcon()}
            <p className="location">{workingLocation}</p>
          </div>
        </div>
        <div className="skill-container">
          <p className="skill">{skill1}</p>
          <p className="skill">{skill2}</p>
        </div>
        <hr />
      </div>
    </li>
  )
}

export default JobItem
