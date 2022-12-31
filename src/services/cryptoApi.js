import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '606c110683msh385b8cdff57e628p101d90jsn5b1ade429032',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })
// https://captain-eo.hashnode.dev/an-easy-way-to-make-api-calls-redux-toolkit
// all code explained here

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?${timePeriod}`)
        }),
    })
});

export const {
    useGetCryptosQuery, // this name should be same as key in endpoint object i.e use`getCryptos`Query 
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;