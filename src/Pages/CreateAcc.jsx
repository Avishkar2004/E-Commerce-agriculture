import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../actions/authContext';
import zxcvbn from 'zxcvbn'


const CreateAcc = () => {
    const history = useHistory()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Replace spaces with underscores for the username
        const transformedValue = name === 'username' ? value.replace(/\s/g, '_') : value;

        setFormData({
            ...formData,
            [name]: transformedValue,
            passwordStrength: name === 'password' ? zxcvbn(value).score : formData.passwordStrength,
        });
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
        //! check if password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authenticatedUser')}`,
                },
                credentials: "include",
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                }),
            });
            const { success, user, secretKey, token } = await response.json();
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
            } else {
                //! Display a generic error message
                setError("Sign up failed. Please try again later.");
                alert("Username is already taken, please choose another one");

            }
        } catch (error) {
            //! Display a generic error message
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
                            value={formData.username}
                            className="w-full border-gray-300 rounded-md p-2 border"
                            required
                            placeholder='Enter Your User Name'
                            onChange={handleInputChange}
                        />
                        {formData.username && (
                            <div className='text-sm text-gray-500'>
                                Transformed Username : {formData.username}
                            </div>
                        )}
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
                        {formData.password && (
                            <div className={`text-sm ${getPasswordStrengthLabel(formData.passwordStrength)}`}>
                                Password strength : {getPasswordStrengthLabel(formData.passwordStrength)}
                            </div>
                        )}
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