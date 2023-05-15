import React, { useState, useEffect, useRef } from 'react';

const AutoCompleteForm4 = () => {
  const [bankInput, setBankInput] = useState('');
  const [branchInput, setBranchInput] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [bankMatches, setBankMatches] = useState([]);
  const [branchMatches, setBranchMatches] = useState([]);

  const bankInputRef = useRef(null);
  const branchInputRef = useRef(null);

  useEffect(() => {
    const savedBranchCode = localStorage.getItem('branchCode');
    if (savedBranchCode) {
      setBranchCode(savedBranchCode);
    }
  }, []);

  useEffect(() => {
    if (bankInput !== '') {
      fetch(`YOUR_BANK_API_ENDPOINT?name=${bankInput}`)
        .then((response) => response.json())
        .then((data) => setBankMatches(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [bankInput]);

  useEffect(() => {
    if (branchInput !== '') {
      fetch(`YOUR_BRANCH_API_ENDPOINT?name=${branchInput}`)
        .then((response) => response.json())
        .then((data) => setBranchMatches(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [branchInput]);

  const handleBankSelect = (item) => {
    setBankInput(item.name);
    setBankCode(item.code);
    setBankMatches([]);
    bankInputRef.current.focus();
  };

  const handleBranchSelect = (item) => {
    setBranchInput(item.name);
    setBranchCode(item.code);
    localStorage.setItem('branchCode', item.code);
    setBranchMatches([]);
    branchInputRef.current.focus();
  };

  return (
    <div>
      <input 
        type="text" 
        value={bankInput} 
        onChange={(e) => setBankInput(e.target.value)} 
        ref={bankInputRef}
      />
      <input 
        type="text" 
        value={bankCode} 
        readOnly
      />
      {bankMatches.length > 0 && (
        <ul>
          {bankMatches.map((item) => (
            <li key={item.code} onClick={() => handleBankSelect(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
      <input 
        type="text" 
        value={branchInput} 
        onChange={(e) => setBranchInput(e.target.value)} 
        ref={branchInputRef}
      />
      <input 
        type="text" 
        value={branchCode} 
        readOnly
      />
      {branchMatches.length > 0 && (
        <ul>
          {branchMatches.map((item) => (
            <li key={item.code} onClick={() => handleBranchSelect(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteForm4;