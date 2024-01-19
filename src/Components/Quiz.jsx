import { useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from '../assets/quiz-complete.png' ;
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length ;
  
  function handleSelectedAnswer(selectedAnswer) {
    // console.log("answer is filled") ;
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }
  
  if(quizIsComplete){
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    )
  }

  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswer.sort(() => Math.random() - 0.5) ;
  return (
    <div id="quiz">
      <div id="question">
      <QuestionTimer timeout={10000}  onTimeout={()=> handleSelectedAnswer(null)} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectedAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
