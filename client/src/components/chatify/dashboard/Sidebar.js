import React from 'react';
import SideDrawer from './sidebar/sidedrawer/SideDrawer';
import Backdrop from '../../common/Backdrop';
import { connect } from 'react-redux';
import Toolbar from './Posts/Toolbar';

class Sidebar extends React.Component {
	render() {
		let sideDrawer;
		let backdrop;

		if (this.props.drawer === true) {
			sideDrawer = <SideDrawer />;
			backdrop = <Backdrop />;
		}
		return (
			<React.Fragment>
				<Toolbar />
				{sideDrawer}
				{backdrop}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	drawer: state.drawer
});

export default connect(mapStateToProps)(Sidebar);
