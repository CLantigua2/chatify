import React from 'react';
import styled from 'styled-components';
import logo from '../../img/robot.png';
import TextFieldGroup from '../common/TextFieldGroup';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../redux/actions/authActions';

// this is the sidebar component for the main login page
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, password2 } = this.state;
		const newUser = {
			name,
			email,
			password,
			password2
		};

		this.props.loginUser(newUser, this.props.history);
	};

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/chatify');
		}
		this.props.clearErrors();
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.errors ? { errors: nextProps.errors } : this.props.clearErrors();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({ errors: this.props.errors });
		}
	}

	render() {
		const { errors, email, password } = this.state;
		return (
			<Wrapper>
				<LinkButt>
					<Back to="/">BACK</Back>
					<Back to="/register">REGISTER</Back>
				</LinkButt>
				<Heading>
					<div>
						<img src={logo} alt="Chatify logo" />
					</div>
					<div>
						<H1>Sign in</H1>
						<p>We knew you would be back</p>
					</div>
				</Heading>
				<Container>
					<Form onSubmit={this.onSubmit}>
						<TextFieldGroup
							placeholder="Email..."
							name="email"
							type="email"
							value={email}
							handleChange={this.handleChange}
							error={errors.email}
							autoComplete="email"
							info="This site uses Gravatar, please upload one if you want a profile image"
						/>
						<TextFieldGroup
							placeholder="Password..."
							name="password"
							type="password"
							value={password}
							handleChange={this.handleChange}
							error={errors.password}
							autoComplete="password"
						/>

						<Button type="submit">
							<span>Submit</span>
						</Button>
					</Form>
				</Container>
			</Wrapper>
		);
	}
}

Login.propTypes = {
	loginUser: propTypes.func.isRequired,
	auth: propTypes.object.isRequired,
	errors: propTypes.object.isRequired,
	clearErrors: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

// connects this component to the context store
export default connect(mapStateToProps, { loginUser, clearErrors })(Login);

const H1 = styled.h1`margin: 10px 0;`;

const LinkButt = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 0 auto;
	width: 500px;
`;

const Back = styled(Link)`
  text-decoration: none;
  background: #E1E1E1;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 200;
  padding: 13px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #C6C6C6;
  }
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	align-items: center;

	img {
		border-radius: 50%;
		width: 200px;
		height: 176px;
	}
`;

const Heading = styled.div`
	display: flex;
	flex-direction: row;
	width: 450px;
	justify-content: space-between;
	align-items: center;
	margin: 50px auto;
`;

const Container = styled.div`
	width: 600px;
	box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.41);
	margin: 0 auto;
	padding: 20px;
	overflow-x: hidden;
	transition: 0.3s ease-in-out;
	border-radius: 10px;
	background-color: #ffffff;
`;

const Form = styled.form`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	display: inline-block;
	border-radius: 4px;
	background-color: #0091ca;
	border: none;
	text-align: center;
	font-size: 18px;
	padding: 10px;
	width: 120px;
	transition: all 0.5s;
	cursor: pointer;
	margin: 5px;
	margin-top: 20px;
	span {
		font-size: 1.6rem;
		color: #ffffff;
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	span:after {
		content: '\00bb';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	&:hover span {
		padding-right: 25px;
	}
	&:hover span:after {
		opacity: 1;
		right: 0;
	}
`;
