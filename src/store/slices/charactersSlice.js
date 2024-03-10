import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services/characterService";

const initialState = {
    characters: []
}

const getAllById = createAsyncThunk(
    'charactersSlice/getAllById',
    async ({ids}, thunkAPI) =>{
        try {
            const {data} = await characterService.getById(ids)
            return data

        } catch (e){
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducer: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAllById.fulfilled,(state, action) =>{
                state.characters = action.payload
            })
})

const {reducer:characterReducer, actions} = charactersSlice

const characterActions = {
    ...actions,
    getAllById
}

export {
    characterReducer,
    characterActions
}