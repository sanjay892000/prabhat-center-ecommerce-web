import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
function item(props) {
  return (
      <div className="item-page">
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <h4>{props.name}</h4>
        <div className="price-value">
            <p className='new_price'>${props.new_price}</p>
            <p className='old_price'>${props.old_price}</p>
        </div>
      </div>
  )
}

export default item
