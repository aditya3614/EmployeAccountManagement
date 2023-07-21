import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AccountTable from './components/Table';
import Modal from './components/Model';
import Sidebar from './components/sidebar';
import TopContent from './components/topContent';




function App() {
     const [value, setValue] = React.useState(2);
     const [modalOpen, setModalOpen] = useState(false);

     const [rows,setRows]=useState([
      {
        partyName:'chdi',mobileNumber:32123,gold:3212,silver:213,amount:123312,
      },{
        partyName:'chandu',mobileNumber:32123,gold:3212,silver:213,amount:123312
      }
     ]);
     const [rowToEdit, setRowToEdit] = useState(null);
     const handleEditRow = (idx) => {
      setRowToEdit(idx);
      console.log("chla")
      setModalOpen(true);
      console.log(modalOpen)
    };

     const handleDeleteRow = (targetIndex) => {
      setRows(rows.filter((_, idx) => idx !== targetIndex));
    };
    const handleSubmit = (newRow) => {
      rowToEdit === null
        ? setRows([...rows, newRow])
        : setRows(
            rows.map((currRow, idx) => {
              if (idx !== rowToEdit) return currRow;
  
              return newRow;
            })
          );
    };
  
  

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'start',minHeight:'100vh'}}>
    <Sidebar/>
  

    

  <div className='flex-1 bg-white  border-2 flex-col'>
  <TopContent setModalOpen={setModalOpen}/>
<div className='flex-1 bg-[#f9f9f9] px-14 flex-col'>
  
<div className=''>
<AccountTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
</div>

    

      {modalOpen && (
        <Modal
        modalTarget="authentication-modal" modalToggle="authentication-modal"
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}



   
</div>
</div>  
</Box>

  );
}

export default App;
