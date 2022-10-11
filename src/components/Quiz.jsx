import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { id, total, name, logo, questions } = quiz
    return (
        <div className='w-8/12 mx-auto my-5'>
            <h1 className='text-3xl font-bold text-amber-400 mb-7 underline'>Quiz of {name}</h1>

            <div>
                {questions.map(question =>
                    <div>
                        <h3 className='text-2xl font-bold text-gray-300'>Quiz: <span className='text-xl font-semibold text-white'>{question.question}</span></h3>

                        <div className='grid grid-cols-2 gap-5 text-black my-5 mx-10'>
                            <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                                <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                                <p className='ml-3'>{question.options[0]}</p>
                            </div>
                            <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                                <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                                <p className='ml-3'>{question.options[1]}</p>
                            </div>
                            <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                                <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                                <p className='ml-3'>{question.options[2]}</p>
                            </div>
                            <div className='flex justify-center items-center bg-slate-200 p-5 rounded-md'>
                                <input className='w-5 h-5' type="radio" id="html" name="fav_language" value="HTML" />
                                <p className='ml-3'>{question.options[3]}</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Quiz;