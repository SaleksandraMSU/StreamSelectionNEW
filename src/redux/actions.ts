import { createAction } from "@reduxjs/toolkit";

export const R_INCREMENT = createAction('N/INCREMENT')
export const R_DECREMENT = createAction('N/DECREMENT')
export const W_INCREMENT = createAction('W/INCREMENT')
export const W_DECREMENT = createAction('W/DECREMENT')
export const M_INCREMENT = createAction('M/INCREMENT')
export const M_DECREMENT = createAction('M/DECREMENT')

export const SET_STREAM_ORDER = createAction('SET_STREAM_ORDER', (value) => ({payload:value}))

export const LOADER_DISPLAY_ON = createAction('LOADER_DISPLAY_ON')
export const LOADER_DISPLAY_OFF = createAction('LOADER_DISPLAY_OFF')
