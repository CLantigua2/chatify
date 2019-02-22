import React, { Fragment } from "react"
import propTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import Fade from "react-reveal/Fade"

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  handleChange,
  disabled,
  autoComplete,
  active,
  clickHandler
}) => (
  <Fragment>
    {error ? (
      <InputError
        autoComplete={autoComplete}
        type={type}
        errors={error ? true : false}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        active={active}
        onClick={clickHandler}
      />
    ) : (
      <Input
        onClick={clickHandler}
        active={active}
        autoComplete={autoComplete}
        type={type}
        errors={error ? true : false}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    )}
    {error && (
      <Fade>
        <Error>{error}</Error>
      </Fade>
    )}
    {info && <Small className="form-text text-muted">{info}</Small>}
  </Fragment>
)

const Shake = keyframes`
	0% { transform: translate(15px); }
			20% { transform: translate(-15px); }
			40% { transform: translate(8px); }
			60% { transform: translate(-8px); }
			80% { transform: translate(4px); }
			100% { transform: translate(0px); }
`

const InputError = styled.input`
  margin: 10px;
  padding: 5px;
  border: 1px solid rgba(255, 0, 0, 0.5);
  border-radius: 5px;
  animation: ${Shake} 0.5s linear;
`

const Error = styled.div`
  color: rgba(255, 0, 0, 1);
  font-size: 1.4rem;
  padding: 5px;
  margin-left: 5px;
`

const Small = styled.small`
  font-size: 1.4rem;
  font-weight: normal;
  color: slategray;
  margin: 5px;
  padding: 5px;
`

const Input = styled.input`
  margin: 10px;
  padding: 5px;
  border: 1px solid slategray;
  border-radius: 5px;
`

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
}

TextFieldGroup.defaultProps = {
  type: "text"
}

export default TextFieldGroup
