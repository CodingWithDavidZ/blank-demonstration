import React, { useState } from 'react';

function PhishingDemo() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert('You could have fell victim to a phishing attack');
  }

  return (
    <div className='phishing-demo'>
      <form id='phish' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          id='username'
          placeholder='Enter Username'
          onChange={handleUsername}
        />
        <input
          type='text'
          className='form-control'
          id='password'
          placeholder='Enter Password'
          onchange={handlePassword}
        />
        <button id='submitButton'>Submit</button>
      </form>
      <p>Go back to the original tab</p>
    </div>
  );
}

export default PhishingDemo;
