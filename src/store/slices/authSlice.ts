import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SignupData } from '../../pages/signup/Signup';

const initialState: { users: SignupData[]; email?: string } = {
	users: [],
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthentication(state, action: PayloadAction<SignupData>) {
			state.users = [...state.users, action.payload];
		},
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		reset: () => initialState,
	},
});

export const authActions = auth.actions;
export const authReducer = auth.reducer;
