"use client"
import GameForm from "@/components/gameForm"
import GameWindow from "@/components/gameWindow"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery, useIsFetching } from "@tanstack/react-query"

interface IGame {
    question: string;
    answers: string[]
    correct: number
}

const GamePage = () => {

    const [step, setStep] = useState(0);

    const { data, isLoading, isError, isSuccess } = useQuery<IGame | any>({
        queryKey: ["quizs"],
        queryFn: () => axios.get("http://localhost:3001/quiz")
    })

    const [pick, setPick] = useState(false);

    if (isError) return <div>404</div>
    if (isLoading) return <div><h1>Loading...</h1></div>
    return (
        <section className="w-100 bg-green-200  h-full ">
            <GameWindow quizArr={data.data} setStep={setStep} step={step} setPick={setPick}>
                <GameForm game={data.data[step]} pick={pick} setPick={setPick} />
            </GameWindow>
        </section>
    )
}


export default GamePage