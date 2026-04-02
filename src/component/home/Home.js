// import React from 'react';
// import Banner from './banner/Banner';
// import Populer from './populer/Populer';
// import Toprated from './toprated/Toprted';
// import Upcoming from './upcoming/Upcoming';
// import Trending from './trending/Trending';

// export default function Home() {
//   return (
//     <div className='home'>
//       <Banner/>
//       <Trending/>
//       <Upcoming/>
//       <Populer/>
//       <Toprated/>
//     </div>
//   );
// }
// import React from "react";
// import Banner from "./banner/Banner";
// import Trending from "./trending/Trending";
// import Upcoming from "./upcoming/Upcoming";
// import Populer from "./populer/Populer";
// import Toprted from "./toprated/Toprted";
// import "./style.scss";

// const Home = () => {
//   return React.createElement(
//     "div",
//     { className: "home" },
//     React.createElement(Banner),
//     React.createElement(Trending),
//     React.createElement(Upcoming),
//     React.createElement(Populer),
//     React.createElement(Toprted),
//   );
// };

// export default Home;

import React, { useEffect, useRef } from "react";
import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import Upcoming from "./upcoming/Upcoming";
import Populer from "./populer/Populer";
import Toprted from "./toprated/Toprted";
import "./style.scss";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const sections = homeRef.current?.querySelectorAll("section");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when section enters view
            entry.target.classList.add("visible");
          } else {
            // Remove class when section leaves view → ready to animate again
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "0px 0px -80px 0px", // Start animation a bit earlier
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return React.createElement(
    "div",
    { className: "home", ref: homeRef },
    React.createElement(Banner),
    React.createElement(Trending),
    React.createElement(Upcoming),
    React.createElement(Populer),
    React.createElement(Toprted),
  );
};

export default Home;
