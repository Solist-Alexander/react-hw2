import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces/authInterface";
import {authService} from "../../services/authService";
import {AxiosError} from "axios";

interface IState {
    
}

const initialState:IState = {
    
}
const register= createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue})=>{
        try {
            await authService.register(user)
        } catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder

})

export {

}
