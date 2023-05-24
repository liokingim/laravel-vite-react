import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('validates name input on form submit', () => {
  const { getByLabelText, getByText } = render(<Form />);

  fireEvent.click(getByText('제출'));
  expect(getByText('이름을 입력해주세요.')).toBeInTheDocument();

  fireEvent.change(getByLabelText('이름'), { target: { value: 'ab' } });
  fireEvent.click(getByText('제출'));
  expect(getByText('이름은 3자 이상이어야 합니다.')).toBeInTheDocument();

  fireEvent.change(getByLabelText('이름'), { target: { value: 'abc' } });
  fireEvent.click(getByText('제출'));
  expect(getByText('이름을 입력해주세요.')).not.toBeInTheDocument();
  expect(getByText('이름은 3자 이상이어야 합니다.')).not.toBeInTheDocument();
});