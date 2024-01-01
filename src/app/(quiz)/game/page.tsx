"use client"
import GameForm from "@/components/gameForm"
import GameWindow from "@/components/gameWindow"
import { useState } from "react"

const GamePage = () => {

    const quizArr = [
        { question: "how Adilhan old is?", answers: ["10", "20", "19"], correct: 3 },
        { question: "Whats color of the sun?", answers: ["green", "yellow", "red"], correct: 2 }
    ]


    const [step, setStep] = useState(0);

    const [pick, setPick] = useState(false)

    return (
        <section className="w-100 bg-green-200  h-full ">
            <GameWindow setStep={setStep} step={step} setPick={setPick}>
                <GameForm game={quizArr[step]} pick={pick} setPick={setPick} />
            </GameWindow>
        </section>
    )
}


export default GamePage