import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITodo} from "../types/ITodo";

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (build) => ({
    fetchTodo: build.query<ITodo[], void>({
      query: () => ({
        url: '/todos',
        params: {
          _limit: 10,
        },
      })
    }),

  })
})