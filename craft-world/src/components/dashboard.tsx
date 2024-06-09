import React, { useState } from 'react';
import { useGetLocationsQuery } from '../api/apiSlice';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Inventory from './inventory';
import Work from './work';

const useGetData = () => {
  const { data: locationsData, error, isLoading } = useGetLocationsQuery();

  return { locationsData, error, isLoading };
};

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10),
  background: 'grey',
  textAlign: 'center',
  width: '100vw', // Full width of the viewport
  height: '100vh', // Full height of the viewport
  display: 'flex',
  flexDirection: 'column',
}));

function Dashboard() {
  const [seconds, setSeconds] = useState(0);
  const { locationsData, error, isLoading } = useGetData();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Error: {error.toString()}
      </Typography>
    );
  }

  return (
    <StyledContainer maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Work
            seconds={seconds}
            setSeconds={setSeconds}
            locations={locationsData}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Inventory />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default Dashboard;
