import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Location } from '../types/types';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/graphql' }),
  endpoints: (builder) => ({
    getLocations: builder.query<Location[], void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
              query {
                  locations{
                    name
                    material
                  }
              }`,
        },
      }),
      transformResponse: (response: { data: { locations: Location[] } }) =>
        response.data.locations,
    }),
  }),
});

export const { useGetLocationsQuery } = apiSlice;
