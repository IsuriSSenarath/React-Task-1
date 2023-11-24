import React, { useEffect, useState } from 'react'
import ManageAdminSearchForm from './search-form';
import ManageAdminTable from './table';
import * as yup from 'yup';


const ManageAdmin = () => {
  const [searchData, setSearchData] = useState<any[]>([]);
  const initialValues = {
       id: '',
     };

     const validationSchema = yup.object({
      id: yup.number().max(100,'Maximum Character Length Exceeded').typeError('Must be a number')
     })
  const fetchData = () => {
    fetch( `https://jsonplaceholder.typicode.com/posts` )
    .then(response => response.json())
    .then(data => {
      setSearchData(data);
    })
    .catch(error => { 
      setSearchData([]);
    });
  };

  useEffect(() => {
    fetchData();
  }, 
  []);
  
    const handleSubmit = ( values: any ) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${values.id}`)
      .then(response => response.json())
      .then(data => { 
        setSearchData([data]);
      console.log('successful', data);
    })
    .catch (error => {
      setSearchData([]);
      console.error('error', error);
      
    });
  };   

    const handleReset = () => {
      fetchData();
    };
    
  return (
    <>
    <ManageAdminSearchForm
    initialValues={initialValues}
    onSubmit={handleSubmit}
    onReset={handleReset}
    />
    <ManageAdminTable data={searchData} />
    </>
  );
};
export default ManageAdmin ;
