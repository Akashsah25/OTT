import React from 'react';
import Carousel from '../../carousel/Carousel';
import useFetch from '../../../hooks/useFetch';
import "./style.scss"

export default function Upcoming() {
  const { data, loading } = useFetch("/movie/upcoming")
  console.log("upcoming", data)
  return (
    <div>
      <div className='title'>
        <h1>upcoming</h1>
      </div>
      <div className='populerlist'>
        <Carousel data={data}
          loading={loading} />
      </div>
    </div>
  );
}
