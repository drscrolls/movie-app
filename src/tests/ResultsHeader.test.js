import { render, screen } from '@testing-library/react';
import ResultsHeader from '../components/ResultsHeader';

test('renders titles on header', () => {
  render(<ResultsHeader />);
  const posterElement = screen.getByText(/Poster/i);
  const titleElement = screen.getByText(/Title/i);
  const yearElement = screen.getByText(/Year/i);

  expect(posterElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
});
