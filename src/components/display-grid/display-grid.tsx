import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardContainer } from '../card/card-container';

export const DisplayGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 9, md: 12 }}>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <CardContainer />
        </Grid>
      </Grid>
    </Box>
  );
}