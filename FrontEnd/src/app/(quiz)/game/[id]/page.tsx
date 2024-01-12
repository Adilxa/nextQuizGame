"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

function GameItem({ params }: { params: { id: string } }) {


    const { data, isLoading } = useQuery({
        queryKey: ["quiz"]
        , queryFn: () => axios.get("http://localhost:3001/quiz/" + params.id)
    })


    console.log(data?.data);

    const [isClick, setClick] = useState(false);


    return (
        <>
            {data?.data.answers?.map((el: any, i: number) => <li onClick={() => setClick(!isClick)} className={`${isClick && i == data.data.correct && "bg-red-500"}`} key={el}>{el}</li>)}
        </>
    )
}

export default GameItem;