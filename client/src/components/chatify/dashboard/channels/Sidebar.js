import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

class Sidebar extends Component {
	render() {
		return (
			<div>
				<h1>Sidebar</h1>
			</div>
		);
	}
}

export default connect()(Sidebar);
