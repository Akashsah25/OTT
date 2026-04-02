// import React from 'react';
// import useFetch from '../../../hooks/useFetch';
// import Carousel from '../../../component/carousel/Carousel';

// export default function Similer({id}) {
//     const { data, loading } = useFetch(`/movie/${id}/similar`)
//     return (
//         <div>
//             <div className='title'>
//                 <h2>Similar</h2>
//             </div>
//             <div>
//                 <Carousel data={data}
//                     loading={loading} />
//             </div>
//         </div>
//     );
// }

import React from "react";
import Carousel from "../../../component/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const Recommendation = ({ id }) => {
  const { data, loading } = useFetch(`/movie/${id}/similar`);

  return React.createElement(
    "section",
    { className: "recommendation" },
    React.createElement(
      "div",
      { className: "recommendation__header" },
      React.createElement(
        "div",
        { className: "recommendation__title-wrapper" },
        React.createElement(
          "h2",
          { className: "recommendation__title" },
          "Similar",
        ),
        React.createElement(
          "p",
          { className: "recommendation__subtitle" },
          "More movies you might like",
        ),
      ),
      React.createElement(
        "a",
        {
          href: "#",
          className: "recommendation__view-all",
        },
        "View All ",
      ),
    ),
    React.createElement(
      "div",
      { className: "recommendation__content" },
      React.createElement(Carousel, {
        data: data,
        loading: loading,
      }),
    ),
  );
};

export default Recommendation;
