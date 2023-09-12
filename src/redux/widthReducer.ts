import { createReducer } from "@reduxjs/toolkit"
import { R_INCREMENT, R_DECREMENT, M_INCREMENT, M_DECREMENT, W_INCREMENT, W_DECREMENT } from "./actions"
import { TWidth } from "./values-types"

const initialState: TWidth = {
  range: 7,
  min_w: 0.5,
  max_w: 4.0,
}

export const widthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(R_INCREMENT, (state, action) => {
      (state.range < 30) ? (
        state.range++
      ) : (
        state.range
      )
    })
    .addCase(R_DECREMENT, (state, action) => {
      (state.range > 1) ? (
        state.range--
      ) : (
        state.range
      )
    })
    .addCase(M_INCREMENT, (state, action) => {
      (state.max_w < 15) ? (
        state.max_w += 0.5
      ) : (
        state.max_w
      )
    })
    .addCase(M_DECREMENT, (state, action) => {
      (state.max_w > 0.5) ? (
        state.max_w -= 0.5
      ) : (
        state.max_w
      )
    })
    .addCase(W_INCREMENT, (state, action) => {
      (state.min_w < 10) ? (
        state.min_w += 0.5
      ) : (
        state.min_w
      )
    })
    .addCase(W_DECREMENT, (state, action) => {
      (state.min_w > 0.5) ? (
        state.min_w -= 0.5
      ) : (
        state.min_w
      )
    })
})
