import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces/authInterface";
import {authService} from "../../services/authService";
import {AxiosError} from "axios";
import {IUser} from "../../interfaces/userInterface";

interface IState {
    registerError: string
    loginError: string;
    currentUser: IUser
}

const initialState: IState = {
    registerError: null,
    loginError: null,
    currentUser: null
};

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder

            .addCase(register.rejected, state => {
                state.registerError = 'Username already exist'
            })

            .addMatcher(isFulfilled(register), state => {
                state.registerError = null
                state.loginError = null
            })

})

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register,
}

export {
    authActions,
    authReducer
}