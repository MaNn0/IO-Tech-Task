import React from 'react'

// export default function List() {
//     return (
//         <div>
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-xl">
//                 <thead className="bg-gradient-to-r from-green-500 to-green-600">
//                     <tr>
//                         <th className="p-4 border-b border-gray-200 text-white font-semibold">
//                             #
//                         </th>
//                         <th className="p-4 border-b border-gray-200 text-white font-semibold">
//                             Title
//                         </th>
//                         <th className="p-4 border-b border-gray-200 text-white font-semibold">
//                             Description
//                         </th>
//                         <th className="p-4 border-b border-gray-200 text-white font-semibold">
//                             Modify
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {items.map((item) => (
//                         <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
//                             <td className="p-4 border-b border-gray-200 text-gray-700">
//                                 {item.id}
//                             </td>
//                             <td className="p-4 border-b border-gray-200 text-gray-700">
//                                 {item.title}
//                             </td>
//                             <td className="p-4 border-b border-gray-200 text-gray-700">
//                                 {item.body}
//                             </td>
//                             <td className="p-4 border-b border-gray-200">
//                                 <div className="flex justify-between items-center">
//                                     <Delete id={item.id} onDelete={handleDeleteItem} />
//                                     <Update />
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
