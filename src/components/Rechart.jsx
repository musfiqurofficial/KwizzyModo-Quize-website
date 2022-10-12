import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const Rechart = ({ totalQ }) => {
    const { id, total } = totalQ;
    console.log(total);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={totalQ}>
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Rechart;