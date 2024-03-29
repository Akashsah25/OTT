import React from 'react';
import Banner from './banner/Banner';
import Populer from './populer/Populer';
import Toprated from './toprated/Toprted';
import Upcoming from './upcoming/Upcoming';
import Trending from './trending/Trending';

export default function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Trending/>
      <Upcoming/>
      <Populer/>
      <Toprated/>
    </div>
  );
}
