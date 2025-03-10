import { useState } from "react"
import QuestionCard from "./QuestionCard"
import Question from "../Data/Question"
import questionData from "../Data/questionData"
import GameEnd from "./GameEnd"

const GamePlay = () => {
    const [questions] = useState<Question[]>(questionData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnswerVisible, setIsAnswerVisible] = useState(false)

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setIsAnswerVisible(false)
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setIsAnswerVisible(false)
        }
    }

    return (
        <div className="game">
            <h2>LET'S PLAI</h2>
            <QuestionCard 
                question={questions[currentIndex]} 
                isAnswerVisible={isAnswerVisible} 
                setIsAnswerVisible={setIsAnswerVisible}
            />
            <div className="navigation-buttons">
                <button 
                    onClick={handlePrevious} 
                    disabled={currentIndex === 0}
                >Previous</button>
                <button 
                    onClick={handleNext} 
                    disabled={currentIndex === questions.length - 1}
                >Next</button>
            </div>
            {currentIndex === questions.length - 1 && <GameEnd />}
        </div>
    )
}

export default GamePlay