import React from 'react'
import popular_item from '../myimg/data'
import Items from '../item/items'
import './popular.css'

function popular() {
  return (
    <div className="popular-women-main">
    <div className='popular-women'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_item.map((item, i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>
    </div>
  )
}

export default popular
