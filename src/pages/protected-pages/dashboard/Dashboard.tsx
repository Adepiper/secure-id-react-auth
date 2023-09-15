import { FC } from 'react';
import useAuth from '../../../hooks/useAuth';
import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
	const { logout } = useAuth();
	return (
		<div className={styles.container}>
			<h3>Welcome Tobi</h3>

			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Dashboard;
