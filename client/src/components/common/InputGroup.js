import React from 'react';
// import styled from 'styled-components';
import propTypes from 'prop-types';

const InputGroup = ({ name, placeholder, value, error, autoComplete, icon, changeHandler }) => {
	return (
		<div>
			<div>
				<span>
					<i className={icon} />
				</span>
			</div>
			<input
				type="text"
				autoComplete={autoComplete}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={changeHandler}
			/>
		</div>
	);
};

InputGroup.propTypes = {
	name: propTypes.string.isRequired,
	placeholder: propTypes.string.isRequired,
	value: propTypes.string.isRequired,
	autoComplete: propTypes.string.isRequired,
	icon: propTypes.string.isRequired,
	error: propTypes.string.isRequired,
	type: propTypes.string.isRequired,
	handleChange: propTypes.func.isRequired
};

export default InputGroup;
