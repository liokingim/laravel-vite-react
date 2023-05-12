import React, { useState, useEffect } from "react";

const AutoCompleteForm2 = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // 검색어를 기반으로 옵션 목록 가져오기
    fetch("https://api.example.com/search?q={input}")
      .then((response) => response.json())
      .then((data) => setOptions(data.options));
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <select value={options[0]} onChange={(event) => setInput(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default AutoCompleteForm2;