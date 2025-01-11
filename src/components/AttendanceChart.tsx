'use client'


import React from 'react';

import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 24,
    },
    {
        name: 'Tue',
        present: 30,
        absent: 13,
    },
    {
        name: 'Wed',
        present: 20,
        absent: 15,
    },
    {
        name: 'Thu',
        present: 27,
        absent: 39,
    },
    {
        name: 'Fri',
        present: 18,
        absent: 48,
    },
];


const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg h-full p-4'>
            <h1>Attendance</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20}/>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#EDF9FD'/>
                    <XAxis dataKey="name" tick={{fill: '#d1d5db'}} tickLine={false}/>
                    <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius: '10px', borderColor: '#ddd'}}/>
                    <Legend align='left' verticalAlign='top'
                            wrapperStyle={{paddingTop: '20px', paddingBottom: '40px'}}/>
                    <Bar dataKey="present" fill="#CFCEFF"
                         legendType='circle' radius={[10, 10, 0, 0]}/>
                    <Bar dataKey="absent" fill="#FAE27C"
                         legendType='circle' radius={[10, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;