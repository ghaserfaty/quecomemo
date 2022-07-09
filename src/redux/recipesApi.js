import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  tagTypes: ['recipes'],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes`,
      providesTags: ['recipes']
    }),
    addRecipe: builder.mutation({
      query: (body) => ({
        url: `recipes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['recipes'],
    }),
    updateRecipe: builder.mutation({
      query: (body) => ({
        url: `recipes`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['recipes'],
    }),
    removeRecipe: builder.mutation({
      query: (body) => ({
        url: `recipes`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['recipes'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipesQuery, useAddRecipeMutation } = recipesApi
