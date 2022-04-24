import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IResponse} from '../interfaces/IResponse';

const baseUrl = 'http://ec2-52-53-217-117.us-west-1.compute.amazonaws.com:80/api/';
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
