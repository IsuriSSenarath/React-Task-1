import React from 'react';
import { Button, Grid } from '@mui/material';
import Textarea from '@mui/joy/Textarea';


const ManageAdminSearchForm = ({
  initialValues,
  onSubmit,
  onReset
}: {initialValues: {id: string};
    onSubmit: (values: {id: string }) => void;
    onReset: () => void; }
) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = {
      id: formData.get('id') as string,
    };
    onSubmit(values);
  }
    
  return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Textarea
              name="id"
              placeholder="ID"
              variant="soft"
              defaultValue={initialValues.id}
            />
          </Grid>
          <Grid container style={{ marginTop: 1 }}  justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
              <Button type="submit">
                Search
              </Button>
              </Grid>
              <Grid item>
              <Button type="reset" onClick={onReset}>
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
