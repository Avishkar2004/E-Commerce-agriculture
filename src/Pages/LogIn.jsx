import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../actions/authContext';

const LogIn = () => {
  const history = useHistory();
  const { login } = useAuth();
  const [serverResponse, setServerResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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

      const { success, message, user, token } = await response.json();

      if (success) {
        localStorage.setItem('authenticatedUser', JSON.stringify({ user, token }));
        login(user);
        history.push('/');
      } else {
        setErrorMessage(message);
        setServerResponse(message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Internal Server Error');
      setServerResponse('Internal Server Error');
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
            Login
          </button>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          {serverResponse && (
            <div className="text-green-500 text-sm mb-4">{serverResponse}</div>
          )}
        </form>
        <div className="flex items-center justify-between gap-4 mt-4 mb-4">
          <Link
            to="/forgot-password"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Forgot Password
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Create New Account
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LogIn;