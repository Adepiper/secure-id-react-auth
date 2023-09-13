import React, { FC } from 'react';

type ButtonProps = {
	className?: string;
	text: string;
	disabled?: boolean;
	loading?: boolean;
	type?: 'submit' | 'button' | 'reset';
	onClick?: () => void;
	icon?: string;
};

const Button: FC<ButtonProps> = ({
	className,
	text,
	disabled,
	loading,
	onClick,
	icon,
	type = 'submit',
}) => {
	return (
		<button
			className={className}
			disabled={disabled || loading}
			type={type}
			onClick={onClick}
		>
			{loading ? (
				<>
					{' '}
					<i
						style={{
							marginRight: '5px',
							fontSize: '14px',
						}}
						className='fa fa-spinner fa-spin'
					></i>{' '}
					Loading
				</>
			) : (
				<>
					{text} {icon && <img src={icon} alt='' />}{' '}
				</>
			)}
		</button>
	);
};

export default Button;
