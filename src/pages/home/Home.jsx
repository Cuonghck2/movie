import React from 'react'
import HeroBaner from './heroBaner/HeroBaner'
import Trending from './trending/Trending'


import './style.scss'
import Popular from './popular/Popular'
import TopRate from './topRate/TopRate'

const Home = () => {
  return (
    <div>
      <HeroBaner />
      <Trending/>
      <Popular/>
      <TopRate/>
    </div>
  )
}

export default Home