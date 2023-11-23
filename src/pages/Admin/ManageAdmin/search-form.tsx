import React from 'react';

import { Button, FormControl, Grid } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';

const ManageAdminSearchForm = ({
  formik
}: any) => {
  
  const options = Array.from({ length: 10 }, (_, index) => index + 1);


  

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Select
              name="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
              placeholder="User Id"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 600,
                [`& .${selectClasses.indicator}`]: {
                  transition: '0.2s',
                  [`&.${selectClasses.expanded}`]: {
                    transform: 'rotate(-180deg)',
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Textarea
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              placeholder="ID"
              variant="soft"
            />
          </Grid>
          <Grid container style={{ marginTop: 40 }} justifyContent="center">
            <Grid container alignItems="center" justifyContent="center">
              <Button type="submit">Search</Button>
              <Button type="reset" onClick={formik.handleReset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ManageAdminSearchForm;
