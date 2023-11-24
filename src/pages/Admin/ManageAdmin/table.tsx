import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface ApiData {
  userId:number;
  id: number;
  title: string;
  body: string;
}

const ManageAdminTable: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{margin: '16px'}}>
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>User ID</TableCell>            
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.userId}</TableCell>              
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ManageAdminTable;
