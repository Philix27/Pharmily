// import React,  {useState, useEffect, useMemo} from 'react';
// import { useTable } from 'react-table';
// // import { COLUMNS } from './columns';
// import Axios from 'axios';
// import {BASEURL, API_VERSION} from '../Essentials/baseurl'

// export const COLUMNS = [
//     {
//         Header: 'title',
//         accessor: 'title',
//     },
//     {
//         Header: 'story',
//         accessor: 'story',
//     },
//     {
//         Header: 'subtitle',
//         accessor: 'subtitle',
//     }
// ]

// const DrugList = () => {
//     const apiurlLocal = BASEURL + API_VERSION + 'drugList';

//     const [blogList, setblogList] =  useState([]);
     
//     useEffect(() => {
//         Axios.get(apiurlLocal).then((response) => {
//             setblogList(response.data.blog);
          
//       }).catch(() => {
//         console.log("Opps an error ocured - Local");
//       });
//     }, []);


//     //! Table Hooks

//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => blogList, []);

//     const tableInstance = useTable({ columns, data });
    
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//      } = tableInstance;
  
//     return (
//         <div>
//             <table {...getTableProps()}>
//                 <thead>
//                     {
//                         headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {
//                                     headerGroup.headers.map((column) => (
//                                         <th {...column.getHeaderProps()}>
//                                             {column.render('Header')}
//                                         </th>
//                                     ))
//                                 }
//                         </tr>
//                         ))
//                     }
                    
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {
//                         rows.map((row) => {
//                             prepareRow(row)
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {
//                                         row.cells.map((cell) => {
//                                             return <td {...cell.getCellProps()}>
//                                                 {cell.render('Cell')}
//                                             </td>
//                                         })
//                                     }
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Basictable;
