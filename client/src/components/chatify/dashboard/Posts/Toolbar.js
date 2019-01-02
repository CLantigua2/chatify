import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ToggleButton from '../sidebar/sidedrawer/ToggleButton';
import { toggleDrawer } from '../../../../redux/actions/drawerActions';
import Robot from '../../../../img/robot.png';

class Toolbar extends Component {
	drawerHandler = (e) => {
		// e.preventDefault();
		this.props.toggleDrawer();

		console.log(this.props.drawer);
	};

	render() {
		const { channel } = this.props;
		return (
			<Toolbardiv>
				<nav className="toolbar__navigation">
					<ToggleButton drawerHandler={this.drawerHandler} />
					<div className="toolbar__logo">
						<img className="logo" src={Robot} alt="" />
					</div>
					<div className="toolbar_nav_items">
						{channel ? (
							<ul>
								<h3>{`${channel.name}`}</h3>
								<h6>{`${channel.purpose}`}</h6>
							</ul>
						) : (
							<h3>Select a Channel</h3>
						)}
					</div>
				</nav>
			</Toolbardiv>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	drawer: state.drawer
});

Toolbar.propTypes = {
	auth: propTypes.object.isRequired,
	channel: propTypes.object,
	drawer: propTypes.object.isRequired,
	toggleDrawer: propTypes.func.isRequired
};

export default connect(mapStateToProps, { toggleDrawer })(Toolbar);

const Toolbardiv = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: ${(props) => props.theme.sidebar};
	height: 70px;
	.toolbar__navigation {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		width: 100%;
		max-width: 60%;
		justify-content: space-between;
		padding-left: 1rem;
		.toolbar__logo {
			margin: 0;
			.logo {
				height: 50px;
				width: 70px;
				border-radius: 50%;
			}
		}
		.toolbar_nav_items {
			ul {
				padding: 10px 0;
				h3 {
					color: ${(props) => props.theme.active};
				}
				h6 {
					color: ${(props) => props.theme.inactive};
				}
			}
		}
	}
`;
