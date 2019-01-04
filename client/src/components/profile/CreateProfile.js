import React, { Component } from 'react'
import Pagination from '../common/Pagination';
import styled from 'styled-components';
import bg from '../../img/chatifylanding.jpg'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../redux/actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      username: '',
      city: '',
      state: '',
      status: '',
      errors: {},
      question1: false,
      question2: false,
      question3: false,
      question4: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      city,
      state,
      status
    } = this.state;
    const profileData = {
      username,
      city,
      state,
      status
    };
    this.props.createProfile(profileData, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Pagination />
        <h1>Create Profile</h1>
      </Container>
    )
  }
}

CreateProfile.proTypes = {
  profile: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, { createProfile })(CreateProfile)

const Container = styled.div`
width: 100vw;
height: 100vw;
background: url(${bg});
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
`;