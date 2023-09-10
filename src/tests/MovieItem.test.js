// MyComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MovieItem from '../components/MovieItem';

const movie = {
  Title: 'Captain America: The First Avenger',
  Year: '2011',
  Poster: "url.jpg"
};

test('renders the movie item component with the correct data', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  
  const titleElement = getByText(/Captain America: The First Avenger/i);
  const yearElement = getByText(/2011/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
});

test('renders the poster image with the correct src and alt attributes', () => {
    const src = movie.Poster;
    const alt = movie.Poster;
  
    const { getByAltText } = render(<img src={src} alt={alt} className='img' />);
    const imageElement = getByAltText(alt);
  
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
    expect(imageElement).toHaveAttribute('alt', alt);
  });