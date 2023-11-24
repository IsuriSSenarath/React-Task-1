import React, { useEffect } from 'react'
import ManageAdminSearchForm from './search-form';
import ManageAdminTable from './table';


const ManageAdmin = () => {

  const initialValues = {
      id: '',
    };
    const handleSubmit = ( values: any ) => {
      fetch('https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(response => response.json())
    .then(data => { 
      console.log('successful', data);
    })
    .catch (error => {
      console.error('error', error);
      
    });
  };
      
    

    const handleReset = () => {

    };
    
  return (
    <>
    <ManageAdminSearchForm
    initialValues={initialValues}
    onSubmit={handleSubmit}
    onReset={handleReset}
    />
    <ManageAdminTable />
    </>
  );
};
export default ManageAdmin ;
