import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/drawerActions';

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

export default connect(mapStateToProps, { toggleDrawer })(Backdrop);
const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 68px;
	left: 293px;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;
