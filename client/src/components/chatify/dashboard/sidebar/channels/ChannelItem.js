import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { deleteChannel } from '../../../../redux/actions/channelActions';

class ChannelItem extends Component {
	onDeleteClick = (id) => {
		this.props.deleteChannel(id);
	};
	render() {
		const { channel, auth } = this.props;
		return (
			<Container>
				<StyledNavLink exact to={`/chatify/${channel.name}`} title={`${channel.purpose}`}>
					@{channel.name}
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
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

ChannelItem.propTypes = {
	deleteChannel: propTypes.func.isRequired,
	auth: propTypes.object.isRequired,
	channel: propTypes.object.isRequired
};

export default connect(mapStateToProps, { deleteChannel })(ChannelItem);

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	width: 200px;
	align-items: center;
	padding: 5px;
`;

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
	&:hover {
		color: ${(props) => props.theme.active}
	}
	&.active {
		color: ${(props) => props.theme.active}
	}
`;
