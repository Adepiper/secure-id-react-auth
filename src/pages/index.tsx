import React, { FC } from 'react';
import Login from './login/Login';
import Signup from './signup/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './protected-pages';
import ForgotPassword from './forgot-password';

const PageRoutes: FC = () => {
	return (
		<Routes>
			<Route path={`/login`} element={<Login />} />
			<Route path={`/signup`} element={<Signup />} />
			<Route path={`/forgot/*`} element={<ForgotPassword />} />
			<Route path={`/user/*`} element={<ProtectedRoutes />} />
			<Route path='*' element={<Navigate to={'/user'} />} />
		</Routes>
	);
};

export default PageRoutes;
