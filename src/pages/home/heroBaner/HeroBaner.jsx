import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


import useFetch from '../../../hooks/useFetch'
import { Img } from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'

const HeroBaner = () => {
    const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');

    const { url } = useSelector(state => state.home)
    const navigate = useNavigate()

    const { data, loading } = useFetch('/movie/upcoming')

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data])

    const handleSearchQuery = (event) => {
        if (event.key == 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    const handleSearchInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div className='heroBanner'>

            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
                <div className='opacity-layer'></div>

            <ContentWrapper>
                <div className="wraper">
                    <div className="heroBannerContent">
                        <span className="title">Welcom.</span>
                        <span className="subTitle">Millions of movies, TV shows and people to discover.
                            Explore now.</span>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder='Search for a movie or tv show...'
                                onKeyUp={handleSearchQuery}
                                onChange={handleSearchInput}
                            />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBaner