import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };

  return (
        <div className="registration-form">
        <h2>회원 등록 폼</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">사용자 이름:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">이메일:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="password">비밀번호:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="passwordConfirmation">비밀번호 확인:</label>
            <input
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            />
            </div>
            <button type="submit">회원 가입</button>
        </form>
    </div>
    );
};

export default RegistrationForm;