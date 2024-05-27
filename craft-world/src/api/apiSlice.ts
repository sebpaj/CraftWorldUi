import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/graphql' }),
  endpoints: (builder) => ({
    getMaterials: builder.query<string[], void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query {
                materials
            }`,
        },
      }),
      transformResponse: (response: { data: { materials: string[] } }) =>
        response.data.materials,
    }),
    getSources: builder.query<string[], void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
              query {
                  sources
              }`,
        },
      }),
      transformResponse: (response: { data: { sources: string[] } }) =>
        response.data.sources,
    }),
  }),
});

export const { useGetMaterialsQuery, useGetSourcesQuery } = apiSlice;
