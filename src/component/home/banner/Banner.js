// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "../../../hooks/useFetch";
// import { useSelector } from "react-redux";
// import "./style.scss";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import Img from "../../lazyloading/LazyLoding";

// export default function Banner() {
//   const { url } = useSelector((state) => state.home);
//   const { mediatype } = useParams();
//   console.log("mediatype", mediatype);
//   const navigate = useNavigate();
//   // const searchQuery = (event) => {
//   //   if (event.key === "Enter" && query.length > 0) {
//   //     navigate(`/search/${query}`)
//   //   }
//   // }

//   const { data, loading } = useFetch(
//     `/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi`,
//   );

//   // console.log("banner", data)

//   return (
//     <div className="poster_content">
//       {/* <input
//         type='text'
//         placeholder='search movie or tv show'
//         onChange={(e) => setquery(e.target.value)}
//         onKeyUp={searchQuery}
//       />
//       <button>Search</button> */}
//       {!loading ? (
//         <div className="poster">
//           <Carousel
//             showThumbs={false}
//             autoPlay={true}
//             transitionTime={5}
//             infiniteLoop={true}
//             showStatus={false}>
//             {data?.data?.results?.map((item) => {
//               const imgurl = item?.backdrop_path ? (
//                 url.backdrop + item?.backdrop_path
//               ) : (
//                 <h1>akash</h1>
//               );
//               const imdbimage =
//                 "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png";

//               return (
//                 <div
//                   className="poster_item"
//                   key={item.id}
//                   onClick={() => navigate(`/movie/${item.id}`)}>
//                   <div className="poster_Img">
//                     <Img src={imgurl} />
//                   </div>
//                   <div className="poster_overview">
//                     <div className="poster_title">
//                       {item.title ? item.title : ""}
//                     </div>
//                     <div className="poster_rating">
//                       <div className="logo">
//                         <Img src={imdbimage} />
//                       </div>
//                       <div className="rating">
//                         {item.vote_average
//                           ? item.vote_average.toString().slice(0, 3)
//                           : ""}
//                         /10
//                       </div>
//                     </div>
//                     <div className="poster_description">
//                       {item ? item.overview : ""}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Carousel>
//         </div>
//       ) : (
//         <SkeletonTheme baseColor="#202020" highlightColor="#444">
//           <Skeleton height={600} duration={2} />
//         </SkeletonTheme>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import useFetch from "../../../hooks/useFetch";
// import { useSelector } from "react-redux";
// import "./style.scss";

// export default function Banner() {
//   const { url } = useSelector((state) => state.home);
//   // const { mediatype } = useParams();
//   const navigate = useNavigate();

//   const { data, loading } = useFetch(
//     `/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi`,
//   );

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [progressKey, setProgressKey] = useState(0);
//   const intervalRef = useRef(null);
//   const SLIDE_DURATION = 6000;

//   const results = data?.data?.results || [];

//   const goTo = (index) => {
//     if (isTransitioning || index === activeIndex) return;
//     setIsTransitioning(true);
//     setPrevIndex(activeIndex);
//     setActiveIndex(index);
//     setProgressKey((k) => k + 1);
//     setTimeout(() => {
//       setPrevIndex(null);
//       setIsTransitioning(false);
//     }, 900);
//   };

//   const goNext = () => {
//     if (results.length === 0) return;
//     goTo((activeIndex + 1) % results.length);
//   };

//   useEffect(() => {
//     if (results.length === 0) return;
//     intervalRef.current = setInterval(goNext, SLIDE_DURATION);
//     return () => clearInterval(intervalRef.current);
//   }, [results.length, activeIndex, isTransitioning]);

//   const activeItem = results[activeIndex];
//   // const prevItem = results[prevIndex];

//   const getImgUrl = (item) =>
//     item?.backdrop_path ? url.backdrop + item.backdrop_path : null;

//   const skeletonSlides = Array(5).fill(null);

//   return (
//     <div className="ottp-banner">
//       {/* SLIDES */}
//       <div className="ottp-slides">
//         {loading
//           ? skeletonSlides.map((_, i) => (
//               <div key={i} className={`ottp-slide ${i === 0 ? "active" : ""}`}>
//                 <div className="ottp-slide__bg skeleton-bg" />
//               </div>
//             ))
//           : results.map((item, i) => {
//               const isActive = i === activeIndex;
//               const isPrev = i === prevIndex;
//               return (
//                 <div
//                   key={item.id}
//                   className={`ottp-slide ${isActive ? "active" : ""} ${isPrev ? "prev" : ""}`}>
//                   {getImgUrl(item) && (
//                     <img
//                       className="ottp-slide__bg"
//                       src={getImgUrl(item)}
//                       alt={item.title}
//                       loading="lazy"
//                     />
//                   )}
//                 </div>
//               );
//             })}

