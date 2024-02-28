import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function Details() {
  const {id}=useParams()
  const { data, loading } = useFetch(`${id}`)
  console.log(data)

  return (
    <div>
      
    </div>
  );
}
