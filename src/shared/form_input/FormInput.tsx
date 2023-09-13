// eslint-disable-next-line import/named
import { useState } from 'react';

import classes from './FormInput.module.scss';
import { clsx } from '../../helpers/clsx';

type FormInputProps = {
	formMethods: any;
	styles?: string;
	inputName: string;
	type: string;
	label: string;
	placeHolder?: string;
	isBorder?: boolean;
	icon?: string;
	errorClass?: string;
	disabled?: boolean;
};

const FormInput = ({
	formMethods,
	styles = classes.formInput,
	inputName,
	type,
	label,
	placeHolder,
	icon,
	errorClass = classes.errors,
	isBorder = false,
	disabled = false,
}: FormInputProps) => {
	const [changeType, setTypeChange] = useState(type);
	return (
		<div
			className={clsx(
				styles,
				formMethods.formState.errors[inputName] ? errorClass : '',
				isBorder ? classes.singleBorder : ''
			)}
		>
			<label htmlFor={inputName}>
				{label} {icon && <img src={icon} alt='' />}
			</label>
			{!!formMethods.formState.errors && (
				<span>{formMethods.formState.errors[inputName]?.message}</span>
			)}

			<div className={clsx(classes.formGroup)}>
				<input
					{...formMethods.register(inputName)}
					id={inputName}
					type={changeType}
					placeholder={placeHolder}
					disabled={disabled}
				/>

				{type === 'password' && (
					<i
						onClick={() =>
							setTypeChange(
								changeType === 'password' ? 'text' : 'password'
							)
						}
						className={clsx(
							'fa-solid',
							changeType === 'password'
								? 'fa-eye'
								: 'fa-eye-slash'
						)}
					></i>
				)}
			</div>
		</div>
	);
};

export default FormInput;
