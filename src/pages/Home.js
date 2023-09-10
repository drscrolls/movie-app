import { Paper } from '@mui/material'
import React, { useState } from 'react'
import MovieItem from '../components/MovieItem';
import axios from 'axios';
import ResultsHeader from '../components/ResultsHeader';

export default function Home() {

  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitSearch, setSubmitSearch] = useState(false);

  const handleKeyPress = (event) => {
    // perform search when enter key is pressed
    if (event.key === 'Enter') {
      searchMovie();
    }
  };

  const searchMovie = async () => {
    // Get baseurl, apikey for omdb api
    const baseUrl = process.env.REACT_APP_API_BASEURL;
    const apiKey = process.env.REACT_APP_APIKEY;


    // Create url using search parameter
    let url = baseUrl + `?apiKey=${apiKey}`;
    if(title){
      url += `&s=${title}`;
    }else{
      return setError("Please enter a movie title");
    }

    setError(null);
    setSubmitSearch(true);
    setLoading(true);

    // Await api result
    await axios.get(url)
      .then((response) => {
        console.log('response', response);
        if(response){
          if(response.status == 200){
            setResults(response.data?.Search ?? []);
          }else{
            setError("Unable to get results... Please try again.");
          }
        } else {
          setError("Unable to get results... Please try again.");
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
        setError("Error occured while fetching results. Please try again.");
      })
      .finally((res) => {
        // Disable loading
        setLoading(false);
      });

  }

  
  
  return (
    
    <div className='container'>
        <div>
          <h3 align="center">OMDb Movie Search App</h3>
        </div>

        <div className='row mt-3 pb-3 mb-3 border-bottom'>
          <div className='form-group mx-1 col'>
            <input type="text" placeholder='Search by Title' onKeyDown={handleKeyPress} className='form-control' onChange={(e) => setTitle(e.target.value)} value={title} />
          </div>

          <div className='form-group mx-1 col-2'>
            <button type="button" className="btn btn-primary w-100" onClick={() => searchMovie()}>Search</button>
          </div>
        </div>
        <div>
          {!loading && results && results.length > 0 && (
            <>
              <ResultsHeader/>

              {results.map((movie, index) => (<MovieItem movie={movie} key={index}/>))}
              
            </>
          )}
          {title && !loading && submitSearch && results.length == 0 && (<p className='text-center p-3'>No movies were found.</p>)}
          {title && !error && loading && (<p className='text-center p-3'>Loading...</p>)}
          {error && (<p className='text-center p-3 text-danger'>{error}</p>)}
          {!error && !submitSearch && (!results || results.length == 0) && (<p className='text-muted text-center p-3'>Your search results will appear here. Happy searching 😊</p>)}
        </div>
    </div>
  )
}
