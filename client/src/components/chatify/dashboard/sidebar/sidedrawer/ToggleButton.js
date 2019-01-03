import React from 'react';
import { HamburgerArrow } from 'react-animated-burgers';
import propTypes from 'prop-types';

class ToggleButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: this.props.drawer
		};
	}

	toggleButton = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		return (
			<div onClick={this.props.drawerHandler}>
				<HamburgerArrow
					isActive={this.state.isActive}
					toggleButton={this.toggleButton}
					buttonColor="#000E0F"
					barColor="#32E2EC"
					onClick={this.props.drawerHandler}
					buttonWidth={25}
				/>
			</div>
		);
	}
}

export default ToggleButton;

ToggleButton.propTypes = {
	drawerHandler: propTypes.func.isRequired
};
