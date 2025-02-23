import { api } from "../ApiSlice";

export const authApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "api/Teacher/login",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        formSubmit: builder.mutation({
            query: (credentials) => ({
                url: "api/Projects_Information",
                method: "POST",
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation , useFormSubmitMutation  } = authApiSlice;
