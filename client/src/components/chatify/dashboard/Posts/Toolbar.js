import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ToggleButton from './sidedrawer/ToggleButton';
import Robot from '../../../../img/robot.png';

class Toolbar extends Component {
	render() {
		const { channel } = this.props;
		return (
			<Toolbardiv>
				<nav className="toolbar__navigation">
					<ToggleButton />
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
	auth: state.auth
});

Toolbar.propTypes = {
	auth: propTypes.object.isRequired,
	channel: propTypes.object.isRequired
};

export default connect(mapStateToProps)(Toolbar);

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
		width: 55%;
		justify-content: space-between;
		padding: 0 1rem;
		.toolbar__logo {
			margin-left: 0.5rem;
			.logo {
				height: 50px;
				width: 70px;
				border-radius: 50%;
			}
		}
		.toolbar_nav_items {
			ul {
				padding: 10px;
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
