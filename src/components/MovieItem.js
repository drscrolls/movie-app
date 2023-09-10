import React from 'react'

export default function MovieItem({movie, key}) {
  let {Title, Year, Poster} = movie;
  return (
    <div key={key} className='row border-bottom p-2'>
      <div className='col-2'>
        <img src={Poster} alt={Poster} className='img'/>
      </div>
      <div className='col'>
        <p>{Title}</p>
      </div>
      <div className='col-2'>
        <p>{Year}</p>
      </div>
    </div>
  )
}
