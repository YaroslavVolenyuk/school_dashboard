'use client'

import React from 'react';
import Image from "next/image";


import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,

    }, {
        name: 'Feb',
        income: 400,
        expense: 800,

    }, {
        name: 'Mar',
        income: 3000,
        expense: 200,

    }, {
        name: 'Apr',
        income: 1000,
        expense: 800,

    }, {
        name: 'May',
        income: 1500,
        expense: 100,

    }, {
        name: 'Jun',
        income: 500,
        expense: 1500,

    }, {
        name: 'Jul',
        income: 5235,
        expense: 456,

    }, {
        name: 'Sept',
        income: 5647,
        expense: 3456,

    }, {
        name: 'Okt',
        income: 2345,
        expense: 235,

    }, {
        name: 'Nov',
        income: 3467,
        expense: 432,

    }, {
        name: 'Dec',
        income: 4562,
        expense: 2354,

    },

];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20}/>
            </div>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" stroke='#ccc' axisLine={false} tickLine={false} tickMargin={5}/>
                        <YAxis stroke='#ccc' axisLine={false} tickLine={false} tickMargin={5} />
                        <Tooltip/>
                        <Legend align='center' verticalAlign='top'
                                wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}}/>
                        <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="expense" stroke="#82ca9d"/>
                    </LineChart>
                </ResponsiveContainer>
        </div>
    );
};

export default FinanceChart;