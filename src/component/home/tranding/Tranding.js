import React from 'react';
import Carousel from '../../carousel/Carousel';
import useFetch from '../../../hooks/useFetch';
import "./style.scss"

export default function Upcoming() {
    const { data, loading } = useFetch("/tv/1399?language=en-IN")
    console.log("tranding",data)
  return (
    <div>
      <div className='title'>
        <h1>Tranding</h1>
        </div>
        {/* <div className='populerlist'>
            <Carousel data={data}
                    loading={loading}/>
        </div> */}
    </div>
  );
}
