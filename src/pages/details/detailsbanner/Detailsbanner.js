// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import useFetch from "../../../hooks/useFetch";
// import { useParams } from "react-router-dom";
// import "./style.scss";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import VideoPopup from "../../../component/videopopup/VideoPopup";
// import Img from "../../../component/lazyloading/LazyLoding";

// export default function Detailsbanner({ crew }) {
//   // console.log("crew", crew)

//   const [background, setbackground] = useState("");
//   const [poster, setposter] = useState("");
//   const { url } = useSelector((state) => state.home);
//   const { id } = useParams();
//   console.log("id", id);
//   const { data, loading } = useFetch(`/movie/${id}`);
//   console.log("details", data);

//   const { data: videos } = useFetch(`/movie/${id}/videos`);
//   console.log("video", videos);

//   const director = crew?.filter((D) => D.job === "Director");
//   const writer = crew?.filter((W) => W.job === "Writer");

//   const [show, setShow] = useState(false);
//   const [videoId, setVideoId] = useState(null);

//   const imdbimage =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png";

//   const duration = (data) => {
//     const hr = Math.floor(data / 60);
//     const min = data % 60;
//     return `${hr}h ${min}min`;
//   };
//   useEffect(() => {
//     const bgimage = data?.data?.backdrop_path ? (
//       url.backdrop + data?.data?.backdrop_path
//     ) : (
//       <h1>akash</h1>
//     );
//     const posterimage = data?.data?.poster_path ? (
//       url.poster + data?.data?.poster_path
//     ) : (
//       <h1>akash</h1>
//     );
//     setbackground(bgimage);
//     setposter(posterimage);
//   }, [data, url.backdrop, url.poster]);

//   return (
//     <div className="banner">
//       {!loading ? (
//         <div className="banner_item">
//           <div className="banner_img">
//             <Img src={background} />
//           </div>
//           <div className="banner_overview">
//             <div className="banner_content">
//               <div className="banner_poster">
//                 <Img src={poster} />
//               </div>
//               <div className="banner_details">
//                 <div className="banner_title">
//                   {data?.data?.title ? data?.data?.title : ""}
//                 </div>
//                 <div className="banner_description">
//                   {data?.data?.overview ? data?.data?.overview : ""}
//                 </div>
//                 <div className="banner_info">
//                   <div className="logo">
//                     <Img src={imdbimage} />
//                   </div>
//                   <div className="rating">
//                     {data?.data?.vote_average
//                       ? data?.data?.vote_average.toString().slice(0, 3)
//                       : ""}
//                     /10
//                   </div>
//                   <div className="banner_releasedate">
//                     {data?.data?.release_date.toString().slice(0, 4)}
//                   </div>
//                   <div className="runtime">
//                     {data?.data?.runtime ? duration(data?.data?.runtime) : ""}
//                   </div>
//                   <div className="adult">
//                     {data?.data?.adult ? `U/A 16+` : `U/A 13+`}
//                   </div>
//                 </div>
//                 <div className="genres">
//                   {data?.data?.genres.map((data) => {
//                     return (
//                       <div key={data.id} className="genres_name">
//                         {data?.name}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {director?.length > 0 && (
//                   <div className="director">
//                     <div className="director_name">Director: </div>
//                     {director?.map((d, i) => {
//                       return (
//                         <div className="director_name" key={i}>
//                           {d?.name}
//                           {director.length - 1 !== i && ", "}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {writer?.length > 0 && (
//                   <div className="writer">
//                     <div className="writer_name">writer: </div>
//                     {writer?.map((d, i) => {
//                       return (
//                         <div className="writer_name" key={i}>
//                           {d?.name}
//                           {writer.length - 1 !== i && ", "}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 <div
//                   className="playbtn"
//                   onClick={() => {
//                     setShow(true);
//                     setVideoId(videos?.data?.results?.[0]?.key);
//                   }}>
//                   <div className="icon">
//                     {/* <PlayIcon/> */}
//                     <Img src="https://www.iconpacks.net/icons/2/free-play-button-icon-4210-thumb.png" />
//                   </div>
//                   <div className="text">Watch Trailer</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <VideoPopup
//             show={show}
//             setShow={setShow}
//             videoId={videoId}
//             setVideoId={setVideoId}
//           />
//         </div>
//       ) : (
//         <SkeletonTheme baseColor="#202020" highlightColor="#444">
//           <Skeleton height={600} duration={2} />
//         </SkeletonTheme>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./style.scss";
import VideoPopup from "../../../component/videopopup/VideoPopup";
import Img from "../../../component/lazyloading/LazyLoding";

