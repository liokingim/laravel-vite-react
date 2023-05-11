import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './components/RegistrationForm';
import AutoCompleteForm from './components/AutoCompleteForm';

const App = () => {
  return (
    <div className="app">
      <RegistrationForm />
      <AutoCompleteForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));