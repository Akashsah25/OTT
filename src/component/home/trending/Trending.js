// import React from "react";
// import Carousel from "../../carousel/Carousel";
// import useFetch from "../../../hooks/useFetch";
// import "./style.scss";

// export default function Trending() {
//   const { data, loading } = useFetch(
//     "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi",
//   );
//   // console.log("tranding",data)
//   return (
//     <div>
//       <div className="title">
//         <h2>Trending</h2>
//       </div>
//       <div>
//         <Carousel data={data} loading={loading} />
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import Carousel from "../../carousel/Carousel";
// import useFetch from "../../../hooks/useFetch";
// import "./style.scss";

// const Trending = () => {
//   const { data, loading } = useFetch(
//     "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi",
//   );

//   return React.createElement(
//     "section",
//     { className: "trending" },
//     React.createElement(
//       "div",
//       { className: "trending__header" },
//       React.createElement("h2", { className: "trending__title" }, "Trending"),
//     ),
//     React.createElement(
//       "div",
//       { className: "trending__content" },
//       React.createElement(Carousel, { data: data, loading: loading }),
//     ),
//   );
// };

// export default Trending;

import React from "react";
import Carousel from "../../carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const Trending = () => {
  const { data, loading } = useFetch(
    "/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&primary_release_year=2026&with_original_language=hi",
  );

  return React.createElement(
    "section",
    { className: "trending" },
    React.createElement(
      "div",
      { className: "trending__header" },
      React.createElement(
        "div",
        { className: "trending__title-wrapper" },
        React.createElement(
          "h2",
          { className: "trending__title" },
          "Trending Now",
        ),
        React.createElement(
          "p",
          { className: "trending__subtitle" },
          "Popular in India • Hindi Movies",
        ),
      ),
      React.createElement(
        "a",
        {
          // href: "/trending",
          className: "trending__view-all",
        },
        "View All ",
      ),
    ),
    React.createElement(
      "div",
      { className: "trending__content" },
      React.createElement(Carousel, {
        data: data,
        loading: loading,
      }),
    ),
  );
};

export default Trending;
