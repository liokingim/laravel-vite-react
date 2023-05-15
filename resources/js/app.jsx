import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './components/RegistrationForm';
import AutoCompleteForm from './components/AutoCompleteForm';
import AutoCompleteForm2 from './components/AutoCompleteForm2';
import AutoCompleteForm3 from './components/AutoCompleteForm3';
import AutoCompleteForm4 from './components/AutoCompleteForm4';

const App = () => {
  return (
    <div className="app">
      <RegistrationForm />
      <AutoCompleteForm />
      <AutoCompleteForm2 />
      <AutoCompleteForm3 />
      <AutoCompleteForm4 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));