import React from "react";

type IQuizItem = {
    question: string,
    answers: string[]
    correct: number
}
interface IWindow {
    children: React.ReactNode | React.ReactElement;
    step: number;
    setStep: (_: number) => void;
    setPick: (_: boolean) => void;
    quizArr: IQuizItem[]
}

const GameWindow: React.FC<IWindow> = ({ children, step, setStep, setPick, quizArr }) => {

    const stepPlus = () => {
        if (step < quizArr.length) {
            setStep(step + 1);
        } else {
            return
        }
        setPick(false)
    }


    const stepBack = () => {
        if (step > 0) {
            setStep(step - 1)
        } else {
            return
        }
        setPick(false)
    }

    return (
        <div className="w-full p-20 bg-pink-300">
            <div>{children}</div>
            <div className="w-100 flex py-3 justify-between">
                <button onClick={() => stepBack()} className="w-30 h-30 flex justify-center items-center p-5 bg-red-400 rounded-full">Back</button>
                <button onClick={() => stepPlus()} className="w-30 h-30 flex justify-center items-center p-5 bg-green-400 rounded-full">Next</button>
            </div>
        </div>
    )
}


export default GameWindow;