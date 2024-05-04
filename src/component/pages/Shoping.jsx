import React from 'react';
import Hero from "../Hero_page/Hero.jsx"
import Popular from '../popular/popular.jsx';
import Offer from '../offer/Offer.jsx';
import NewCollection from '../new_collection/NewCollection.jsx';
import NewsLetter from '../news_letter/NewsLetter.jsx';
import Recommendations from '../recommendations/recommendations.jsx';
function Shoping() {
  return (
    <div>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollection/>
    <NewsLetter/>
    <Recommendations/>
    </div>
  )
}

export default Shoping
