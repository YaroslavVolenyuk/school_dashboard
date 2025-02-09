import React from 'react';

type ColumnType = {
    columns: {
       header: string;
       accessor: string;
       className?: string;
   }[],
    renderRow: (item: any) => React.ReactNode,
    data: any[]
}


const Table = ({columns, renderRow, data}: ColumnType) => {
    return (
        <div>
            <table className='w-full mt-r'>
                <thead>
                <tr className='text-left text-gray-500 text-sm'>
                    {columns.map((column) => (
                        <th key={column.accessor} className={column.className}>{column.header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>{data.map(item => renderRow(item))}</tbody>
            </table>

        </div>
    );
};

export default Table;