import React from 'react';
import Carousel from '../../../component/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

export default function Recommendation({id}) {
      const { data, loading } = useFetch(`/movie/${id}/recommendations`)
    return (
        <div>
            <div className='title'>
                <h2>Recommendations</h2>
            </div>
            <div>
                <Carousel data={data}
                    loading={loading} />
            </div>
        </div>
    );
}
