import './index.css'

const technologiesList = [
  [
    'TECHNOLOGY',
    'Stack Overflow',
    'Server Fault',
    'Super User',
    'Web Applications',
    'Ask Ubuntu',
    'Webmasters',
    'Game Development',
    'TeX - LaTeX',
  ],
  [
    '',
    'Programmers',

    'Unix & Linux',

    'Ask Different (Apple)',

    'WordPress Development',

    'Geographic Information Systems',

    'Electrical Engineering',

    'Android Enthusiasts',

    '50+ more',
  ],
  [
    'LIFE/ARTS',

    'Photography',

    'Science Fiction & Fantasy',

    'Graphic Design',

    'Movies & TV',

    'Seasoned Advice (cooking)',

    'Home Improvement',

    'Personal Finance & Money',

    '19 more',
  ],
  [
    'CULTURE/RECREATION',

    'English Language & Usage',

    'Skeptics',

    'Mi Yodeya (Judaism)',

    'Travel',

    'Christianity',

    'Arqade (gaming)',

    'Bicycles',

    '21 more',
  ],
  [
    'SCIENCE',

    'Mathematics',

    'Cross Validated (stats)',

    'Theoretical Computer Science',

    'Physics',

    'MathOverflow',

    'Chemistry',

    'Biology',

    '5 more',
  ],
  [
    'OTHER',

    'Stack Apps',

    'Meta Stack Exchange',

    'Area 51',

    'Stack Overflow Careers',
  ],
]

const TechnologyItems = () => (
  <ul className="technologiesList1">
    {technologiesList.map(eachList => (
      <ul className="technologiesList2">
        {eachList.map(eachItem => {
          if (eachItem === '') {
            return <li className="technology1">{eachItem}</li>
          }
          return <li className="technology2">{eachItem}</li>
        })}
      </ul>
    ))}
  </ul>
)

export default TechnologyItems
