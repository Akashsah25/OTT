import React from 'react';
import Banner from './banner/Banner';
import Populer from './populer/Populer';
import Toprated from './toprated/Toprted';
import Tranding from './tranding/Tranding';
import Upcoming from './upcoming/Upcoming';

export default function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Tranding/>
      <Upcoming/>
      <Populer/>
      <Toprated/>
    </div>
  );
}
