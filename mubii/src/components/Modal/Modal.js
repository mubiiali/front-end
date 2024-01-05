// LoginModal.js

import React from 'react';
import './Modal.css';

const LoginModal = ({ closeModal }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    // For a simple example, you can just log the input values
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log('Username:', username, 'Password:', password);
    closeModal();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <form className='form' onSubmit={handleLogin}>
        <div>
         <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
       </div>
       <div>
       <label htmlFor="password">Password:</label>
          <input type="number" id="password" name="password" required />
       </div>
         
          <div className='button'>
          <button style={{backgroundColor:'orangered' ,width:'100%',height:'2rem',justifyContent:'center',alignItems:'center'}} type="submit">Login</button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginModal;
