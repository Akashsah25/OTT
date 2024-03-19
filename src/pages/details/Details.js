import React from 'react';
import Detailsbanner from './detailsbanner/Detailsbanner';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Similer from './similer/Similer';
import Recommendation from './recommendation/Recommendation';

export default function Details() {
  const{id}=useParams()
  const{data,loading}=useFetch(`/movie/${id}/credits`)
  console.log("cast",data)
  return (
    <div>
      <Detailsbanner crew={data?.data?.crew}/>
      <Similer id={id}/>
      <Recommendation id={id}/>
    </div>
  );
}
