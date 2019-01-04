import React, { Component } from 'react'
import styled from 'styled-components';

class Bleep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  toggleClass = () => {
    const { active } = this.state;
    this.setState({ active: !active })
  }
  render() {
    const { active } = this.state;
    return (
      <li className="pagination__item">
        <button className={`pagination__link ${active ? 'is_active' : null}`} onClick={this.toggleClass}>{this.props.text}</button>
      </li>
    )
  }
}

const Pagination = () => {
  return (
    <Container>
      <div className="wrapper">
        <ul className="pagination">
          <Bleep text={'1'} />
          <Bleep text={'2'} />
          <Bleep text={'3'} />
          <Bleep text={'4'} />
          <Bleep text={'5'} />
          <Bleep text={'6'} />
        </ul>
      </div>
    </Container>
  )
}

export default Pagination;


const Container = styled.div`
      .wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
}

.pagination__item {
  display: inline-block;
  margin: 0 10px;
}
.pagination__link {
  position: relative;
  text-indent: -99em;
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0 10px;
}
.pagination__link:before, .pagination__link:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #ecf0f1;
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.pagination__link:before {
  background: #ecf0f1;
  transform: scale(0.2);
}
.pagination__link:hover:after {
  transform: scale(1.1);
}
.pagination__link.is_active:before {
  transform: scale(0.5);
}
.pagination__link.is_active:after {
  transform: scale(0.2);
}
`;