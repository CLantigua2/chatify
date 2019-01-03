import React from 'react';
import SideDrawer from './sidebar/sidedrawer/SideDrawer';
import Backdrop from '../../common/Backdrop';
import { connect } from 'react-redux';
import Toolbar from './Posts/Toolbar';

class Sidebar extends React.Component {
	render() {
		const { drawer } = this.props.drawer;
		const backdrop = drawer ? null : <Backdrop />;

		return (
			<React.Fragment>
				<Toolbar />
				<SideDrawer show={drawer} />
				{backdrop}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	drawer: state.drawer
});

export default connect(mapStateToProps)(Sidebar);
