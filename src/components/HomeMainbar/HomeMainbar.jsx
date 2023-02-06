// import React from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'

// import './HomeMainbar.css'
// import QuestionList from './QuestionList'


// const HomeMainbar = () => {
//   const location = useLocation()
//   const user = 1;
//   const navigate = useNavigate()

//   var questionsList = [{
//     id: 1,
//     votes: 3,
//     noOdAnswers: 2,
//     questionTitle: "what is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java", "node js", "react js", "mongo" ],
//     userPosted: "mano",
//     askedOn: "jan 1"
//   },{
//     id: 2,
//     votes: 0,
//     noOfAnswers: 0,
//     questionTitle: "what is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["javascript", "R", "react js", "python" ],
//     userPosted: "mano",
//     askedOn: "jan 1"

//   },{
//     id: 3,
//     votes: 1,
//     noOdAnswers: 0,
//     questionTitle: "what is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "mano",
//     askedOn: "jan 1"
//   }
// ]
// const checkAuth = () => {
//   if(user === null){
//     alert("login or signup to ask a question")
//     navigate('/Auth')
//   }else{
//     navigate('/AskQuestion')
//   }
//   }
//   return (
//     <div className='main-bar'>
//       <div className='main-bar-header'>
//         {
//           location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
//         }
//         <button className='ask-btn'>Ask Question</button>
//       </div>
//       <div>
//         {
//           questionsList === null ?
//           <h1>Loading...</h1> :
//           <>
//           <p>{ questionsList.length } questions</p>
//           <QuestionList questionsList={questionsList} />
//           </>
//         }
//       </div>
      
//     </div>
//   )
// }

// export default HomeMainbar

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    const checkAuth = () => {
      if(user === null){
          alert("login or signup to ask a question")
          navigate('/Auth')
      }else{
          navigate('/AskQuestion')
      }
  }

  return (
      <div className='main-bar'>
          <div className='main-bar-header'>
              {
                  location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
              }
              <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
          </div>
          <div>
              {
                  questionsList.data === null ?
                  <h1>Loading...</h1> :
                  <>
                      <p>{ questionsList.data.length } questions</p>
                      <QuestionList questionsList={questionsList.data} />
                  </>
              }
          </div>
      </div>
  )
}

export default HomeMainbar