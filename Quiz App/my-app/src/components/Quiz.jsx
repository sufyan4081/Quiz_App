import React, { useState } from 'react'
import '../App.css'
import { QuizData } from '../Data/Data.js'
import Result from './Result'


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [clickOption, setClickOption] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [Incorrect, setInCorrect] = useState(0)

    const changeOption = () => {
        updateScore();

        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }

        else {
            setShowResult(true)
        }

    }

   
    const updateScore = () => {
        if (clickOption === QuizData[currentQuestion].answer) {
            setScore(score + 1)
        }
        else {
            setInCorrect(Incorrect + 1)
        }
    }


    const restAll = () => {
        setCurrentQuestion(0)
        setClickOption(0)
        setScore(0)
        setInCorrect(0)
        setShowResult(false)
    }
    return (
        <div className='container'>
            {showResult ? <Result score={score} totalQuestion={QuizData.length - 1} Incorrect={Incorrect} restAll={() => restAll()} /> : (
                <div className="box">
                    <div className="header">
                        <span>{currentQuestion + 1}.&nbsp;</span>
                        <span>{QuizData[currentQuestion].question}</span>
                    </div>
                    <div className="options">
                        {QuizData[currentQuestion].options.map((items, i) => (
                            <button className='opt-btn' key={i} onClick={() => { setClickOption(i + 1) }}>{items}</button>
                        ))}
                    </div>
                    <div className="next-btn">
                        <button onClick={() => changeOption()}>Next</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Quiz
