import React, { useState } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import delet from './assets/DeleteIcon.svg';
import edit from './assets/EditIcon.svg';

const AccountTable = ({ rows, deleteRow, editRow }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.partyName.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <>
      <div>
      <div className="py-3 px-4 w-1/3">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by name..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
            />
          </div>
        <div className="relative h-96 bg-white overflow-x-auto shadow-md sm:rounded-lg">
          {/* Add the search field */}
         

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-[#f7f6ff] dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 border-r">
                    #
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Party Name
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Mobile Number
                </th>
                <th scope="col" className="px-6 py-3 border-r">
                    Gold
                </th>
                <th scope="col" className="px-6 py-3border-r">
                    Silver
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
         
            {filteredRows.map((row, idx) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={idx}
                >
                  <td className="px-6 text-lg py-4 border-r">{idx+1}</td>
                  <td className="px-6 text-lg py-4 border-r">{row.partyName}</td>
                  <td className="px-6 text-lg py-4 border-r">{row.mobileNumber}</td>
                  <td className="px-6 text-lg text-[#bc5c5c] py-4 border-r">{row.gold}</td>
                  <td className="px-6 text-lg text-[#bc5c5c] py-4 border-r">{row.silver}</td>
                  <td className="px-6 text-lg text-[#90ba38] py-4 border-r">{row.amount}</td>
                  <td className="px-6 text-lg py-4 border-r flex gap-3">
                    
                    <img src={edit} onClick={() => editRow(idx)} alt="" />
                    <img src={delet} onClick={() => deleteRow(idx)} alt="" />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default AccountTable;
