import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import EnterNewPassword from './EnterNewPassword';
import VerifyEmail from './VerifyEmail';

const ForgotPassword: FC = () => {
	return (
		<Routes>
			<Route path='/email' element={<VerifyEmail />} />
			<Route path='/password' element={<EnterNewPassword />} />
			<Route path='*' element={<Navigate to={'email'} />} />
		</Routes>
	);
};

export default ForgotPassword;
