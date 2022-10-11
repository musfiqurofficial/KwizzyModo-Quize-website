import React, { useContext } from 'react';
import { TopicContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const quizTotal = useContext(TopicContext);
    console.log(quizTotal)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <LineChart width={600}
                height={300}
                data={quizTotal}>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default Statistics;