import {configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./slices/loadingSlice";

const store = configureStore({
    reducer:{
        loadingReducer
    }
})

export {
store
}