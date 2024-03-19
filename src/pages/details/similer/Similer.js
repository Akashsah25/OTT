import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../component/carousel/Carousel';

export default function Similer({id}) {
    const { data, loading } = useFetch(`/movie/${id}/similar`)
    return (
        <div>
            <div className='title'>
                <h2>Similar</h2>
            </div>
            <div>
                <Carousel data={data}
                    loading={loading} />
            </div>
        </div>
    );
}
