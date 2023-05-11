import React, { useState, useEffect } from 'react';

const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

const AutoCompleteForm = () => {
  const [input, setInput] = useState('');
  const [matches, setMatches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (input === '') {
      setMatches([]);
      setIsOpen(false);
    } else {
      const regex = new RegExp(`^${input}`, 'i');
      const matchedItems = data.filter((item) => regex.test(item));
      setMatches(matchedItems);
      setIsOpen(true);
    }
  }, [input]);

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {isOpen && (
        <div>
          {matches.length > 0 ? (
            matches.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>No matches found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteForm;