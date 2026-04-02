// import React from "react";
// import { useSelector } from "react-redux";
// import "./style.scss";
// import { useNavigate } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import Img from "../lazyloading/LazyLoding";

// export default function Carousel({ data, loading }) {
//   const { url } = useSelector((state) => state.home);
//   const navigate = useNavigate();
//   return (
//     <div className="carousel_section">
//       {!loading ? (
//         <div className="carouselItems">
//           {data?.data?.results?.map((item) => {
//             const poster_img = item.poster_path
//               ? url.poster + item.poster_path
//               : "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";
//             return (
//               <div
//                 key={item.id}
//                 onClick={() => navigate(`/movie/${item.id}`)}
//                 className="carouselItem">
//                 <div className="cards_img">
//                   <Img src={poster_img} />
//                 </div>
//                 <div className="cards_overview">
//                   <div className="cards_title">{item ? item.title : ""}</div>
//                   <div className="cards_releasedate">
//                     {item ? item.release_date : ""}
//                     {/* {new Date(item.release_date).toGMTString().slice(4,16)} */}
//                     {/* {new Date(item.release_date)} */}
//                   </div>
//                   <div className="cards_rating">
//                     {item ? item.vote_average : ""}
//                   </div>
//                   {/* <div className='cards_description'>
//                                         {item ? item.overview.slice(0, 75) + "..." : ""}
//                                     </div> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <SkeletonTheme baseColor="#202020" highlightColor="#444">
//           <Skeleton height={300} duration={2} />
//         </SkeletonTheme>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css"; // Ensure skeleton CSS is loaded
// import Img from "../lazyloading/LazyLoding";
// import "./style.scss";

// // Industry Standard: Store fallback assets in constants
// const FALLBACK_POSTER =
//   "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";

// export default function Carousel({ data, loading }) {
//   const { url } = useSelector((state) => state.home);
//   const navigate = useNavigate();

//   // Industry Standard: Clean date formatter instead of string slicing
//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

//   return (
//     <div className="carousel_section">
//       {!loading ? (
//         <div className="carouselItems">
//           {data?.data?.results?.map((item) => {
//             // Use optional chaining carefully
//             const posterUrl = item?.poster_path
//               ? `${url.poster}${item.poster_path}`
//               : FALLBACK_POSTER;

//             return (
//               <div
//                 key={item?.id}
//                 onClick={() => navigate(`/movie/${item?.id}`)}
//                 className="carouselItem"
//                 // Accessibility: Make clickable divs screen-reader friendly
//                 role="button"
//                 tabIndex={0}
//                 aria-label={`View details for ${item?.title || item?.name}`}>
//                 <div className="cards_img">
//                   <Img
//                     src={posterUrl}
//                     alt={item?.title || item?.name || "Poster"}
//                   />
//                 </div>

//                 <div className="cards_overview">
//                   {/* Handle TMDB API differences: Movies use 'title', TV uses 'name' */}
//                   <div className="cards_title">{item?.title || item?.name}</div>

//                   <div className="cards_meta">
//                     <div className="cards_releasedate">
//                       {formatDate(item?.release_date || item?.first_air_date)}
//                     </div>
//                     <div className="cards_rating">
//                       {item?.vote_average ? item.vote_average.toFixed(1) : "NR"}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         // Industry Standard: Loop multiple skeletons to look like actual cards
//         <div className="skeleton_wrapper">
//           <SkeletonTheme baseColor="#1a1a1a" highlightColor="#333">
//             {[...Array(6)].map((_, index) => (
//               <div key={index} className="skeletonItem">
//                 <Skeleton height={270} width={180} borderRadius={12} />
//               </div>
//             ))}
//           </SkeletonTheme>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useRef, useState, useCallback } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Img from "../lazyloading/LazyLoding";
// import "./style.scss";

// const FALLBACK_POSTER =
//   "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";

// const StarIcon = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// );

