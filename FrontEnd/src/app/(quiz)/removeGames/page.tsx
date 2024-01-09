"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface IGames {
    data: any;
}

function RemoveQuiz({ data }: IGames) {

    const onDeleteQuiz = async (id: any) => {
        const res = await axios.delete("http://localhost:3001/quiz/" + id)
            .finally(() => alert("deleted successfully"))

        console.log(res);

    }

    return (
        <div className='ml-2'>
            {data?.map((el: any) => (
                <li onClick={() => onDeleteQuiz(el.id)} key={el._id} className='text-white'>{el.question} | {el.id}</li>
            ))}
        </div>
    )
}

export default RemoveQuiz