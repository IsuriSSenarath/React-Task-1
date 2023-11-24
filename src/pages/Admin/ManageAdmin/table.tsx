import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface ApiData {
  userId:number;
  id: number;
  title: string;
  body: string;
}

interface ManageAdminTableProps {
  data: ApiData[];
}

const ManageAdminTable: React.FC<ManageAdminTableProps> = ({data}) => {
  

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
