import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './style.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { PlayIcon } from '../Playbtn';
import VideoPopup from '../../../component/videopopup/VideoPopup';
import Img from '../../../component/lazyloading/LazyLoding';

export default function Detailsbanner({ crew }) {
    // console.log("crew", crew)

    const [background, setbackground] = useState("");
    const [poster, setposter] = useState("");
    const { url } = useSelector((state) => state.home)
    const {mediatype, id } = useParams()
    console.log("id",id)
    const { data, loading } = useFetch(`/movie/${id}`)
    console.log("details", data)

    const { data:videos, loading:videoloading } = useFetch(`/movie/${id}/videos`)
    console.log("video",videos)

    

    const director = crew?.filter((D) => D.job === "Director");
    const writer = crew?.filter((W) => W.job === "Writer")

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

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
                        <Img src={background} />
                    </div>
                    <div className='banner_overview'>
                        <div className='banner_content'>
                            <div className='banner_poster'>
                                <Img src={poster}/>
                            </div>
                            <div className='banner_details'>
                                <div className='banner_title'>
                                    {data?.data?.title ? data?.data?.title : ""}
                                </div>
                                <div className='banner_description'>
                                    {data?.data?.overview ? data?.data?.overview : ""}
                                </div>
                                <div className='banner_info'>
                                    <div className='logo'>
                                        <Img src={imdbimage}/>
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
                                        {data?.data?.adult ? `U/A 16+` : `U/A 13+`}
                                    </div>
                                </div>
                                <div className='genres'>
                                    {data?.data?.genres.map((data) => {
                                        return (<div key={data.id} className='genres_name'>{data?.name}</div>)
                                    })}
                                </div>
                                {director?.length > 0 && <div className='director'>
                                    <div className='director_name'>Director:{" "}</div>
                                    {director?.map((d, i) => {
                                        return (<div className='director_name' key={i} >
                                            {d?.name}
                                            {director.length -
                                                1 !==
                                                i && ", "}
                                        </div>)
                                    })}
                                </div>}
                                {writer?.length > 0 && <div className='writer'>
                                    <div className='writer_name'>writer: {" "}</div>
                                    {writer?.map((d, i) => {
                                        return (<div className='writer_name' key={i} >
                                            {d?.name}
                                            {writer.length -
                                                1 !==
                                                i && ", "}
                                        </div>)
                                    })}
                                </div>
                                }
                                <div className="playbtn"
                                    onClick={() => {
                                        setShow(true);
                                        setVideoId(videos?.data?.results?.[0]?.key);
                                    }}
                                >
                                    <div className='icon'>
                                    {/* <PlayIcon/> */}
                                    <Img src='https://www.iconpacks.net/icons/2/free-play-button-icon-4210-thumb.png'/>
                                    </div>
                                    <div className="text">
                                        Watch Trailer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VideoPopup
                        show={show}
                        setShow={setShow}
                        videoId={videoId}
                        setVideoId={setVideoId}
                    />
                </div>
                ) :
                <SkeletonTheme baseColor="#202020" highlightColor="#444">

                    <Skeleton height={600} duration={2} />

                </SkeletonTheme>

            }
        </div>
    );
}
