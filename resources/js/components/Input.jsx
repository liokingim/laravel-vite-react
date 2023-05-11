import React from 'react';
import Header from './Header';  // Header 컴포넌트를 임포트합니다.
import AutoCompleteForm from './AutoCompleteForm';  // AutoCompleteForm 컴포넌트를 임포트합니다.
import Footer from './Footer';  // Footer 컴포넌트를 임포트합니다.

const Input = () => {
  return (
    <div>
      <Header />  // Header 컴포넌트를 렌더링합니다.
      <AutoCompleteForm />  // AutoCompleteForm 컴포넌트를 렌더링합니다.
      <Footer />  // Footer 컴포넌트를 렌더링합니다.
    </div>
  );
};

export default Input;
