import React from 'react';

const Confirm = ({ data }) => {
  return (
    <div>
      <h1>Confirmation</h1>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      {/* 추가적인 필드들... */}
    </div>
  );
};

export default Confirm;