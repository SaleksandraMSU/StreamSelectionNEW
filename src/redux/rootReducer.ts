import { combineReducers } from "@reduxjs/toolkit";
import { widthReducer } from './widthReducer';
import { orderReducer } from './orderReducer';
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
    width: widthReducer,
    order: orderReducer,
    loader: loaderReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

