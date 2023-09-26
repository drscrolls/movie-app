import React from 'react'

export default function MovieItem({movie, key}) {
  let {Title, Year, Poster} = movie;
  return (
    <div key={key} className='col-3 border-bottom p-2'>
      <div className='col-12'>
        <img src={Poster} alt={Poster} className='img rounded'/>
      </div>
      <div className='col-12 mt-2'>
        <h6>{Title}</h6>
        <p>{Year}</p>
      </div>
    </div>
  )
}
