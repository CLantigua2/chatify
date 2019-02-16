import React from "react"
import styled from "styled-components"
import Robot from "../../img/robot.png"
import Zoom from "react-reveal/Zoom"
import p1 from "../../img/p1.png"
import p2 from "../../img/p2.jpg"
import p3 from "../../img/p3.jpg"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import propTypes from "prop-types"

const Landing = () => (
  <Container>
    <Header>
      <Zoom>
        <Logo src={Robot} alt="Chatify logo robot" />
      </Zoom>
      <Zoom>
        <About>
          <h1>Chat||fy</h1>
          <h5>Join your friends today.</h5>
          <div>
            <img src={p1} alt="first friend avatar" />
            <img src={p2} alt="second friend avatar" />
            <img src={p3} alt="third friend avatar" />
          </div>
          <Links>
            <Button to="/login" primary="true">
              <span>LogIn</span>
            </Button>
            <Button to="/register">
              <span>Register</span>
            </Button>
          </Links>
        </About>
      </Zoom>
    </Header>
  </Container>
)

Landing.propTypes = {
  auth: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing)

const Container = styled.div`
  background: #816fea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  h1 {
    font-family: "ZCOOL XiaoWei", serif;
    font-size: 6.5rem;
  }
  h5 {
    border-top: 2px solid ${props => props.theme.offWhite};
    padding: 40px;
    margin-top: 30px;
    color: ${props => props.theme.offWhite};
  }
  div {
    img {
      margin-left: -20px;
      width: 400px;
      border-radius: 25px;
      transition: 0.5s ease-in-out;
      &:hover {
        box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
        transform: scale(1.025);
      }
    }
  }
`

const About = styled.div`
  background: #816fea;
  padding: 35px;
  border-radius: 10px;
  height: 400px;
  margin-right: 100px;
  transform: scale(1.5);
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
    }
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 100px;
`

const Button = styled(Link)`
  background-color: ${props =>
    props.primary ? "rgb(28,184,65)" : "rgb(202, 60, 60)"};
  width: 100px;
  display: inline-block;
  border-radius: 4px;
  border: none;
  text-align: center;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  span {
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover span {
    padding-right: 25px;
  }
  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

const Logo = styled.img`
  width: 500px;
`
