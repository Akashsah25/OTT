import React from 'react';
import Carousel from '../../carousel/Carousel';
import useFetch from '../../../hooks/useFetch';
import "./style.scss"

export default function Toprated() {
    const { data, loading } = useFetch("/movie/top_rated")
    console.log("toprated",data)
  return (
    <div>
      <div className='title'>
        <h1 >Toprated</h1>
        </div>
        <div className='populerlist'>
            <Carousel data={data}
                    loading={loading}/>
        </div>
    </div>
  );
}
