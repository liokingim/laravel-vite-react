import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="app">
      <RegistrationForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));