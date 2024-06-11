import React from 'react';
import new_collection from '../myimg/new_collections'
import './newcollection.css'
import Items from '../item/items'

function NewCollection() {
  return (
    <div className="popular-women-main">
    <div className='popular-women'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="popular-item">
        {new_collection.map((item, i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>
    </div>
  )
}

export default NewCollection
