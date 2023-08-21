import React from 'react'
import HeroBaner from './heroBaner/HeroBaner'
import Trending from './trending/Trending'


import './style.scss'

const Home = () => {
  return (
    <div>
      <HeroBaner />
      <Trending/>
    </div>
  )
}

export default Home