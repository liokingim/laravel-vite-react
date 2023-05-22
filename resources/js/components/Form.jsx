import React from 'react';

const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name } = event.target.elements;
    onSubmit(name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;