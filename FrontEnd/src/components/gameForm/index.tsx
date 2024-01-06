"use client"
import { useEffect, useState } from "react";

interface IGame {
    game: {
        question: string;
        answers: string[]
        correct: number
    }
    pick: boolean;
    setPick: (_: boolean) => void
}

const GameForm: React.FC<IGame> = ({ game, pick, setPick }) => {

    const [correctAnsw, setCorrectAnsw] = useState(0);

    const pickAnswer = (index: number) => {
        setPick(true);
        if (game.correct === index) {
            setCorrectAnsw(correctAnsw + 1)
            alert("Correct")
        } else {
            alert("Not Correct")
        }
        return true
    }

    useEffect(() => {
        if (pick) {
            const pickedItem = document.getElementById("picked");
            if (pickedItem) {
                pickedItem.style.backgroundColor = "red";
            }
            return () => {
                if (pickedItem) {
                    pickedItem.style.backgroundColor = "white";
                }
            };
        }
    }, [pick]);

    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    if (game == undefined || null) return (
        <div className="w-full bg-green-200 p-2 flex justify-center flex-col">
            <h1 className="text-xl text-black text-center">Questions are finished!!!</h1>
        </div>
    )

    return (
        <div className="w-full bg-green-200 p-2 flex justify-center flex-col">
            <h1 className="text-2xl text-red-400 font-bold flex  justify-between pl-2">{game.question} <button onClick={() => speak(game.question)}>Speak</button></h1>
            <div>
                {
                    pick
                        ?
                        game.answers.map((el: string, i: number) => (
                            <div id={i + 1 == game.correct ? "picked" : ""} key={i} className={`bg-white m-2 p-1 text-black cursor-pointer ${pick && i + 1 === game.correct ? "bg-green-300" : " bg-gray-400"}`}>
                                {i + 1}) {el}
                            </div>
                        ))
                        :
                        game.answers.map((el: string, i: number) => (
                            <div id={i + 1 == game.correct ? "picked" : ""} key={i} onClick={() => pickAnswer(i + 1)} className="bg-white m-2 p-1 text-black cursor-pointer">
                                {i + 1}) {el}
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default GameForm