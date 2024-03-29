import React from 'react';
import Carousel from '../../carousel/Carousel';
import useFetch from '../../../hooks/useFetch';
import './style.scss'

export default function Populer() {
    const { data, loading } = useFetch("/discover/movie?api_key=285552cb6170731e80f84163aadc725c&page=1&with_original_language=hi")

    console.log("populer",data)
  return (
    <div>
      <div className='title'>
        <h2>Bollywood Populer</h2>
        </div>
        <div>
            <Carousel data={data}
                    loading={loading}/>
        </div>
    </div>
  );
}
