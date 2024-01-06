import axios from 'axios';
import { PropsWithChildren } from 'react';
import { Redirect } from 'next';

// const fetchData = async () => {
//     const res = await axios.get("http://localhost:3001/quiz", {
//         headers: {
//             'Cache-Control': 'no-store',
//         }
//     })
//     return res.data;
// }

async function QuizLayout({ children }: PropsWithChildren<unknown>) {

    // const data = await fetchData();

    return (
        <section className='  flex-col flex'>
            <div className=' w-100 bg-red-300'>Quiz Layout</div>
            <div>{children}</div>
        </section>
    )
}

export default QuizLayout;