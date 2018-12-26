import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const TextFieldGroup = ({ name, placeholder, value, error, info, type, handleChange, disabled, autoComplete }) => {
	return (
		<Fragment>
			<Input
				autoComplete={autoComplete}
				type={type}
				errors={error ? true : false}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
				disabled={disabled}
			/>
			{error && (
				<Fade>
					<Error>{error}</Error>
				</Fade>
			)}
			{info && <Small className="form-text text-muted">{info}</Small>}
		</Fragment>
	);
};

const Error = styled.div`
	color: red;
	font-size: 0.8rem;
	padding: 5px;
	margin-left: 5px;
`;

const Small = styled.small`
	font-size: 0.95rem;
	font-weight: normal;
	color: slategray;
	margin: 5px;
	padding: 5px;
`;

const Input = styled.input`
	margin: 10px;
	padding: 5px;
	border: 1px solid slategray;
	border-radius: 5px;
`;

TextFieldGroup.protoTypes = {
	name: propTypes.string.isRequired,
	placeholder: propTypes.string,
	value: propTypes.string.isRequired,
	autoComplete: propTypes.string,
	info: propTypes.string,
	error: propTypes.string,
	type: propTypes.string.isRequired,
	handleChange: propTypes.func.isRequired,
	disabled: propTypes.string
};

TextFieldGroup.defaultProps = {
	type: 'text'
};

export default TextFieldGroup;
