import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import './style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';



export default function Banner() {
  const [query, setquery] = useState("");
  const [background, setbackground] = useState("");
  const { url } = useSelector((state) => state.home)
  const navigate = useNavigate()
  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  const { data, loading } = useFetch("/movie/upcoming")


  console.log("banner", data)


  // useEffect(() => {
  //   const bg = url.backdrop + data?.data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
  //   setbackground(bg)
  //   console.log("banner url",bg)
  // }, [data])

  return (
    <div>
      {/* <input
        type='text'
        placeholder='search movie or tv show'
        onChange={(e) => setquery(e.target.value)}
        onKeyUp={searchQuery}
      />
      <button>Search</button> */}
      {!loading ?
        (<div className='banner'>

          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={5}
            infiniteLoop={true}
            showStatus={false}
          >
            {data?.data?.results?.map((item) => {

              const imgurl = item?.backdrop_path ? url.backdrop + item?.backdrop_path : <h1>akash</h1>

              return (
                <div className='poster_item' key={item.id}>
                  <div className='poster_Img'>
                    <img src={imgurl} />
                  </div>
                  <div className='poster_overview'>
                    <div className='poster_title'>
                      {item ? item.original_title : ""}
                    </div>
                    <div className='poster_releasedate'>
                      {item ? item.release_date : ""}
                    </div>
                    <div className='poster_rating'>
                      {item ? item.vote_average : ""}
                    </div>
                    <div className='poster_description'>
                      {item ? item.overview : ""}
                    </div>
                  </div>
                </div>
              )
            }
            )
            }
          </Carousel>

        </div>
        ) : 
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
                
                    <Skeleton height={600} duration={2} />
                
            </SkeletonTheme>
        
      }
    </div>
  );
}
