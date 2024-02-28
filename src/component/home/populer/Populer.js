import React from 'react';
import Carousel from '../../carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

export default function Populer() {
    const { data, loading } = useFetch("/movie/popular")
    console.log("populer",data)
  return (
    <div>
      <div className='title'>
        <h1>Populer</h1>
        </div>
        <div className='populerlist'>
            <Carousel data={data}
                    loading={loading}/>
        </div>
    </div>
  );
}
