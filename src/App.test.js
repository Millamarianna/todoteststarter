import React from 'react';
import App from './App';
import { render, screen, fireEvent } from'@testing-library/react';
import'@testing-library/jest-dom/extend-expect';

test('add & clear todo',() => {  
  render(<App />);
  // Add todo
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } });
  const date = screen.getByPlaceholderText('Date');   
  fireEvent.change(date, { target: { value: '29.01.2021' } })
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText(/go to coffee/i)).toBeInTheDocument();
  // Clear todo
  fireEvent.click(screen.getByText('Clear'));
  expect(screen.queryByText(/go to coffee/i)).not.toBeInTheDocument();
});