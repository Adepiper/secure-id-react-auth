import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../shared/button/Button';
import FormInput from '../../shared/form_input/FormInput';
import styles from '../login/Login.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export type SignupData = {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
};

const signUpSchema: yup.ObjectSchema<SignupData> = yup.object({
	email: yup.string().required('Required').email(`invalid email pattern`),
	password: yup
		.string()
		.required('Required')
		.min(7, 'Password length too short'),
	firstname: yup
		.string()
		.required('Required')
		.min(3, 'First name is required'),
	lastname: yup.string().required('Required').min(3, 'Last name is required'),
});

const initialState: SignupData = {
	email: '',
	password: '',
	firstname: '',
	lastname: '',
};

const Signup: FC = () => {
	const { signUpUser } = useAuth();

	const formMethods = useForm<SignupData>({
		resolver: yupResolver(signUpSchema),
		defaultValues: initialState,
	});

	const onSubmitForm: SubmitHandler<SignupData> = (data) => {
		signUpUser(data);
	};
	return (
		<section className={styles.signInContainer}>
			<form
				className={styles.form}
				onSubmit={formMethods.handleSubmit(onSubmitForm)}
			>
				<h3 className={styles.heading}>Sign up </h3>
				<FormInput
					styles={styles.formGroup}
					formMethods={formMethods}
					type='text'
					label='First name'
					inputName='firstname'
				/>
				<FormInput
					styles={styles.formGroup}
					formMethods={formMethods}
					type='text'
					label='Last name'
					inputName='lastname'
				/>
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

				<Button text='Sign up' className={styles.button} />

				<div className={styles.widgets}>
					<span>
						Have an account? &nbsp;
						<Link to={`/signin`}>Sign in</Link>
					</span>
				</div>
			</form>
		</section>
	);
};

export default Signup;
