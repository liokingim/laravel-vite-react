import React from 'react';
import axios from 'axios';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name } = event.target.elements;
    onSubmit(name.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    // 쿠키 값을 가져옵니다.
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('myCookie='))
      .split('=')[1];

    // 폼 데이터와 쿠키를 같이 보냅니다.
    axios.post('http://localhost:8000/api/submit', formData, {
      headers: {
        'Cookie': `myCookie=${cookieValue}`
      },
      withCredentials: true // CORS 이슈 해결을 위한 설정
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    [
      React.createElement('input', {
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        value: formData.username,
        onChange: handleChange,
      }),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        value: formData.email,
        onChange: handleChange,
      }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    ]
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" name="name" />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

export default Form;