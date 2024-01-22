// src/components/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../actions/authContext';

const Login = () => {
  const history = useHistory()
  const { login } = useAuth();
  const [serverResponse, setServerResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLoginWithGoogle = () => {
    // Add Google login logic here
    console.log('Login with Google');
  };
  const handleLoginWithTwitter = () => {
    // Add Twitter login logic here
    console.log('Login with Twitter');
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authenticatedUser')}`,
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const { error } = await response.json();
        setErrorMessage(error);
        setServerResponse('');
        return;
      }

      const { success, message, user, secretKey, token } = await response.json();
      //! Check if cookies are received
      const authTokenCookies = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1")
      if (authTokenCookies) {
        console.log("Received authToken cookie:", authTokenCookies)
      }
      if (success) {
        console.log('Login successful');
        localStorage.setItem('authenticatedUser', JSON.stringify({ user, token, secretKey }));
        console.log('setAuthenticatedUser:', login);
        if (login && typeof login === 'function') {
          //! For showing user name if login successful
          login(user);
        } else {
          console.error("login is not a function or not defined");
        }
        // Redirect to the home page
        history.push('/');
      }
      else {
        setErrorMessage(message);
        setServerResponse(message); //! Set server response for display
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Internal Server Error');
      setServerResponse('Internal Server Error'); //! Set server response for display
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border-gray-300 rounded-md p-2 border"
              required
              placeholder='Enter your user name or email'
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-gray-300 rounded-md p-2 border"
              required
              placeholder='Enter your password'
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
          >
            Login with Username and Password
          </button>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          {serverResponse && (
            <div className="text-green-500 text-sm mb-4">{serverResponse}</div>
          )}
        </form>
        <div className='mt-3 mb-3 right-12 items-end'>
          <button className='text-blue-500 hover:underline'>Forget Pass</button>
        </div>
        <div className="text-center text-gray-600">
          <span className="mr-2">or</span>
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={handleLoginWithGoogle}
          >
            Continue with Google
          </button>
          <span className="mx-2">/</span>
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={handleLoginWithTwitter}
          >
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
