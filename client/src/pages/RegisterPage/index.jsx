import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Footer } from '../../components';

export default function RegisterPage() {
  const [formUsername, setFormUsername] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formName, setFormName] = useState('');

  const navigate = useNavigate();

  function handleInput(e) {
    setFormUsername(e.target.value);
  }

  function handlePassword(e) {
    setFormPassword(e.target.value);
  }

  function handleName(e) {
    setFormName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formUsername,
        password: formPassword,
        name: formName,
      }),
    };
    const response = await fetch(
      'http://localhost:3000/users/register',
      options
    );
    const data = await response.json();

    if (response.status == 201) {
      //window.location.assign('/login');
      navigate('/login');
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-header">REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="register-name">
            Full Name:
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={handleName}
              required
            />
          </label>
          <label className="register-username">
            Username:
            <input
              type="text"
              placeholder="Enter Username"
              onChange={handleInput}
              required
            />
          </label>
          <label className="register-password">
            Password:
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handlePassword}
              required
            />
          </label>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
