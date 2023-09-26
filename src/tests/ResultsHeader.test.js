import { render, screen } from '@testing-library/react';
import ResultsHeader from '../components/ResultsHeader';

const titleName = "test"
test('renders titles on header', () => {
  const { getByText } = render(<ResultsHeader title={titleName} />);

  const headerElement = getByText(/Here are the results with keyword/i);
  const titleElement = getByText(/test/i);

  expect(headerElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  
});

