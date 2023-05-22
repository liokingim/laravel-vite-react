import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('calls onSubmit with the name when submit button is clicked', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Form onSubmit={handleSubmit} />);
  const input = getByLabelText(/name/i);
  const button = getByText(/submit/i);

  fireEvent.change(input, { target: { value: 'John Doe' } });
  fireEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledWith('John Doe');
});