import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SignupData } from '../../pages/signup/Signup';

const initialState: { users: SignupData[]; email?: string } = {
	users: [],
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<SignupData>) {
			const users = state.users;
			const userIndex = users.findIndex(
				(data) => data.email === action.payload.email
			);

			if (userIndex > -1) {
				users[userIndex] = action.payload;
				state.users = users;
			} else {
				state.users = [...state.users, action.payload];
			}
		},
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},

		reset: () => initialState,
	},
});

export const authActions = auth.actions;
export const authReducer = auth.reducer;
