import React from 'react'
import arrowIcon from '../myimg/breadcrum_arrow.png'
import './breadcrum.css'

function Breadcrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
      Home <img src={arrowIcon} alt="loading..." /> Shop <img src={arrowIcon} alt="loading..." /> {product.category} <img src={arrowIcon} alt="loading..." /> {product.name}
    </div>
  )
}

export default Breadcrum
