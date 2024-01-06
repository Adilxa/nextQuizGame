"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

function GameItem({ params }: { params: { id: string } }) {

    const [quizArr, setQuizArr] = useState<any>([])


    const getQuestions = async () => {
        try {
            const response = await axios.get("http://localhost:3001/quiz/" + params.id);
            setQuizArr(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    useEffect(() => {
        getQuestions()
    }, [])

    console.log(quizArr);

    const [isClick, setClick] = useState(false);


    return (
        <>
            {quizArr.answers?.map((el: any, i: number) => <li onClick={() => setClick(!isClick)} className={`${isClick && i == quizArr.correct && "bg-red-500"}`} key={el}>{el}</li>)}
        </>
    )
}

export default GameItem;