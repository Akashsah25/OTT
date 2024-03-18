import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './style.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Detailsbanner() {
    const [background, setbackground] = useState("");
    const [poster, setposter] = useState("");
    const { url } = useSelector((state) => state.home)
    const { id } = useParams()
    const { data, loading } = useFetch(`/movie/${id}`)
    console.log("details", data)
    const imdbimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
    const duration = (data) => {
        const hr = Math.floor(data / 60)
        const min = data % 60
        return `${hr}h ${min}min`
    }
    useEffect(() => {
        const bgimage = data?.data?.backdrop_path ? url.backdrop + data?.data?.backdrop_path : <h1>akash</h1>
        const posterimage = data?.data?.poster_path ? url.poster + data?.data?.poster_path : <h1>akash</h1>
        setbackground(bgimage)
        setposter(posterimage)
    }, [data])

    return (
        <div className='banner'>
            {!loading ?
                (<div className='banner_item'>
                    <div className='banner_img'>
                        <img src={background} />
                    </div>
                    <div className='banner_overview'>
                        <div className='banner_content'>
                            <div className='banner_poster'>
                                <img src={poster}></img>
                            </div>
                            <div className='banner_details'>
                                <div className='banner_title'>
                                    {data?.data?.title ? data?.data?.title : ""}
                                </div>
                                <div className='banner_info'>
                                    <div className='logo'>
                                        <img src={imdbimage}></img>
                                    </div>
                                    <div className='rating'>
                                        {data?.data?.vote_average ? data?.data?.vote_average.toString().slice(0, 3) : ""}/10
                                    </div>
                                    <div className='banner_releasedate'>
                                        {data?.data?.release_date.toString().slice(0, 4)}
                                    </div>
                                    <div className='runtime'>
                                        {data?.data?.runtime ? duration(data?.data?.runtime) : ""}
                                    </div>
                                    <div className='adult'>
                                        {data?.data?.adult ? `U/A 16+`:`U/A 13+`}
                                    </div>
                                </div>
                                <div className='banner_description'>
                                    {data?.data?.overview ? data?.data?.overview : ""}
                                </div>
                                <div className='genres'>
                                    {data?.data?.genres.map((data)=>{
                                        return(<div key={data.id} className='genres_name'> {data?.name}</div>)
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                ) :
                <SkeletonTheme baseColor="#202020" highlightColor="#444">

                    <Skeleton height={600} duration={2} />

                </SkeletonTheme>

            }
        </div>
    );
}
