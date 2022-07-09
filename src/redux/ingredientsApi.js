import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ingredientsApi = createApi({
  reducerPath: 'ingredientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  tagTypes: ['ingredients'],
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => `ingredients`,
      providesTags: ['ingredients']
    }),
    addIngredient: builder.mutation({
      query: (body) => ({
        url: `ingredients`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ingredients'],
    }),
    updateIngredient: builder.mutation({
      query: (body) => ({
        url: `ingredients`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['ingredients'],
    }),
    removeIngredient: builder.mutation({
      query: (body) => ({
        url: `ingredients`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['ingredients'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIngredientsQuery, useAddIngredientMutation } = recipesApi
