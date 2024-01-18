import React from 'react'
import quizImage from '../assets/quiz-logo.png'
function Header() {
  return (
    <header>
        <img src={quizImage} alt="" />
        <h1>React Quiz app</h1>
    </header>
  )
}

export default Header