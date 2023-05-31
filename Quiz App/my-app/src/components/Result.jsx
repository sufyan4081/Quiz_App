import React from 'react'
import '../App.css'

const Result = (props) => {
    return (
        <div className='container'>
            <div className="result-box">
                <tr>
                    <td>
                        <span>Total Questions :</span>
                    </td>
                    <td>
                        <span> {props.totalQuestion + 1}</span>
                    </td>

                </tr>
                <tr>

                    <td>
                        <span>Score :</span>
                    </td>
                    <td>
                        <span> {props.score}</span>
                    </td>

                </tr>
                <tr>

                    <td>
                        <span>Correct Answer :</span>
                    </td>
                    <td>
                        <span> {props.score}/{props.totalQuestion + 1}</span>
                    </td>

                </tr>
                <tr>

                    <td>
                        <span>Incorrect Answer :</span>
                    </td>
                    <td>
                        <span> {props.Incorrect}/{props.totalQuestion + 1}</span>
                    </td>

                </tr>

                <div className="next-btn">
                    <button onClick={() => props.restAll()}>TryAgain</button>
                </div>
            </div>
        </div>
    )
}

export default Result
