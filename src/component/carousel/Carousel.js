import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Carousel({ data, loading }) {
    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate()
    return (
        <div className='carousel_section'>
            {!loading ? (
                <div className="carouselItems">
                    {data?.data?.results?.map((item) => {
                        const poster_img = item.poster_path
                            ? url.poster + item.poster_path
                            : "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005"
                        return (
                            <div key={item.id} onClick={() => navigate(`/movie/${item.id
                                }`)} className='carouselItem'>
                                <div className='cards_img'>
                                    <img src={poster_img} />
                                </div>
                                <div className='cards_overview'>
                                    <div className='cards_title'>
                                        {item ? item.title : ""}
                                    </div>
                                    <div className='cards_releasedate'>
                                        {item ? item.release_date : ""}
                                        {/* {new Date(item.release_date).toGMTString().slice(4,16)} */}
                                        {/* {new Date(item.release_date)} */}
                                    </div>
                                    <div className='cards_rating'>
                                        {item ? item.vote_average : ""}
                                    </div>
                                    {/* <div className='cards_description'>
                                        {item ? item.overview.slice(0, 75) + "..." : ""}
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) :
                <SkeletonTheme baseColor="#202020" highlightColor="#444">

                    <Skeleton height={300} duration={2} />

                </SkeletonTheme>

            }
        </div>
    );
}
