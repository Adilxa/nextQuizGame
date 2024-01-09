import axios from 'axios';
import React from 'react'
import { PropsWithChildren } from 'react';
import RemoveQuiz from './page';

async function getData() {
    const res = await axios.get("http://localhost:3001/quiz", {
        headers: {
            'Cache-Control': 'no-store',
        }
    })
    return res.data;
}

async function RemoveQuizLayout() {

    const data = await getData();

    return (
        <section>
            <div></div>
            <div><RemoveQuiz data={data} /></div>
        </section>
    )
}

export default RemoveQuizLayout