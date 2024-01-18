// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CreateAcc = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword
                }),
            });
            if (!response.ok) {
                console.log("Signup successful");
            } else {
                const errorMessage = await response.text();
                console.error('Signup failed:', errorMessage);
            }
        } catch (error) {
            console.error('Signup failed:', error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border-gray-300 rounded-md p-2 border"
                            required
                            placeholder='Enter Your User Name'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-gray-300 rounded-md p-2 border"
                            required
                            placeholder='Enter Your Email'
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
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-600 text-sm font-medium mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full border-gray-300 rounded-md p-2 border"
                            required
                            placeholder='Confirm Your Password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mb-4"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center text-gray-600">
                    <span>Already have an account?</span>{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateAcc;
