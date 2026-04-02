// import React from 'react';
// import Carousel from '../../carousel/Carousel';
// import useFetch from '../../../hooks/useFetch';
// import "./style.scss"

// export default function Toprated() {
//     const { data, loading } = useFetch("/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=4&with_original_language=hi")
//     // console.log("toprated",data)
//   return (
//     <div>
//       <div className='title'>
//         <h2 >Toprated</h2>
//         </div>
//         <div>
//             <Carousel data={data}
//                     loading={loading}/>
//         </div>
//     </div>
//   );
// }

import React from "react";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const TopRated = () => {
  const { data, loading } = useFetch(
    "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=4&with_original_language=hi",
  );

  return React.createElement(
    "section",
    { className: "top-rated" },
    React.createElement(
      "div",
      { className: "top-rated__header" },
      React.createElement(
        "div",
        { className: "top-rated__title-wrapper" },
        React.createElement(
          "h2",
          { className: "top-rated__title" },
          "Top Rated",
        ),
        React.createElement(
          "p",
          { className: "top-rated__subtitle" },
          "Highest Rated Bollywood Movies",
        ),
      ),
      React.createElement(
        "a",
        {
          // href: "/top-rated",
          className: "top-rated__view-all",
        },
        "View All ",
      ),
    ),
    React.createElement(
      "div",
      { className: "top-rated__content" },
      React.createElement(Carousel, {
        data: data,
        loading: loading,
      }),
    ),
  );
};

export default TopRated;
