// import React from 'react';
// import Carousel from '../../carousel/Carousel';
// import useFetch from '../../../hooks/useFetch';
// import './style.scss'

// export default function Populer() {
//     const { data, loading } = useFetch("/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&with_original_language=hi")

//     console.log("populer",data)
//   return (
//     <div>
//       <div className='title'>
//         <h2>Bollywood Populer</h2>
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

const Popular = () => {
  const { data, loading } = useFetch(
    "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&with_original_language=hi",
  );

  return React.createElement(
    "section",
    { className: "popular" },
    React.createElement(
      "div",
      { className: "popular__header" },
      React.createElement(
        "div",
        { className: "popular__title-wrapper" },
        React.createElement(
          "h2",
          { className: "popular__title" },
          "Bollywood Popular",
        ),
        React.createElement(
          "p",
          { className: "popular__subtitle" },
          "Most Watched Hindi Movies Right Now",
        ),
      ),
      React.createElement(
        "a",
        {
          // href: "/popular",
          className: "popular__view-all",
        },
        "View All ",
      ),
    ),
    React.createElement(
      "div",
      { className: "popular__content" },
      React.createElement(Carousel, {
        data: data,
        loading: loading,
      }),
    ),
  );
};

export default Popular;
