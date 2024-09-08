import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setErrorMessage(error);
        setServerResponse('');
        setIsLoading(false);
        return;
      }

      const { success, message, user } = await response.json();

      if (success) {
        localStorage.setItem('authenticatedUser', JSON.stringify({ user }));
        login(user);
        history.push('/');
        window.location.reload()
      } else {
        setErrorMessage(message);
        setServerResponse(message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Internal Server Error');
      setServerResponse('Internal Server Error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400 p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your username or email"
              onChange={handleInputChange}
              aria-label="Username or Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your password"
              onChange={handleInputChange}
              aria-label="Password"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md ${isLoading ? 'bg-gray-400' : 'bg-blue-600'} text-white transition-colors duration-300`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
          {errorMessage && (
            <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
          )}
          {serverResponse && (
            <div className="text-green-500 text-sm mt-4">{serverResponse}</div>
          )}
        </form>
        <div className="flex items-center justify-between gap-4 mt-6">
          <Link
            to="/forgot-password"
            className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Forgot Password
          </Link>
          <Link
            to="/signup"
            className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
