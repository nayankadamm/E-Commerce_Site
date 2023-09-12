import { PRODUCT_URL } from "../constant";
import { apiSlice } from "./apiSlice";
export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:()=>({
                url:PRODUCT_URL,
            }),
            keepUnusedDataFor:5,
            providesTags :['Products']
        }),
        getProductDetails:builder.query({
            query:(productId)=>({
                url:`${PRODUCT_URL}/${productId}`,
            }),
            keepUnusedDataFor:5,
            providesTags :['Products']

        })
    })
})

export const {useGetProductsQuery,useGetProductDetailsQuery} = productApiSlice; 