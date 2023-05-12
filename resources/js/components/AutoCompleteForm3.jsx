import React, { useState, useEffect, useRef } from 'react';

const AutoCompleteForm3 = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);

  // 컴포넌트가 마운트 될 때 API 호출
  useEffect(() => {
    fetch('YOUR_API_ENDPOINT') // 여기에 API 엔드포인트를 입력해주세요.
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

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
  }, [input, data]);

  const handleSelect = (item) => {
    setInput(item);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown' && selectedIndex < matches.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (event.key === 'ArrowUp' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (event.key === 'Enter' && selectedIndex >= 0) {
      handleSelect(matches[selectedIndex]);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {isOpen && (
        <ul>
          {matches.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleSelect(item)}
              style={{ backgroundColor: index === selectedIndex ? '#ddd' : 'transparent' }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteForm3;