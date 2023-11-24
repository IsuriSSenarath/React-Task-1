import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../../../styling/Grid.css';

interface ApiData {
  userId:number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id',
    headerName: 'ID',
 },
 { field: 'userId',
    headerName: 'User ID',
 },
 { field: 'title',
    headerName: 'Title',
    width:300
 },
 { field: 'body',
    headerName: 'Body',
    width:1000,
    
 }
];

interface ManageAdminTableProps {
  data: ApiData[];
}

const ManageAdminTable: React.FC<ManageAdminTableProps> = ({data}) => {
  const rows = data.map((item) => ({
    id: item.id,
    userId: item.userId,
    title: item.title,
    body: item.body
  }));

  return (
    <div style={{margin: '16px'}}>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}

      />
    </div>
  );
};

export default ManageAdminTable;
