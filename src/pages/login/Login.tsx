import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../shared/button/Button';
import FormInput from '../../shared/form_input/FormInput';
import styles from './Login.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type LoginInfo = {
	email: string;
	password: string;
};

const signInSchema: yup.ObjectSchema<LoginInfo> = yup.object({
	email: yup.string().required('Required').email(`invalid email pattern`),
	password: yup
		.string()
		.required('Required')
		.min(7, 'Password length too short'),
});

const initialState: LoginInfo = {
	email: '',
	password: '',
};

const Login: FC = () => {
	const formMethods = useForm<LoginInfo>({
		resolver: yupResolver(signInSchema),
		defaultValues: initialState,
	});

	const onSubmitForm: SubmitHandler<LoginInfo> = (data) => {
		console.log(data);
	};

	return (
		<section className={styles.signInContainer}>
			<form
				className={styles.form}
				onSubmit={formMethods.handleSubmit(onSubmitForm)}
			>
				<h3 className={styles.heading}>Login </h3>
				<FormInput
					styles={styles.formGroup}
					formMethods={formMethods}
					type='email'
					label='Email'
					inputName='email'
				/>
				<FormInput
					styles={styles.formGroup}
					formMethods={formMethods}
					type='password'
					label='Password'
					inputName='password'
				/>
				<Button text='Sign in' className={styles.button} />

				<div className={styles.widgets}>
					<Link to={`/forgot`}>Forgot password</Link>

					<span>
						Not Registered? &nbsp;
						<Link to={`/signup`}>Sign Up now</Link>
					</span>
				</div>
			</form>
		</section>
	);
};

export default Login;
