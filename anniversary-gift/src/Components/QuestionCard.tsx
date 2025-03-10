import Question from "../Data/Question"
import { Dispatch, FC, SetStateAction } from "react"

interface Props {
    question: Question
    isAnswerVisible: boolean 
    setIsAnswerVisible: Dispatch<SetStateAction<boolean>>
}

const QuestionCard: FC<Props> = ({ question, isAnswerVisible, setIsAnswerVisible }) => {

    const handleCardClick = () => {
        setIsAnswerVisible((prev) => !prev)
    }

    return (
        <div className="questions">
            <div className="question-card" onClick={handleCardClick}>
                {!isAnswerVisible && <p>Question: {question.q}</p>}
                {isAnswerVisible && <p>Answer: {question.answer}</p>}
            </div>
        </div>
    )
}

export default QuestionCard