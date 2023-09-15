import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

const ProtectedRoutes: FC = () => {
	const token = sessionStorage.getItem('secure-id-test-user');

	if (!token) return <Navigate to={'/login'} />;

	return (
		<Routes>
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='*' element={<Navigate to={'dashboard'} />} />
		</Routes>
	);
};

export default ProtectedRoutes;
