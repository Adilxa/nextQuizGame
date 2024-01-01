import { PropsWithChildren } from 'react';

const QuizLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <section className='  flex-col flex'>
            <div className=' w-100 bg-red-300'>Quiz Layout</div>
            <div>{children}</div>
        </section>
    )
}

export default QuizLayout;