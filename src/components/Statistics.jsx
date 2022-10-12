
// import React, { useContext } from 'react';
// import { TopicContext } from './Root';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


// const Statistics = () => {
//     const quizTotal = useContext(TopicContext);
//     console.log(quizTotal)
//     return (
//         <div className='px-4 py-5 mx-auto w-8/12'>
//             <LineChart width={700}
//                 height={500}
//                 data={quizTotal}>
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="total" stroke="#82ca9d" />
//             </LineChart>

//         </div>
//     );
// };

// export default Statistics;


import { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TopicContext } from './Root';

const Statistics = () => {
    const quizTotal = useContext(TopicContext);
    return (
        <div className='mb-10' style={{ width: '100%' }}>
            <h4 className='text-xl font-semibold mt-5 mb-5'>This Chart will show the total topic!</h4>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    width={500}
                    height={300}
                    data={quizTotal}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;