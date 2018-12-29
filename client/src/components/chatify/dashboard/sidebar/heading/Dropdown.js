import React, { Component } from 'react';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	showMenu = (e) => {
		e.preventDefault();
		this.setState({
			showMenu: true
		});
	};

	closeMenu = (e) => {
		if (this.dropdownMenu.contains(e.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	};

	render() {
		return (
			<div>
				<button onClick={this.showMenu}>{this.props.children}</button>
				{this.state.showmenu === true ? (
					<div className="menu" ref={(element) => (this.dropdownMenu = element)}>
						<button>Menu item 1</button>
						<button>Menu item 2</button>
						<button>Menu item 3</button>
					</div>
				) : null}
			</div>
		);
	}
}

export default Dropdown;
