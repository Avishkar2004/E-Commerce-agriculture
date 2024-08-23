import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import { useAuth } from '../actions/authContext';

const CreateAcc = () => {
    const history = useHistory();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        passwordStrength: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const transformedValue = name === 'username' ? value.replace(/\s/g, '_') : value;
        setFormData((prev) => ({
            ...prev,
            [name]: transformedValue,
            passwordStrength: name === 'password' ? zxcvbn(value).score : prev.passwordStrength,
        }));
        setError({});  // Reset error messages on input change

        // Debugging: Log current formData and errors
        // console.log('Form Data:', formData);
        // console.log('Error State:', error);
    };

    const getPasswordStrengthLabel = (score) => {
        switch (score) {
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Moderate';
            case 3:
                return 'Strong';
            case 4:
                return 'Very Strong';
            default:
                return '';
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError({ confirmPassword: "Passwords do not match." });
            return;
        }

        // Check password strength
        if (formData.passwordStrength < 2) {
            setError({ password: "Password is too weak. Please choose a stronger password." });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,  // Added confirmPassword here
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError({ form: data.message });
            } else if (data.success) {
                localStorage.setItem('authenticatedUser', JSON.stringify({ user: data.user, token: data.token }));
                login(data.user);
                history.push('/');
            }
        } catch (error) {
            setError({ form: "Sign up failed. Please try again later." });
            console.error('Signup failed:', error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder='Enter your username'
                        />
                        {error.username && <p className="text-red-500 text-sm mt-2">{error.username}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Enter your email'
                        />
                        {error.email && <p className="text-red-500 text-sm mt-2">{error.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder='Enter your password'
                        />

                        <div className="mt-2 text-sm text-gray-500">
                            Strength: {getPasswordStrengthLabel(formData.passwordStrength)}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder='Confirm your password'
                        />

                        {error.confirmPassword && <p className="text-red-500 text-sm mt-2">{error.confirmPassword}</p>}
                    </div>
                    {error.form && <p className="text-red-500 text-sm mt-4">{error.form}</p>}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Sign Up"}
                    </button>
                </form>
                <div className='mt-3 mb-3 text-center'>
                    <Link to="/login" className='text-indigo-500 hover:underline'>Already have an account? Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default CreateAcc;
