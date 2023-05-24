import React, { useState } from 'react';

function InputForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      setError("이름을 입력해주세요.");
    } else if (value.length < 3) {
      setError("이름은 3자 이상이어야 합니다.");
    } else {
      setError("");
      alert(`입력값은 ${value}입니다.`);
      // 여기에서 추가적인 form 제출 처리를 수행합니다.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <p>{error}</p>
      <button type="submit">제출</button>
    </form>
  );
}

export default InputForm;