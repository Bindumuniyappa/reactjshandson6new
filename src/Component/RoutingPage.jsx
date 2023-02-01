import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactusPage from './ContactusPage';
import HomePage from './HomePage';
import Table from './Table';
import DataContext from './DataContext';
import EditPage from './EditPage';
import AddNewStudent from './AddNewStudent';

function RoutingPage() {
    const [data, setData] = useState([]);

  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='tablepage' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table/>
         </DataContext.Provider>
      }/>
    <Route path='editpage' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <EditPage/>
        </DataContext.Provider>}/>

     <Route path='addnewstudent' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <AddNewStudent/>
        </DataContext.Provider>}/>    

    <Route path='contactuspage' element={<ContactusPage/>}/>
       
    </Routes>
    </>
  )
    }

export default RoutingPage;