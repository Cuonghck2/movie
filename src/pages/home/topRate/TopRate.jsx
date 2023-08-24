import React, { useState } from 'react'


import Carousel from '../../../components/carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'


import useFetch from '../../../hooks/useFetch'
import './style.scss'



const TopRate = () => {
  const [endPoint, setEndPoint] = useState('movie');

  const { data, loading } = useFetch(`/${endPoint}/top_rated`)

  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movie' ? 'movie' : 'tv')
  }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="title">Top Rate</span>
        <SwitchTabs data={['Movie', 'TV Show']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default TopRate