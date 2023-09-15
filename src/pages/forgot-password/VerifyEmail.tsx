import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import useAuth from '../../hooks/useAuth';
import Button from '../../shared/button/Button';
import FormInput from '../../shared/form_input/FormInput';
import styles from '../login/Login.module.scss';

const verifyEmailSchema: yup.ObjectSchema<{ email: string }> = yup.object({
	email: yup.string().required('Required').email(`invalid email pattern`),
});

const VerifyEmail: FC = () => {
	const formMethods = useForm<{ email: string }>({
		resolver: yupResolver(verifyEmailSchema),
		defaultValues: { email: '' },
	});

	const { validateEmail } = useAuth();

	const onSubmitForm: SubmitHandler<{ email: string }> = (data) => {
		validateEmail(data);
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
					type='email'
					label='Email'
					inputName='email'
				/>

				<Button text='Verify Email' className={styles.button} />

				<div className={styles.widgets}>
					<Link to={`/login`}>Back to Login</Link>
				</div>
			</form>
		</section>
	);
};

export default VerifyEmail;
