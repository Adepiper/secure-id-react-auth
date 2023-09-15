import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import useAuth from '../../hooks/useAuth';
import Button from '../../shared/button/Button';
import FormInput from '../../shared/form_input/FormInput';
import { useAppSelector } from '../../store';
import styles from '../login/Login.module.scss';

const changePasswordSchema: yup.ObjectSchema<{ password: string }> = yup.object(
	{
		password: yup
			.string()
			.required('Required')
			.min(7, 'Password length too short'),
	}
);

const EnterNewPassword: FC = () => {
	const formMethods = useForm<{ password: string }>({
		resolver: yupResolver(changePasswordSchema),
		defaultValues: { password: '' },
	});
	const { changePassword } = useAuth();

	const { email } = useAppSelector((state) => state.auth);

	if (!email) {
		return <Navigate to={'/forgot/email'} />;
	}

	const onSubmitForm: SubmitHandler<{ password: string }> = (data) => {
		changePassword(data);
	};
	return (
		<section className={styles.signInContainer}>
			<form
				className={styles.form}
				onSubmit={formMethods.handleSubmit(onSubmitForm)}
			>
				<h3 className={styles.heading}>
					Please enter your registered email{' '}
				</h3>
				<FormInput
					styles={styles.formGroup}
					formMethods={formMethods}
					type='password'
					label='Enter new password'
					inputName='password'
				/>

				<Button text='Update password' className={styles.button} />

				<div className={styles.widgets}>
					<Link to={`/forgot`}>Back to Login</Link>
				</div>
			</form>
		</section>
	);
};

export default EnterNewPassword;
