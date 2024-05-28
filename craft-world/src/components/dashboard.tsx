import React from 'react';
import { useGetMaterialsQuery, useGetSourcesQuery } from '../api/apiSlice';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Inventory from './inventory';
import Work from './work';

const useGetData = () => {
  const {
    data: materialsData,
    error: materialsError,
    isLoading: isLoadingMaterials,
  } = useGetMaterialsQuery();
  const {
    data: sourcesData,
    error: sourcesError,
    isLoading: isLoadingSources,
  } = useGetSourcesQuery();

  const isLoading = isLoadingMaterials || isLoadingSources;
  const error = materialsError || sourcesError;

  return { materialsData, sourcesData, isLoading, error };
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
  const { materialsData, sourcesData, isLoading, error } = useGetData();

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
          <Work sources={sourcesData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Inventory />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default Dashboard;
