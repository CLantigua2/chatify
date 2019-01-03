import React from 'react';
import SideDrawer from './sidebar/sidedrawer/SideDrawer';
import Backdrop from '../../common/Backdrop';
import { connect } from 'react-redux';
import Toolbar from './Posts/Toolbar';

class Sidebar extends React.Component {
	render() {
		const { drawer } = this.props.drawer;
		const Drawer = (
			<React.Fragment>
				<SideDrawer />
				<Backdrop />
			</React.Fragment>
		);
		return (
			<React.Fragment>
				<Toolbar />

				{drawer ? null : Drawer}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	drawer: state.drawer
});

export default connect(mapStateToProps)(Sidebar);
