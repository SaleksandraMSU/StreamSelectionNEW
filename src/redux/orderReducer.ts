import { createReducer } from "@reduxjs/toolkit"
import { SET_STREAM_ORDER } from "./actions"
import { TStreamorder } from "./values-types";
import { Strahler } from "../components/map/streamorder-constants";


const initialState: TStreamorder = {
    streamorder: Strahler,
  };

export const orderReducer = createReducer(initialState, (builder) => {
    builder
    .addCase (SET_STREAM_ORDER, (state, action) => {
        state.streamorder = action.payload;
    })
})