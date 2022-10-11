import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    
    const { id, total, name, logo, questions, } = quiz
    return (
        <div className='w-8/12 mx-auto my-5'>
            <h1 className='text-3xl font-bold text-amber-400 mb-7 underline'>Quiz of {name}</h1>
            <div>
                {
                    questions.map(question => <SingleQuiz key={question.id} qus={question}></SingleQuiz>)}
            </div>
        </div >
    );
};

export default Quiz;