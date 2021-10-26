import React,  {useState, useEffect, useMemo} from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { GlobalFilter } from './GlobalFilter';



const Basictable = ({searchPlaceholder, tableDataList, tableColumns}) => {
  

    //! Table Hooks

    const columns = useMemo(() => tableColumns, []);
    const data = useMemo(() => tableDataList, []);

    const tableInstance = useTable({ columns, data }, useGlobalFilter);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
     } = tableInstance;
     
    const { globalFilter } = state;
    
    return (
        <div className="center">
           
            <GlobalFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
                placeholder={searchPlaceholder}
            />
           
            <br/>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                           
                                        </th>
                                    ))
                                }
                        </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Basictable;
