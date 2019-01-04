import React from 'react'

const Bleep = (props) => (
  <li className="pagination__item">
    <button className={`pagination__link ${props.active ? 'is_active' : null}`}></button>
  </li>
)

export default Bleep;

