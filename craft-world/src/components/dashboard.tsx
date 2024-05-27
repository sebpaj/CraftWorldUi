import React from 'react';
import { useGetMaterialsQuery, useGetSourcesQuery } from '../api/apiSlice';
import { CircularProgress, Typography } from '@mui/material';

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

  return <div></div>;
}

export default Dashboard;
