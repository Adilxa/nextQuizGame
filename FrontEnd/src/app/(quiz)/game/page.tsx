"use client"
import GameForm from "@/components/gameForm"
import GameWindow from "@/components/gameWindow"
import axios from "axios"
import { useEffect, useState } from "react"

interface IGame {
    question: string;
    answers: string[]
    correct: number
}

const GamePage = () => {

    const [quizArr, setQuizArr] = useState<IGame[]>([])

    const [isLoading, setLoading] = useState(true)

    const [step, setStep] = useState(0);

    const getQuestions = async () => {
        try {
            const response = await axios.get("http://localhost:3001/quiz");
            setQuizArr(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getQuestions()
    }, [])


    const [pick, setPick] = useState(false);


    if (isLoading) return <div><h1>Loading...</h1></div>
    return (
        <section className="w-100 bg-green-200  h-full ">
            <GameWindow quizArr={quizArr} setStep={setStep} step={step} setPick={setPick}>
                <GameForm game={quizArr[step]} pick={pick} setPick={setPick} />
            </GameWindow>
        </section>
    )
}


export default GamePage