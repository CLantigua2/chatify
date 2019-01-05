import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { deleteChannel } from '../../../../../../redux/actions/channelActions';
import { toggleDrawer } from '../../../../../../redux/actions/drawerActions';

class ChannelItem extends Component {
	onDeleteClick = (id) => {
		this.props.deleteChannel(id);
	};

	render() {
		const { channel, auth, toggleDrawer } = this.props;
		console.log(channel.user);
		console.log(auth.user.id);
		const atSign = '@';
		return (
			<li>
				<StyledNavLink
					to={`/chatify/channel/${channel._id}`}
					title={`${channel.purpose} `}
					onClick={toggleDrawer}
				>
					{atSign.concat(channel.name)}
				</StyledNavLink>
				{channel.user === auth.user.id ? (
					<Button
						onClick={(e) => {
							e.preventDefault();
							this.onDeleteClick(channel._id);
						}}
						type="Button"
					>
						<i className="fas fa-minus-square" title="delete channel" />
					</Button>
				) : null}
			</li>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	drawer: state.drawer
});

ChannelItem.propTypes = {
	deleteChannel: propTypes.func.isRequired,
	auth: propTypes.object.isRequired,
	channel: propTypes.object.isRequired,
	drawer: propTypes.object.isRequired,
	toggleDrawer: propTypes.func.isRequired
};

export default connect(mapStateToProps, { deleteChannel, toggleDrawer })(ChannelItem);

const Button = styled.button`
	cursor: pointer;
	padding: 0;
	margin: 0;
	background: transparent;
	border: transparent;
	font-size: 20px;
	i {
		color: ${(props) => props.theme.inactive};
		&:hover {
			color: ${(props) => props.theme.active};
		}
	}
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.inactive};
	font-weight: 2rem;
	text-decoration: none;
	font-size: 1.9rem;
	&:hover {
		color: ${(props) => props.theme.active}
	}
	&:active {
		color: ${(props) => props.theme.active}
	}
`;