// const ChevronIcon = ({ direction }) => (
//   <svg
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     {direction === "left" ? (
//       <polyline points="15 18 9 12 15 6" />
//     ) : (
//       <polyline points="9 18 15 12 9 6" />
//     )}
//   </svg>
// );

// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   return new Date(dateString).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//   });
// };

// const getRatingColor = (rating) => {
//   if (rating >= 7.5) return "rating--high";
//   if (rating >= 6) return "rating--mid";
//   return "rating--low";
// };

// export default function Carousel({ data, loading }) {
//   const { url } = useSelector((state) => state.home);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [hoveredId, setHoveredId] = useState(null);

//   const scroll = useCallback((dir) => {
//     const el = scrollRef.current;
//     if (!el) return;
//     el.scrollBy({ left: dir * 600, behavior: "smooth" });
//   }, []);

//   const onMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const stopDrag = () => setIsDragging(false);

//   const results = data?.data?.results || [];

//   return (
//     <div className="carousel-root">
//       {/* Nav arrows */}
//       {!loading && results.length > 0 && (
//         <>
//           <button
//             className="carousel-nav carousel-nav--left"
//             onClick={() => scroll(-1)}
//             aria-label="Scroll left">
//             <ChevronIcon direction="left" />
//           </button>
//           <button
//             className="carousel-nav carousel-nav--right"
//             onClick={() => scroll(1)}
//             aria-label="Scroll right">
//             <ChevronIcon direction="right" />
//           </button>
//         </>
//       )}

//       <div
//         className={`carousel-track ${isDragging ? "is-dragging" : ""}`}
//         ref={scrollRef}
//         onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={stopDrag}
//         onMouseLeave={stopDrag}>
//         {loading ? (
//           <SkeletonTheme baseColor="#141414" highlightColor="#242424">
//             {[...Array(8)].map((_, i) => (
//               <div key={i} className="card-skeleton">
//                 <Skeleton height="100%" borderRadius={10} />
//               </div>
//             ))}
//           </SkeletonTheme>
//         ) : (
//           results.map((item, index) => {
//             const posterUrl = item?.poster_path
//               ? `${url.poster}${item.poster_path}`
//               : FALLBACK_POSTER;
//             const rating = item?.vote_average;
//             const isHovered = hoveredId === item?.id;

//             return (
//               <div
//                 key={item?.id}
//                 className={`cinema-card ${isHovered ? "is-hovered" : ""}`}
//                 style={{ "--index": index }}
//                 onMouseEnter={() => setHoveredId(item?.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 onClick={() => !isDragging && navigate(`/movie/${item?.id}`)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) =>
//                   e.key === "Enter" && navigate(`/movie/${item?.id}`)
//                 }
//                 aria-label={`View ${item?.title || item?.name}`}>
//                 {/* Poster */}
//                 <div className="card-poster">
//                   <Img
//                     src={posterUrl}
//                     alt={item?.title || item?.name || "Movie poster"}
//                   />

//                   {/* Ambient glow */}
//                   <div className="card-glow" />

//                   {/* Rating badge */}
//                   {rating > 0 && (
//                     <div className={`card-badge ${getRatingColor(rating)}`}>
//                       <StarIcon />
//                       <span>{rating.toFixed(1)}</span>
//                     </div>
//                   )}

//                   {/* Hover overlay */}
//                   <div className="card-overlay">
//                     <div className="overlay-content">
//                       <p className="overlay-title">
//                         {item?.title || item?.name}
//                       </p>
//                       {(item?.release_date || item?.first_air_date) && (
//                         <p className="overlay-date">
//                           {formatDate(
//                             item?.release_date || item?.first_air_date,
//                           )}
//                         </p>
//                       )}
//                       {item?.overview && (
//                         <p className="overlay-overview">
//                           {item.overview.length > 120
//                             ? item.overview.slice(0, 120) + "…"
//                             : item.overview}
//                         </p>
//                       )}
//                       <div className="overlay-cta">
//                         <span>View Details</span>
//                         <svg
//                           width="14"
//                           height="14"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2.5">
//                           <line x1="5" y1="12" x2="19" y2="12" />
//                           <polyline points="12 5 19 12 12 19" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Title below card */}
//                 <div className="card-meta">
//                   <p className="card-title">{item?.title || item?.name}</p>
//                   {(item?.release_date || item?.first_air_date) && (
//                     <p className="card-year">
//                       {(item?.release_date || item?.first_air_date)?.slice(
//                         0,
//                         4,
//                       )}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useState, useCallback, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Img from "../lazyloading/LazyLoding";
// import "./style.scss";

// const FALLBACK_POSTER =
//   "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";

// const StarIcon = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// );

// const PlayIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M8 5v14l11-7z" />
//   </svg>
// );

// const InfoIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="12" y1="16" x2="12" y2="12" />
//     <line x1="12" y1="8" x2="12.01" y2="8" />
//   </svg>
// );

// const ChevronIcon = ({ direction }) => (
//   <svg
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     {direction === "left" ? (
//       <polyline points="15 18 9 12 15 6" />
//     ) : (
//       <polyline points="9 18 15 12 9 6" />
//     )}
//   </svg>
// );

// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   return new Date(dateString).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//   });
// };

// const getRatingClass = (rating) => {
//   if (rating >= 7.5) return "rating--high";
//   if (rating >= 6) return "rating--mid";
//   return "rating--low";
// };

// // ─── Floating Popup ───────────────────────────────────────────────────────────
// function PopupCard({ item, anchorRef, posterUrl, onNavigate }) {
//   const popupRef = useRef(null);
//   const [pos, setPos] = useState({ top: 0, left: 0, side: "right" });

//   useEffect(() => {
//     if (!anchorRef.current || !popupRef.current) return;

//     const anchor = anchorRef.current.getBoundingClientRect();
//     const popup = popupRef.current.getBoundingClientRect();
//     const scrollY = window.scrollY;
//     const vpW = window.innerWidth;
//     const POPUP_W = 280;
//     const GAP = 12;

//     // Vertical — vertically center popup on the card, clamped to viewport
//     let top = scrollY + anchor.top + anchor.height / 2 - popup.height / 2;
//     top = Math.max(scrollY + 8, top);

//     // Horizontal — prefer right, fall back to left
//     let left = anchor.right + GAP;
//     let side = "right";
//     if (left + POPUP_W > vpW - 8) {
//       left = anchor.left - POPUP_W - GAP;
//       side = "left";
//     }

//     setPos({ top, left, side });
//   }, [anchorRef]);

//   const rating = item?.vote_average;
//   const title = item?.title || item?.name || "";
//   const date = item?.release_date || item?.first_air_date;
//   const lang = item?.original_language?.toUpperCase();

//   return (
//     <div
//       className={`popup-card popup-card--${pos.side}`}
//       ref={popupRef}
//       style={{ top: pos.top, left: pos.left }}>
//       {/* Top poster strip */}
//       <div className="popup-thumb">
//         <img src={posterUrl} alt={title} />
//         <div className="popup-thumb__fade" />
//         <div className="popup-thumb__title">{title}</div>
//       </div>

//       {/* Info body */}
//       <div className="popup-body">
//         <div className="popup-meta">
//           {rating > 0 && (
//             <span className={`popup-rating ${getRatingClass(rating)}`}>
//               <StarIcon />
//               {rating.toFixed(1)}
//             </span>
//           )}
//           {date && <span className="popup-year">{date.slice(0, 4)}</span>}
//           {lang && <span className="popup-lang">{lang}</span>}
//           {item?.vote_count > 0 && (
//             <span className="popup-votes">
//               {(item.vote_count / 1000).toFixed(1)}K votes
//             </span>
//           )}
//         </div>

//         {item?.overview && (
//           <p className="popup-overview">
//             {item.overview.length > 150
//               ? item.overview.slice(0, 150) + "…"
//               : item.overview}
//           </p>
//         )}

//         {date && (
//           <p className="popup-release">
//             <span className="popup-release__label">Release</span>
//             {formatDate(date)}
//           </p>
//         )}

//         <div className="popup-actions">
//           <button
//             className="popup-btn popup-btn--play"
//             onClick={() => onNavigate(item?.id)}>
//             <PlayIcon />
//             Watch Now
//           </button>
//           <button
//             className="popup-btn popup-btn--info"
//             onClick={() => onNavigate(item?.id)}>
//             <InfoIcon />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main Carousel ────────────────────────────────────────────────────────────
// export default function Carousel({ data, loading }) {
//   const { url } = useSelector((state) => state.home);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const hoverTimer = useRef(null);

//   const results = data?.data?.results || [];

//   const scroll = useCallback((dir) => {
//     scrollRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
//   }, []);

//   const onMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const stopDrag = () => setIsDragging(false);

//   const handleCardEnter = (item, anchorRef, posterUrl) => {
//     clearTimeout(hoverTimer.current);
//     hoverTimer.current = setTimeout(() => {
//       setHoveredItem({ item, anchorRef, posterUrl });
//     }, 350);
//   };

//   const handleCardLeave = () => {
//     clearTimeout(hoverTimer.current);
//     hoverTimer.current = setTimeout(() => setHoveredItem(null), 220);
//   };

//   const keepPopup = () => clearTimeout(hoverTimer.current);
//   const closePopup = () => {
//     clearTimeout(hoverTimer.current);
//     setHoveredItem(null);
//   };

//   useEffect(() => () => clearTimeout(hoverTimer.current), []);

//   return (
//     <>
//       <div className="carousel-root">
//         {!loading && results.length > 0 && (
//           <>
//             <button
//               className="carousel-nav carousel-nav--left"
//               onClick={() => scroll(-1)}
//               aria-label="Scroll left">
//               <ChevronIcon direction="left" />
//             </button>
//             <button
//               className="carousel-nav carousel-nav--right"
//               onClick={() => scroll(1)}
//               aria-label="Scroll right">
//               <ChevronIcon direction="right" />
//             </button>
//           </>
//         )}

//         <div
//           className={`carousel-track ${isDragging ? "is-dragging" : ""}`}
//           ref={scrollRef}
//           onMouseDown={onMouseDown}
//           onMouseMove={onMouseMove}
//           onMouseUp={stopDrag}
//           onMouseLeave={stopDrag}>
//           {loading ? (
//             <SkeletonTheme baseColor="#141414" highlightColor="#242424">
//               {[...Array(8)].map((_, i) => (
//                 <div key={i} className="card-skeleton">
//                   <Skeleton height="100%" borderRadius={10} />
//                 </div>
//               ))}
//             </SkeletonTheme>
//           ) : (
//             results.map((item, index) => {
//               const posterUrl = item?.poster_path
//                 ? `${url.poster}${item.poster_path}`
//                 : FALLBACK_POSTER;

//               // eslint-disable-next-line react/no-unstable-nested-components
//               const cardRef = React.createRef();

//               return (
//                 <div
//                   key={item?.id}
//                   ref={cardRef}
//                   className="cinema-card"
//                   style={{ "--index": index }}
//                   onMouseEnter={() => handleCardEnter(item, cardRef, posterUrl)}
//                   onMouseLeave={handleCardLeave}
//                   onClick={() => !isDragging && navigate(`/movie/${item?.id}`)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) =>
//                     e.key === "Enter" && navigate(`/movie/${item?.id}`)
//                   }
//                   aria-label={`View ${item?.title || item?.name}`}>
//                   {/* ── Completely clean poster — zero overlays ── */}
//                   <div className="card-poster">
//                     <Img
//                       src={posterUrl}
//                       alt={item?.title || item?.name || "Movie poster"}
//                     />
//                     <div className="card-glow" />
//                   </div>

//                   {/* Minimal text below */}
//                   <div className="card-meta">
//                     <p className="card-title">{item?.title || item?.name}</p>
//                     {(item?.release_date || item?.first_air_date) && (
//                       <p className="card-year">
//                         {(item?.release_date || item?.first_air_date)?.slice(
//                           0,
//                           4,
//                         )}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* Floating popup — outside the carousel, never clipped by overflow:hidden */}
//       {hoveredItem && (
//         <div
//           className="popup-portal"
//           onMouseEnter={keepPopup}
//           onMouseLeave={closePopup}>
//           <PopupCard
//             item={hoveredItem.item}
//             anchorRef={hoveredItem.anchorRef}
//             posterUrl={hoveredItem.posterUrl}
//             onNavigate={(id) => {
//               closePopup();
//               navigate(`/movie/${id}`);
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useRef, useState, useCallback, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Img from "../lazyloading/LazyLoding";
// import "./style.scss";

// const FALLBACK_POSTER =
//   "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";

// const StarIcon = () => (
//   <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// );

// const PlayIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M8 5v14l11-7z" />
//   </svg>
// );

// const InfoIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="12" y1="16" x2="12" y2="12" />
//     <line x1="12" y1="8" x2="12.01" y2="8" />
//   </svg>
// );

// const ChevronIcon = ({ direction }) => (
//   <svg
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     {direction === "left" ? (
//       <polyline points="15 18 9 12 15 6" />
//     ) : (
//       <polyline points="9 18 15 12 9 6" />
//     )}
//   </svg>
// );

// const formatDate = (dateString) => {
//   if (!dateString) return "";
//   return new Date(dateString).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//   });
// };

// const getRatingClass = (rating) => {
//   if (rating >= 7.5) return "rating--high";
//   if (rating >= 6) return "rating--mid";
//   return "rating--low";
// };

// // ─── Floating Popup — rendered into document.body via portal ─────────────────
// function PopupCard({ item, rect, posterUrl, onNavigate }) {
//   const POPUP_W = 280;
//   const POPUP_H = 420;
//   const GAP = 12;
//   const vpW = window.innerWidth;

//   // Vertical: above the card; flip below if not enough room above
//   let top = rect.top + window.scrollY - POPUP_H - GAP;
//   if (rect.top < POPUP_H + GAP) {
//     top = rect.bottom + window.scrollY + GAP;
//   }

//   // Horizontal: centered over the card, clamped to viewport
//   let left = rect.left + rect.width / 2 - POPUP_W / 2;
//   left = Math.max(8, Math.min(left, vpW - POPUP_W - 8));

//   const rating = item?.vote_average;
//   const title = item?.title || item?.name || "";
//   const date = item?.release_date || item?.first_air_date;
//   const lang = item?.original_language?.toUpperCase();

//   const popup = (
//     <div
//       className="popup-card"
//       style={{ position: "absolute", top, left, width: POPUP_W }}>
//       <div className="popup-thumb">
//         <img src={posterUrl} alt={title} />
//         <div className="popup-thumb__fade" />
//         <div className="popup-thumb__title">{title}</div>
//       </div>

//       <div className="popup-body">
//         <div className="popup-meta">
//           {rating > 0 && (
//             <span className={`popup-rating ${getRatingClass(rating)}`}>
//               <StarIcon />
//               {rating.toFixed(1)}
//             </span>
//           )}
//           {date && <span className="popup-year">{date.slice(0, 4)}</span>}
//           {lang && <span className="popup-lang">{lang}</span>}
//           {item?.vote_count > 0 && (
//             <span className="popup-votes">
//               {(item.vote_count / 1000).toFixed(1)}K votes
//             </span>
//           )}
//         </div>

//         {item?.overview && (
//           <p className="popup-overview">
//             {item.overview.length > 150
//               ? item.overview.slice(0, 150) + "…"
//               : item.overview}
//           </p>
//         )}

//         {date && (
//           <p className="popup-release">
//             <span className="popup-release__label">Release</span>
//             {formatDate(date)}
//           </p>
//         )}

//         <div className="popup-actions">
//           <button
//             className="popup-btn popup-btn--play"
//             onClick={() => onNavigate(item?.id)}>
//             <PlayIcon />
//             Watch Now
//           </button>
//           <button
//             className="popup-btn popup-btn--info"
//             onClick={() => onNavigate(item?.id)}>
//             <InfoIcon />
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Portal renders directly into document.body — escapes ALL parent overflow/transform
//   return ReactDOM.createPortal(popup, document.body);
// }

// // ─── Single Card with its own stable ref ─────────────────────────────────────
// function CarouselCard({
//   item,
//   index,
//   posterUrl,
//   onEnter,
//   onLeave,
//   onNavigate,
//   isDragging,
// }) {
//   const cardRef = useRef(null);

//   return (
//     <div
//       ref={cardRef}
//       className="cinema-card"
//       style={{ "--index": index }}
//       onMouseEnter={() => onEnter(item, cardRef, posterUrl)}
//       onMouseLeave={onLeave}
//       onClick={() => !isDragging && onNavigate(`/movie/${item?.id}`)}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === "Enter" && onNavigate(`/movie/${item?.id}`)}
//       aria-label={`View ${item?.title || item?.name}`}>
//       <div className="card-poster">
//         <Img
//           src={posterUrl}
//           alt={item?.title || item?.name || "Movie poster"}
//         />
//         <div className="card-glow" />
//       </div>

//       <div className="card-meta">
//         <p className="card-title">{item?.title || item?.name}</p>
//         {(item?.release_date || item?.first_air_date) && (
//           <p className="card-year">
//             {(item?.release_date || item?.first_air_date)?.slice(0, 4)}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── Main Carousel ────────────────────────────────────────────────────────────
// export default function Carousel({ data, loading }) {
//   const { url } = useSelector((state) => state.home);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [hoveredItem, setHoveredItem] = useState(null); // { item, rect, posterUrl }
//   const hoverTimer = useRef(null);

//   const results = data?.data?.results || [];

//   const scroll = useCallback((dir) => {
//     scrollRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
//   }, []);

//   const onMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const stopDrag = () => setIsDragging(false);

//   // Store getBoundingClientRect() snapshot — not the ref itself
//   const handleCardEnter = useCallback((item, cardRef, posterUrl) => {
//     clearTimeout(hoverTimer.current);
//     hoverTimer.current = setTimeout(() => {
//       if (cardRef.current) {
//         const rect = cardRef.current.getBoundingClientRect();
//         setHoveredItem({ item, rect, posterUrl });
//       }
//     }, 350);
//   }, []);

//   const handleCardLeave = useCallback(() => {
//     clearTimeout(hoverTimer.current);
//     hoverTimer.current = setTimeout(() => setHoveredItem(null), 220);
//   }, []);

//   const keepPopup = useCallback(() => clearTimeout(hoverTimer.current), []);
//   const closePopup = useCallback(() => {
//     clearTimeout(hoverTimer.current);
//     setHoveredItem(null);
//   }, []);

//   useEffect(() => () => clearTimeout(hoverTimer.current), []);

//   return (
//     <>
//       <div className="carousel-root">
//         {!loading && results.length > 0 && (
//           <>
//             <button
//               className="carousel-nav carousel-nav--left"
//               onClick={() => scroll(-1)}
//               aria-label="Scroll left">
//               <ChevronIcon direction="left" />
//             </button>
//             <button
//               className="carousel-nav carousel-nav--right"
//               onClick={() => scroll(1)}
//               aria-label="Scroll right">
//               <ChevronIcon direction="right" />
//             </button>
//           </>
//         )}

//         <div
//           className={`carousel-track ${isDragging ? "is-dragging" : ""}`}
//           ref={scrollRef}
//           onMouseDown={onMouseDown}
//           onMouseMove={onMouseMove}
//           onMouseUp={stopDrag}
//           onMouseLeave={stopDrag}>
//           {loading ? (
//             <SkeletonTheme baseColor="#141414" highlightColor="#242424">
//               {[...Array(8)].map((_, i) => (
//                 <div key={i} className="card-skeleton">
//                   <Skeleton height="100%" borderRadius={10} />
//                 </div>
//               ))}
//             </SkeletonTheme>
//           ) : (
//             results.map((item, index) => {
//               const posterUrl = item?.poster_path
//                 ? `${url.poster}${item.poster_path}`
//                 : FALLBACK_POSTER;

//               return (
//                 <CarouselCard
//                   key={item?.id}
//                   item={item}
//                   index={index}
//                   posterUrl={posterUrl}
//                   isDragging={isDragging}
//                   onEnter={handleCardEnter}
//                   onLeave={handleCardLeave}
//                   onNavigate={navigate}
//                 />
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* Portal popup — mouse events bridged via keepPopup/closePopup */}
//       {hoveredItem && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             pointerEvents: "none",
//             zIndex: 9999,
//           }}
//           onMouseEnter={keepPopup}
//           onMouseLeave={closePopup}>
//           <PopupCard
//             item={hoveredItem.item}
//             rect={hoveredItem.rect}
//             posterUrl={hoveredItem.posterUrl}
//             onNavigate={(id) => {
//               closePopup();
//               navigate(`/movie/${id}`);
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// }

import React, { useRef, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Img from "../lazyloading/LazyLoding";
import "./style.scss";

const FALLBACK_POSTER =
  "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005";

const POPUP_W = 280;
const POPUP_H = 400; // approx, used only for flip logic
const GAP = 10;

// ─── Icons ────────────────────────────────────────────────────────────────────
const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronIcon = ({ direction }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    {direction === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const getRatingClass = (rating) => {
  if (rating >= 7.5) return "rating--high";
  if (rating >= 6) return "rating--mid";
  return "rating--low";
};

// ─── Popup — fixed positioning, centered ON the card ─────────────────────────
function PopupCard({ item, rect, posterUrl, onNavigate }) {
  // rect is from getBoundingClientRect() — already viewport-relative (fixed coords)
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;

  // Center horizontally over the card
  let left = rect.left + rect.width / 2 - POPUP_W / 2;
  // Clamp so popup never bleeds off screen edges
  left = Math.max(8, Math.min(left, vpW - POPUP_W - 8));

  // Prefer above the card; flip below if not enough room
  const spaceAbove = rect.top;
  const spaceBelow = vpH - rect.bottom;
  let top;
  let arrowPos; // "bottom" = arrow points down (popup above card), "top" = arrow points up

  if (spaceAbove >= POPUP_H + GAP || spaceAbove >= spaceBelow) {
    // Place above
    top = rect.top - POPUP_H - GAP;
    arrowPos = "bottom";
  } else {
    // Place below
    top = rect.bottom + GAP;
    arrowPos = "top";
  }

  const rating = item?.vote_average;
  const title = item?.title || item?.name || "";
  const date = item?.release_date || item?.first_air_date;
  const lang = item?.original_language?.toUpperCase();

  const popup = (
    <div
      className={`popup-card popup-card--arrow-${arrowPos}`}
      style={{
        position: "fixed", // fixed = viewport coords, no scroll offset needed
        top,
        left,
        width: POPUP_W,
      }}>
      <div className="popup-thumb">
        <img src={posterUrl} alt={title} />
        <div className="popup-thumb__fade" />
        <div className="popup-thumb__title">{title}</div>
      </div>

      <div className="popup-body">
        <div className="popup-meta">
          {rating > 0 && (
            <span className={`popup-rating ${getRatingClass(rating)}`}>
              <StarIcon />
              {rating.toFixed(1)}
            </span>
          )}
          {date && <span className="popup-year">{date.slice(0, 4)}</span>}
          {lang && <span className="popup-lang">{lang}</span>}
          {item?.vote_count > 0 && (
            <span className="popup-votes">
              {(item.vote_count / 1000).toFixed(1)}K votes
            </span>
          )}
        </div>

        {item?.overview && (
          <p className="popup-overview">
            {item.overview.length > 150
              ? item.overview.slice(0, 150) + "…"
              : item.overview}
          </p>
        )}

        {date && (
          <p className="popup-release">
            <span className="popup-release__label">Release</span>
            {formatDate(date)}
          </p>
        )}

        <div className="popup-actions">
          <button
            className="popup-btn popup-btn--play"
            onClick={() => onNavigate(item?.id)}>
            <PlayIcon />
            Watch Now
          </button>
          <button
            className="popup-btn popup-btn--info"
            onClick={() => onNavigate(item?.id)}>
            <InfoIcon />
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(popup, document.body);
}

// ─── Single Card ──────────────────────────────────────────────────────────────
function CarouselCard({
  item,
  index,
  posterUrl,
  onEnter,
  onLeave,
  onNavigate,
  isDragging,
}) {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="cinema-card"
      style={{ "--index": index }}
      onMouseEnter={() => onEnter(item, cardRef, posterUrl)}
      onMouseLeave={onLeave}
      onClick={() => !isDragging && onNavigate(`/movie/${item?.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onNavigate(`/movie/${item?.id}`)}
      aria-label={`View ${item?.title || item?.name}`}>
      <div className="card-poster">
        <Img
          src={posterUrl}
          alt={item?.title || item?.name || "Movie poster"}
        />
        <div className="card-glow" />
      </div>

      <div className="card-meta">
        <p className="card-title">{item?.title || item?.name}</p>
        {(item?.release_date || item?.first_air_date) && (
          <p className="card-year">
            {(item?.release_date || item?.first_air_date)?.slice(0, 4)}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Main Carousel ────────────────────────────────────────────────────────────
export default function Carousel({ data, loading }) {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null); // { item, rect, posterUrl }
  const hoverTimer = useRef(null);

  const results = data?.data?.results || [];

  const scroll = useCallback((dir) => {
    scrollRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  }, []);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  // getBoundingClientRect() gives fixed/viewport coords — perfect for position:fixed popup
  const handleCardEnter = useCallback((item, cardRef, posterUrl) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setHoveredItem({ item, rect, posterUrl });
      }
    }, 300);
  }, []);

  const handleCardLeave = useCallback(() => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoveredItem(null), 200);
  }, []);

  const keepPopup = useCallback(() => clearTimeout(hoverTimer.current), []);
  const closePopup = useCallback(() => {
    clearTimeout(hoverTimer.current);
    setHoveredItem(null);
  }, []);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  return (
    <>
      <div className="carousel-root">
        {!loading && results.length > 0 && (
          <>
            <button
              className="carousel-nav carousel-nav--left"
              onClick={() => scroll(-1)}
              aria-label="Scroll left">
              <ChevronIcon direction="left" />
            </button>
            <button
              className="carousel-nav carousel-nav--right"
              onClick={() => scroll(1)}
              aria-label="Scroll right">
              <ChevronIcon direction="right" />
            </button>
          </>
        )}

        <div
          className={`carousel-track ${isDragging ? "is-dragging" : ""}`}
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}>
          {loading ? (
            <SkeletonTheme baseColor="#141414" highlightColor="#242424">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="card-skeleton">
                  <Skeleton height="100%" borderRadius={10} />
                </div>
              ))}
            </SkeletonTheme>
          ) : (
            results.map((item, index) => {
              const posterUrl = item?.poster_path
                ? `${url.poster}${item.poster_path}`
                : FALLBACK_POSTER;

              return (
                <CarouselCard
                  key={item?.id}
                  item={item}
                  index={index}
                  posterUrl={posterUrl}
                  isDragging={isDragging}
                  onEnter={handleCardEnter}
                  onLeave={handleCardLeave}
                  onNavigate={navigate}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Popup portal — fixed overlay that bridges mouse events */}
      {hoveredItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          onMouseEnter={keepPopup}
          onMouseLeave={closePopup}>
          <PopupCard
            item={hoveredItem.item}
            rect={hoveredItem.rect}
            posterUrl={hoveredItem.posterUrl}
            onNavigate={(id) => {
              closePopup();
              navigate(`/movie/${id}`);
            }}
          />
        </div>
      )}
    </>
  );
}
