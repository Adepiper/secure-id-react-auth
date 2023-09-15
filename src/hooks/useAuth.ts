import { useNavigate } from 'react-router-dom';
import { LoginInfo } from '../pages/login/Login';
import { SignupData } from '../pages/signup/Signup';
import { useAppDisPatch, useAppSelector } from '../store';
import { authActions } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

const useAuth = () => {
	const navigate = useNavigate();
	const dispatch = useAppDisPatch();

	const { users } = useAppSelector((state) => state.auth);

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

		navigate('/user/dashboard');
	};

	const signUpUser = (data: SignupData) => {
		const user = users.find((s) => s.email === data.email);
		if (user) {
			toast.error('Email already exists');
			return;
		}

		dispatch(authActions.setAuthentication(data));
		navigate('/login');
	};

	return { loginUser, signUpUser };
};

export default useAuth;
