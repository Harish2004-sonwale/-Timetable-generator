 import { useMemo } from 'react'
 import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'

 export default function TimetableGrid({ data = [] }) {
   const columnHelper = createColumnHelper()
   const columns = useMemo(() => [
     columnHelper.accessor('slot', { header: 'Time Slot' }),
     columnHelper.accessor('class', { header: 'Class' }),
     columnHelper.accessor('subject', { header: 'Subject' }),
     columnHelper.accessor('teacher', { header: 'Teacher' }),
   ], [])

   const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

   return (
     <div className="overflow-x-auto border rounded">
       <table className="min-w-full divide-y divide-gray-200">
         <thead className="bg-gray-50">
           {table.getHeaderGroups().map(hg => (
             <tr key={hg.id}>
               {hg.headers.map(h => (
                 <th key={h.id} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {flexRender(h.column.columnDef.header, h.getContext())}
                 </th>
               ))}
             </tr>
           ))}
         </thead>
         <tbody className="bg-white divide-y divide-gray-200">
           {table.getRowModel().rows.map(row => (
             <tr key={row.id}>
               {row.getVisibleCells().map(cell => (
                 <td key={cell.id} className="px-4 py-2 whitespace-nowrap">
                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                 </td>
               ))}
             </tr>
           ))}
           {data.length === 0 && (
             <tr>
               <td className="px-4 py-6 text-center text-gray-500" colSpan={columns.length}>No timetable data.</td>
             </tr>
           )}
         </tbody>
       </table>
     </div>
   )
 }
