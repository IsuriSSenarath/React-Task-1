import React, { useEffect } from 'react'
import ManageAdminSearchForm from './search-form';
import ManageAdminTable from './table';
import { useFormik } from 'formik';
import { getAllUserId } from '../../../apis/adminData';
import useAsync from '../../../hooks/useAsync';

const ManageAdmin = ({}:any) => {

  //User ID Dropdown
  const {
    run: userIDRun,
    data: userIDData,
    isSuccess: userIDIsSuccess,
    isLoading: userIDIsLoading,
  } = useAsync<void>(getAllUserId);

  const userIDArray: any[] = [];

// if (userIDIsSuccess && userIDData?.data) {
//   userIDData.data.map((item: any) => {
//     userIDArray.push({
//       key: item.id,
//       value: `${item.name}`,
//     });
//   });
// }

// useEffect(() => {
//   userIDRun(getAllUserId());
// }, []);

console.log('userIdData',userIDData)
  

  const formik = useFormik({
    initialValues: {
      userId: '',
      id: '',
    },
    onSubmit: (values) => {
      
      console.log('Form submitted with values:', values);
    },
    
  });

  const getAdmin = () => {
    const data: any = formik.values;
  };
  return (
    <>
    <ManageAdminSearchForm
    formik={formik}
    />
    <ManageAdminTable />
    </>
  );
};
export default ManageAdmin ;
