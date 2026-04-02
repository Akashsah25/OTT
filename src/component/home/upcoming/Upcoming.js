// import React from "react";
// import Carousel from "../../carousel/Carousel";
// import useFetch from "../../../hooks/useFetch";
// import "./style.scss";

// export default function Upcoming() {
//   const { data, loading } = useFetch(
//     "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=2&primary_release_year=2026&with_original_language=hi",
//   );
//   // console.log("upcoming", data)
//   return (
//     <div>
//       <div className="title">
//         <h2>Upcoming</h2>
//       </div>
//       <div>
//         <Carousel data={data} loading={loading} />
//       </div>
//     </div>
//   );
// }

import React from "react";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const Upcoming = () => {
  const { data, loading } = useFetch(
    "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=3&primary_release_year=2026&with_original_language=hi",
  );

  return React.createElement(
    "section",
    { className: "upcoming" },
    React.createElement(
      "div",
      { className: "upcoming__header" },
      React.createElement(
        "div",
        { className: "upcoming__title-wrapper" },
        React.createElement(
          "h2",
          { className: "upcoming__title" },
          "Coming Soon",
        ),
        React.createElement(
          "p",
          { className: "upcoming__subtitle" },
          "Highly Anticipated Hindi Movies • 2026",
        ),
      ),
      React.createElement(
        "a",
        {
          // href: "/upcoming",
          className: "upcoming__view-all",
        },
        "View All ",
      ),
    ),
    React.createElement(
      "div",
      { className: "upcoming__content" },
      React.createElement(Carousel, {
        data: data,
        loading: loading,
      }),
    ),
  );
};

export default Upcoming;
