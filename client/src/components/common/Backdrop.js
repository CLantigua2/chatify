import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/drawerActions';
import propTypes from 'prop-types';

const Backdrop = (props) => {
	return (
		<Overlay
			className="backdrop"
			onClick={() => {
				props.toggleDrawer();
			}}
		/>
	);
};

const mapStateToProps = (state) => ({
	drawer: state.drawer
});

Backdrop.propTypes = {
	drawer: propTypes.object.isRequired,
	toggleDrawer: propTypes.func.isRequired
};

export default connect(mapStateToProps, { toggleDrawer })(Backdrop);
const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 68px;
	left: 0px;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;
