import React, { useState } from 'react';
import './css/app.css';

const BankForm = () => {
  const [values, setValues] = useState({
    depositor: '',
    bankName: '',
    bankBranch: '',
    depositType: '',
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(values);
    }
  };

  const validateForm = () => {
    if (!values.depositor || !values.bankName || !values.bankBranch || !values.depositType) {
      alert('모든 필드를 채워주세요');
      return false;
    }

    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        입금자명:
        <input type="text" name="depositor" onChange={handleInputChange} />
      </label>
      <label>
        은행명:
        <input type="text" name="bankName" onChange={handleInputChange} />
      </label>
      <label>
        은행지점명:
        <input type="text" name="bankBranch" onChange={handleInputChange} />
      </label>
      <label>
        입금종별:
        <input type="radio" name="depositType" value="보통" onChange={handleInputChange} /> 보통
        <input type="radio" name="depositType" value="당좌" onChange={handleInputChange} /> 당좌
      </label>
      <button type="submit">전송</button>
    </form>
  );
};

export default BankForm;
