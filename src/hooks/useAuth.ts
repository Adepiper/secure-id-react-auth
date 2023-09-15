import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LoginInfo } from '../pages/login/Login';
import { SignupData } from '../pages/signup/Signup';
import { useAppDisPatch, useAppSelector } from '../store';
import { authActions } from '../store/slices/authSlice';

const useAuth = () => {
	const navigate = useNavigate();
	const dispatch = useAppDisPatch();

	const { users, email } = useAppSelector((state) => state.auth);

	const loginUser = (data: LoginInfo) => {
		const user = users.find((s) => s.email === data.email);

		if (!user) {
			toast.error('User does not exist, Please sign up');
			return;
		}

		if (user.password !== data.password) {
			toast.error('User name or password incorrect');
			return;
		}

		toast.success(`Welcome, ${user.firstname}`);
		sessionStorage.setItem('secure-id-test-user', uuidv4());

		navigate('/user/dashboard');
	};

	const signUpUser = (data: SignupData) => {
		const user = users.find((s) => s.email === data.email);
		if (user) {
			toast.error('Email already exists');
			return;
		}

		dispatch(authActions.setUser(data));
		navigate('/login');
	};

	const validateEmail = (data: { email: string }) => {
		const user = users.find((s) => s.email === data.email);

		if (!user) {
			toast.error('User does not exist, Please sign up');
			return;
		}
		dispatch(authActions.setEmail(data.email));

		navigate('/forgot/password');
	};

	const changePassword = (data: { password: string }) => {
		const copiedUsers = [...users];
		const userIndex = copiedUsers.findIndex((s) => s.email === email);
		const user = copiedUsers[userIndex];

		if (!user) {
			toast.error('User does not exist, Please sign up');
			return;
		}

		const updateUser = { ...user, password: data.password };

		dispatch(authActions.setUser(updateUser));

		dispatch(authActions.setEmail(''));

		toast.success('Password successfully updated');

		navigate('/login');
	};

	const logout = () => {
		sessionStorage.removeItem('secure-id-test-user');
		toast.success('You have logged out successfully');
		navigate('/login');
	};

	return { loginUser, signUpUser, validateEmail, changePassword, logout };
};

export default useAuth;
