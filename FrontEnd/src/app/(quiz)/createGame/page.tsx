"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface IGame {
    question: string;
    answers: string[];
    correct: string;
}

const CreateNewGame = () => {

    const router = useRouter()


    const [quizData, setQuizData] = useState<IGame>({
        question: "hello",
        answers: [""],
        correct: "1",
    });

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...quizData.answers];
        newAnswers[index] = value;

        setQuizData((prevQuizData) => ({
            ...prevQuizData,
            answers: newAnswers,
        }));
    };

    const addNewAnswer = () => {
        setQuizData((prevQuizData) => ({
            ...prevQuizData,
            answers: [...prevQuizData.answers, ""],
        }));
    };

    const randomId = (): number => {
        return Math.floor(Math.random() * Date.now())
    }


    const onSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/quiz", {
                ...quizData,
                id: randomId(),
            }).then(() => router.push("/game"));

        } catch (error) {
            console.error("Error during submission:", error);
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-4/12 mx-auto bg-white flex flex-col gap-3 p-3">
            <input
                onChange={(e) => setQuizData({ ...quizData, question: e.target.value })}
                className="border-2 border-black text-black"
                value={quizData.question}
            />
            <input
                type="number"
                onChange={(e) => setQuizData({ ...quizData, correct: e.target.value })}
                className="border-2 border-black text-black"
                value={quizData.correct}
            />
            <p className="text-black">Answers</p>
            {quizData.answers.map((el, i) => (
                <input
                    key={i}
                    onChange={(e) => handleAnswerChange(i, e.target.value)}
                    value={quizData.answers[i]}
                    className="border-2 border-black text-black"
                />
            ))}
            <button type="button" className="text-black" onClick={addNewAnswer}>
                Add Answer
            </button>
            <button className="text-black">Save</button>
        </form>
    );
};

export default CreateNewGame;