//         {/* GRADIENT OVERLAYS */}
//         <div className="ottp-overlay ottp-overlay--bottom" />
//         <div className="ottp-overlay ottp-overlay--left" />
//         <div className="ottp-overlay ottp-overlay--top" />
//         <div className="ottp-overlay ottp-overlay--vignette" />

//         {/* CONTENT */}
//         <div className="ottp-content">
//           {loading ? (
//             <div className="ottp-content__inner">
//               <div className="skeleton-tag" />
//               <div className="skeleton-title" />
//               <div className="skeleton-meta" />
//               <div className="skeleton-desc" />
//               <div className="skeleton-actions" />
//             </div>
//           ) : activeItem ? (
//             <div className="ottp-content__inner" key={activeItem.id}>
//               {/* GENRE BADGE */}
//               <div className="ottp-badge">
//                 <span className="ottp-badge__dot" />
//                 NOW TRENDING
//               </div>

//               {/* TITLE */}
//               <h1 className="ottp-title">
//                 {activeItem.title || activeItem.name || ""}
//               </h1>

//               {/* META ROW */}
//               <div className="ottp-meta">
//                 <span className="ottp-meta__rating">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="#f5c518">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   {activeItem.vote_average?.toFixed(1)}
//                   <span className="ottp-meta__sub">/10</span>
//                 </span>
//                 <span className="ottp-meta__sep">·</span>
//                 <span className="ottp-meta__year">
//                   {activeItem.release_date?.slice(0, 4)}
//                 </span>
//                 <span className="ottp-meta__sep">·</span>
//                 <span className="ottp-meta__lang">
//                   {activeItem.original_language?.toUpperCase()}
//                 </span>
//                 <span className="ottp-meta__votes">
//                   {(activeItem.vote_count / 1000).toFixed(1)}K votes
//                 </span>
//               </div>

//               {/* DESCRIPTION */}
//               <p className="ottp-desc">
//                 {activeItem.overview?.length > 180
//                   ? activeItem.overview.slice(0, 180) + "…"
//                   : activeItem.overview}
//               </p>

//               {/* ACTIONS */}
//               <div className="ottp-actions">
//                 <button
//                   className="ottp-btn ottp-btn--primary"
//                   onClick={() => navigate(`/movie/${activeItem.id}`)}>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="currentColor">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                   Watch Now
//                 </button>
//                 <button className="ottp-btn ottp-btn--secondary">
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2">
//                     <circle cx="12" cy="12" r="10" />
//                     <line x1="12" y1="8" x2="12" y2="16" />
//                     <line x1="8" y1="12" x2="16" y2="12" />
//                   </svg>
//                   More Info
//                 </button>
//               </div>
//             </div>
//           ) : null}
//         </div>

//         {/* THUMBNAILS / SLIDE SELECTOR */}
//         {!loading && results.length > 0 && (
//           <div className="ottp-thumbnails">
//             {results.slice(0, 7).map((item, i) => (
//               <button
//                 key={item.id}
//                 className={`ottp-thumb ${i === activeIndex ? "active" : ""}`}
//                 onClick={() => goTo(i)}>
//                 {getImgUrl(item) && (
//                   <img src={getImgUrl(item)} alt={item.title} />
//                 )}
//                 <div className="ottp-thumb__overlay" />
//                 {i === activeIndex && (
//                   <div className="ottp-thumb__progress">
//                     <div
//                       key={progressKey}
//                       className="ottp-thumb__progress-bar"
//                       style={{ animationDuration: `${SLIDE_DURATION}ms` }}
//                     />
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* SLIDE COUNTER */}
//         {!loading && results.length > 0 && (
//           <div className="ottp-counter">
//             <span className="ottp-counter__active">
//               {/* {String(activeIndex + 1).padStart(2, "0")} */}
//             </span>
//             {/* <span className="ottp-counter__sep"> / </span> */}
//             <span className="ottp-counter__total">
//               {/* {String(Math.min(results.length, 7)).padStart(2, "0")} */}
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import "./style.scss";

