import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const CreateAcc = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

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
                    confirmPassword: formData.confirmPassword,
                }),
            });

            if (response.ok) {
                console.log("Signup successful");
                history.push("/");
            } else {
                // Display a generic error message
                setError("Sign up failed. Please try again later.");
                alert("Username is already taken, please choose another one");

            }
        } catch (error) {
            // Display a generic error message
            setError("Sign up failed. Please try again later.");
            console.error('Signup failed:', error.message);
        } finally {
            setLoading(false);
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
                            onChange={handleInputChange}
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
                            placeholder='Enter Your Password'
                            onChange={handleInputChange}
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
                        className={`w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
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