export default function Detailsbanner({ crew }) {
  const [background, setBackground] = useState("");
  const [poster, setPoster] = useState("");
  const { url } = useSelector((state) => state.home);
  const { id } = useParams();

  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: videos } = useFetch(`/movie/${id}/videos`);

  const director = crew?.filter((d) => d.job === "Director") || [];
  const writer = crew?.filter((w) => w.job === "Writer") || [];

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const duration = (mins) => {
    const hr = Math.floor(mins / 60);
    const min = mins % 60;
    return `${hr}h ${min}m`;
  };

  useEffect(() => {
    if (data?.data) {
      setBackground(
        data.data.backdrop_path ? url.backdrop + data.data.backdrop_path : "",
      );
      setPoster(
        data.data.poster_path ? url.poster + data.data.poster_path : "",
      );
    }
  }, [data, url.backdrop, url.poster]);

  const movieData = data?.data;

  return (
    <div className="db-root">
      {/* ── FULL-BLEED BACKDROP ── */}
      <div className="db-backdrop">
        {background && <Img src={background} className="db-backdrop__img" />}
        <div className="db-backdrop__grad-bottom" />
        <div className="db-backdrop__grad-left" />
        <div className="db-backdrop__grad-top" />
        <div className="db-backdrop__noise" />
      </div>

      {!loading && movieData ? (
        <div className="db-hero">
          {/* ── POSTER ── */}
          <div className="db-poster">
            <div className="db-poster__frame">
              {poster && <Img src={poster} className="db-poster__img" />}
              <div className="db-poster__shine" />
            </div>
            {/* Play overlay on poster (mobile) */}
            <button
              className="db-poster__play-mobile"
              onClick={() => {
                setShow(true);
                setVideoId(videos?.data?.results?.[0]?.key);
              }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* ── DETAILS ── */}
          <div className="db-info">
            {/* Tagline / collection */}
            {movieData.belongs_to_collection && (
              <div className="db-collection">
                {movieData.belongs_to_collection.name}
              </div>
            )}

            {/* Title */}
            <h1 className="db-title">
              {movieData.title}
              {movieData.release_date && (
                <span className="db-title__year">
                  ({movieData.release_date.slice(0, 4)})
                </span>
              )}
            </h1>

            {/* Tagline */}
            {movieData.tagline && (
              <p className="db-tagline">"{movieData.tagline}"</p>
            )}

            {/* Meta pills */}
            <div className="db-meta">
              {movieData.adult !== undefined && (
                <span className="db-meta__pill db-meta__pill--cert">
                  {movieData.adult ? "A" : "U/A 13+"}
                </span>
              )}
              {movieData.release_date && (
                <span className="db-meta__pill">
                  {movieData.release_date.slice(0, 4)}
                </span>
              )}
              {movieData.runtime > 0 && (
                <span className="db-meta__pill">
                  {duration(movieData.runtime)}
                </span>
              )}
              {movieData.original_language && (
                <span className="db-meta__pill">
                  {movieData.original_language.toUpperCase()}
                </span>
              )}
            </div>

            {/* Rating bar */}
            <div className="db-rating">
              <div className="db-rating__stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className={`db-rating__star ${
                      s <= Math.round(movieData.vote_average / 2)
                        ? "filled"
                        : ""
                    }`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="db-rating__score">
                {movieData.vote_average?.toFixed(1)}
                <span className="db-rating__max">/10</span>
              </span>
              <span className="db-rating__count">
                {(movieData.vote_count / 1000).toFixed(1)}K ratings
              </span>
            </div>

            {/* Genres */}
            {movieData.genres?.length > 0 && (
              <div className="db-genres">
                {movieData.genres.map((g) => (
                  <span key={g.id} className="db-genres__tag">
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            {/* Overview */}
            {movieData.overview && (
              <div className="db-overview">
                <h3 className="db-overview__label">Overview</h3>
                <p className="db-overview__text">{movieData.overview}</p>
              </div>
            )}

            {/* Crew */}
            <div className="db-crew">
              {director.length > 0 && (
                <div className="db-crew__row">
                  <span className="db-crew__role">Director</span>
                  <span className="db-crew__names">
                    {director.map((d) => d.name).join(", ")}
                  </span>
                </div>
              )}
              {writer.length > 0 && (
                <div className="db-crew__row">
                  <span className="db-crew__role">Screenplay</span>
                  <span className="db-crew__names">
                    {writer.map((w) => w.name).join(", ")}
                  </span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="db-actions">
              <button
                className="db-btn db-btn--primary"
                onClick={() => {
                  setShow(true);
                  setVideoId(videos?.data?.results?.[0]?.key);
                }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Trailer
              </button>
              <button className="db-btn db-btn--ghost">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Watchlist
              </button>
              <button className="db-btn db-btn--icon" title="Share">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="18"
                  height="18">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
            </div>

            {/* Budget / Revenue stats */}
            {(movieData.budget > 0 || movieData.revenue > 0) && (
              <div className="db-stats">
                {movieData.budget > 0 && (
                  <div className="db-stats__item">
                    <span className="db-stats__label">Budget</span>
                    <span className="db-stats__value">
                      ${(movieData.budget / 1e6).toFixed(1)}M
                    </span>
                  </div>
                )}
                {movieData.revenue > 0 && (
                  <div className="db-stats__item">
                    <span className="db-stats__label">Box Office</span>
                    <span className="db-stats__value">
                      ${(movieData.revenue / 1e6).toFixed(1)}M
                    </span>
                  </div>
                )}
                {movieData.status && (
                  <div className="db-stats__item">
                    <span className="db-stats__label">Status</span>
                    <span className="db-stats__value">{movieData.status}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : loading ? (
        <div className="db-skeleton">
          <div className="db-skeleton__poster" />
          <div className="db-skeleton__info">
            <div className="db-skeleton__line db-skeleton__line--sm" />
            <div className="db-skeleton__line db-skeleton__line--lg" />
            <div className="db-skeleton__line db-skeleton__line--md" />
            <div className="db-skeleton__line db-skeleton__line--sm" />
            <div className="db-skeleton__line db-skeleton__line--xl" />
            <div className="db-skeleton__line db-skeleton__line--md" />
            <div className="db-skeleton__actions" />
          </div>
        </div>
      ) : null}

      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
}
