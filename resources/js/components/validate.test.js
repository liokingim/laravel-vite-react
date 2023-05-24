import { validateName } from './validate';

test('validates name input', () => {
  expect(validateName('')).toBe('이름을 입력해주세요.');
  expect(validateName('ab')).toBe('이름은 3자 이상이어야 합니다.');
  expect(validateName('abc')).toBe('');
});