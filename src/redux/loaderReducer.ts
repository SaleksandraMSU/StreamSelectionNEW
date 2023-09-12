import { createReducer } from "@reduxjs/toolkit";
import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "./actions";

const initialState = {
    loading: false,
  };

export const loaderReducer = createReducer(initialState, (builder) => {
    builder
    .addCase (LOADER_DISPLAY_ON, (state, action) => {
        state.loading = true;
    })
    .addCase (LOADER_DISPLAY_OFF, (state, action) => {
        state.loading = false;
    })
})