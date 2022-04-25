import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IResponse} from '../interfaces/IResponse';

const baseUrl = "https://grapebe.herokuapp.com/api/";
export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getEvent: builder.query<IResponse, string | void>({
      query: () => 'get_event',
    }),
  }),
});

export const {useGetEventQuery} = eventApi;
