import React, { useState, useEffect } from 'react';

const SomeComponent = () => {
  const [inputValue, setInputValue] = useState('');

  // 컴포넌트가 마운트될 때 sessionStorage에서 값을 불러옵니다.
  useEffect(() => {
    const savedValue = sessionStorage.getItem('inputValue');
    if (savedValue) setInputValue(savedValue);
  }, []);

  // 사용자의 입력을 처리합니다.
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    sessionStorage.setItem('inputValue', value);
  };

  useEffect(() => {
    const handlePopState = () => {
      console.log('Back button clicked');
      // 이곳에 뒤로 가기 버튼을 클릭했을 때 실행할 코드를 작성합니다.
    };

    window.addEventListener('popstate', handlePopState);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);  // 빈 의존성 배열을 사용하여 이 useEffect가 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  useEffect(() => {
    const handlePopState = () => {
      const savedValue = sessionStorage.getItem('inputValue');
      if (savedValue) setInputValue(savedValue);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleChange2 = (e) => {
    const value = e.target.value;
    setInputValue(value);
    sessionStorage.setItem('inputValue', value);
  };

  const handlePopState = () => {
    const savedValue = sessionStorage.getItem('inputValue');
    if (savedValue) {
      setInputValue(savedValue);
      // 값을 사용한 후에 삭제합니다.
      sessionStorage.removeItem('inputValue');
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};