export default function Banner() {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const { data, loading } = useFetch(
    `/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi`,
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef(null);
  const SLIDE_DURATION = 6000;

  const results = data?.data?.results || [];

  const goTo = useCallback(
    (index) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      setProgressKey((k) => k + 1);
      setTimeout(() => {
        setPrevIndex(null);
        setIsTransitioning(false);
      }, 900);
    },
    [isTransitioning, activeIndex],
  );

  const goNext = useCallback(() => {
    if (results.length === 0) return;
    goTo((activeIndex + 1) % results.length);
  }, [results.length, activeIndex, goTo]);

  useEffect(() => {
    if (results.length === 0) return;
    intervalRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => clearInterval(intervalRef.current);
  }, [results.length, goNext]);

  const activeItem = results[activeIndex];

  const getImgUrl = (item) =>
    item?.backdrop_path ? url.backdrop + item.backdrop_path : null;

  const skeletonSlides = Array(5).fill(null);

  return (
    <div className="ottp-banner">
      <div className="ottp-slides">
        {loading
          ? skeletonSlides.map((_, i) => (
              <div key={i} className={`ottp-slide ${i === 0 ? "active" : ""}`}>
                <div className="ottp-slide__bg skeleton-bg" />
              </div>
            ))
          : results.map((item, i) => {
              const isActive = i === activeIndex;
              const isPrev = i === prevIndex;
              return (
                <div
                  key={item.id}
                  className={`ottp-slide ${isActive ? "active" : ""} ${isPrev ? "prev" : ""}`}>
                  {getImgUrl(item) && (
                    <img
                      className="ottp-slide__bg"
                      src={getImgUrl(item)}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}

        <div className="ottp-overlay ottp-overlay--bottom" />
        <div className="ottp-overlay ottp-overlay--left" />
        <div className="ottp-overlay ottp-overlay--top" />
        <div className="ottp-overlay ottp-overlay--vignette" />

        <div className="ottp-content">
          {loading ? (
            <div className="ottp-content__inner">
              <div className="skeleton-tag" />
              <div className="skeleton-title" />
              <div className="skeleton-meta" />
              <div className="skeleton-desc" />
              <div className="skeleton-actions" />
            </div>
          ) : activeItem ? (
            <div className="ottp-content__inner" key={activeItem.id}>
              <div className="ottp-badge">
                <span className="ottp-badge__dot" />
                NOW TRENDING
              </div>

              <h1 className="ottp-title">
                {activeItem.title || activeItem.name || ""}
              </h1>

              <div className="ottp-meta">
                <span className="ottp-meta__rating">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#f5c518">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {activeItem.vote_average?.toFixed(1)}
                  <span className="ottp-meta__sub">/10</span>
                </span>
                <span className="ottp-meta__sep">·</span>
                <span className="ottp-meta__year">
                  {activeItem.release_date?.slice(0, 4)}
                </span>
                <span className="ottp-meta__sep">·</span>
                <span className="ottp-meta__lang">
                  {activeItem.original_language?.toUpperCase()}
                </span>
                <span className="ottp-meta__votes">
                  {(activeItem.vote_count / 1000).toFixed(1)}K votes
                </span>
              </div>

              <p className="ottp-desc">
                {activeItem.overview?.length > 180
                  ? activeItem.overview.slice(0, 180) + "…"
                  : activeItem.overview}
              </p>

              <div className="ottp-actions">
                <button
                  className="ottp-btn ottp-btn--primary"
                  onClick={() => navigate(`/movie/${activeItem.id}`)}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Now
                </button>
                <button className="ottp-btn ottp-btn--secondary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  More Info
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {!loading && results.length > 0 && (
          <div className="ottp-thumbnails">
            {results.slice(0, 7).map((item, i) => (
              <button
                key={item.id}
                className={`ottp-thumb ${i === activeIndex ? "active" : ""}`}
                onClick={() => goTo(i)}>
                {getImgUrl(item) && (
                  <img src={getImgUrl(item)} alt={item.title} />
                )}
                <div className="ottp-thumb__overlay" />
                {i === activeIndex && (
                  <div className="ottp-thumb__progress">
                    <div
                      key={progressKey}
                      className="ottp-thumb__progress-bar"
                      style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="ottp-counter">
            <span className="ottp-counter__active" />
            <span className="ottp-counter__total" />
          </div>
        )}
      </div>
    </div>
  );
}
