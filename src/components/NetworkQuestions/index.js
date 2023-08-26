import './index.css'

const questionsList = [
  {
    id: 1,
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0194/3447/products/white_blue_H.png?v=1585925577',
    question:
      'Were there women who were against giving women the right to vote?',
  },
  {
    id: 2,
    imgUrl:
      'http://www.finsmes.com/wp-content/uploads/2020/07/Stack-Overflow.png',
    question: 'Why does everybody typedef over standard C types?',
  },
  {
    id: 3,
    imgUrl:
      'https://tse4.mm.bing.net/th?id=OIP.WCJkemy_n2wnghBa53oS2AHaHa&pid=Api&P=0&h=180',
    question: 'An English word describing a pseudo-job',
  },
  {
    id: 4,
    imgUrl:
      'https://i.pinimg.com/originals/ab/9d/16/ab9d160d211535fb7d23625be2a2884e.png',
    question:
      'When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?',
  },
  {
    id: 5,
    imgUrl:
      'https://tse2.mm.bing.net/th?id=OIP.iHHmkJ7KCXFk8ZHR158fBwHaHj&pid=Api&P=0&h=180',
    question: 'Does 1 pixel have a standard size?',
  },
]

const NetworkQuestions = () => (
  <div className="questions-container">
    <h1 className="heading">Network questions</h1>
    <ul>
      {questionsList.map(eachItem => (
        <li>
          <div id="question-container">
            <img src={eachItem.imgUrl} className="image1" alt="icon" />
            <p className="question1">{eachItem.question}</p>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  </div>
)

export default NetworkQuestions
