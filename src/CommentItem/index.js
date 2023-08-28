import {FaPencilAlt} from 'react-icons/fa'
import {AiOutlineLike, AiOutlineFilePdf} from 'react-icons/ai'
import {MdOutlineModeComment} from 'react-icons/md'
import {ImEye} from 'react-icons/im'

import './index.css'

const commentList = [
  {
    questionName: 'qsub disregarded memory limit',
    skills: ['memory', 'pub', 'qsub'],
    getEditIcon() {
      return <FaPencilAlt className="pencil" />
    },
    answerInformation: 'modified 1 min ago',
    userName: 'clusterdude 322',
    count1: '0',
    count2: '1',
    count3: '7',
    isAnswerSelected1: false,
    isAnswerSelected2: false,
  },
  {
    questionName:
      'javascript function rotate element => trying to set an IF condition for a specific parameter passed in',
    skills: ['java script', 'jquery', 'css'],
    getEditIcon() {
      return <AiOutlineFilePdf className="pencil" />
    },
    answerInformation: 'answered 47 secs ago',
    userName: ' Ziv Weissman 1,880',
    count1: '2',
    count2: '1',
    count3: '38',
    isAnswerSelected1: false,
    isAnswerSelected2: false,
  },
  {
    questionName: 'How to select the current date row from multiple date rows',
    skills: ['c#', 'data table', 'bulk insert'],
    getEditIcon() {
      return <AiOutlineFilePdf className="pencil" />
    },
    answerInformation: 'modified 1 min ago',
    userName: 'Pawel Dyl 146',
    count1: '0',
    count2: '6',
    count3: '14',
    isAnswerSelected1: true,
    isAnswerSelected2: true,
  },
  {
    questionName: 'Coalescing NSNotifications',
    skills: ['objective-c'],
    getEditIcon() {
      return <AiOutlineFilePdf className="pencil" />
    },
    answerInformation: 'answered 2 mins ago',
    userName: 'Pierre Bernard 2,608',
    count1: '2',
    count2: '1',
    count3: '19',
    isAnswerSelected1: false,
    isAnswerSelected2: false,
  },
  {
    questionName: 'Change tabs & contents of tab programmatically in Jquery',
    skills: ['jQuery', 'jQuery-UI', 'Java script'],
    getEditIcon() {
      return <FaPencilAlt className="pencil" />
    },
    answerInformation: 'modified 2 mins ago',
    userName: 'Xzen TorXz 1,059',
    count1: '0',
    count2: '2',
    count3: '6',
    isAnswerSelected1: true,
    isAnswerSelected2: false,
  },
  {
    questionName: 'Subset of dictionary keys',
    skills: ['c#', 'data table', 'bulk insert'],
    getEditIcon() {
      return <AiOutlineFilePdf className="pencil" />
    },
    answerInformation: 'answered 1 min ago',
    userName: 'Pawel Dyl 146',
    count1: '4',
    count2: '3',
    count3: '43',
    isAnswerSelected1: true,
    isAnswerSelected2: false,
  },
]

const CommentItem = () => (
  <ul>
    {commentList.map(eachItem => {
      const getAnswerClsValue = () => {
        let result
        if (eachItem.isAnswerSelected1 && eachItem.isAnswerSelected2) {
          result = {
            cls1: 'comment-count-container2',
            cls2: 'comment-count2',
            cls3: 'type-of-comment2',
            cls4: 'comment-icon2',
          }
        } else if (eachItem.isAnswerSelected1 || eachItem.isAnswerSelected2) {
          result = {
            cls1: 'comment-count-container3',
            cls2: 'comment-count2',
            cls3: 'type-of-comment2',
            cls4: 'comment-icon2',
          }
        } else {
          result = {
            cls1: 'comment-count-container1',
            cls2: 'comment-count1',
            cls3: 'type-of-comment1',
            cls4: 'comment-icon1',
          }
        }

        return result
      }

      const answerClsValue = getAnswerClsValue()
      const {cls1, cls2, cls3, cls4} = answerClsValue

      return (
        <li>
          <div className="comments-container">
            <div>
              <p className="question-name">{eachItem.questionName}</p>
              <div className="skill-container">
                {eachItem.skills.map(eachSkill => (
                  <p id="skill">{eachSkill}</p>
                ))}
              </div>
              <div className="answer-container">
                {eachItem.getEditIcon()}
                <p className="answer-information">
                  {eachItem.answerInformation}{' '}
                  <span className="user">{eachItem.userName}</span>
                </p>
              </div>
            </div>
            <div className="comment-count-container">
              <div className="comment-count-container1">
                <p className="comment-count">{eachItem.count1}</p>
                <p className="type-of-comment">votes</p>
                <AiOutlineLike className="comment-icon" />
              </div>
              <div id={cls1}>
                <p id={cls2}>{eachItem.count2}</p>
                <p id={cls3}>answer</p>
                <MdOutlineModeComment id={cls4} />
              </div>
              <div className="comment-count-container1">
                <p className="comment-count">{eachItem.count3}</p>
                <p className="type-of-comment">views</p>
                <ImEye className="comment-icon" />
              </div>
            </div>
          </div>
          <hr className="hr" />
        </li>
      )
    })}
  </ul>
)

export default CommentItem
