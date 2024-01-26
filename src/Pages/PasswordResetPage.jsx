import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../actions/authContext';

const PasswordResetPage = () => {
    const { login } = useAuth();
    const [resetCode, setResetCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory()

    const handleResetPassword = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!resetCode || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        // OTP validation
        if (!(/^\d{1,6}$/).test(resetCode)) {
            alert('Invalid OTP format. It should be a numeric value of no more than 6 digits.');
            return;
        }
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Call backend API to reset password
        try {
            const response = await fetch('http://localhost:8080/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authenticatedUser')}`,
                },
                credentials: "include",
                body: JSON.stringify({ otp: resetCode, newPassword }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                if (errorMessage !== 'Invalid OTP.') {
                    throw new Error(errorMessage);
                } else {
                    console.log('Ignoring "Invalid OTP" error.');
                    // Clear previous error state
                    setError(null);
                    return;
                }
            }

            //! Parse the response body as JSON
            const data = await response.json();

            // console.log("Response Data:", data); // Log the response data

            //! Check if username is available in data
            if (!data || !data.username) {
                throw new Error("Username not found in response data.");
            }

            //! Set the success message
            setSuccessMessage('Password reset successfully.');

            //! Get the username from the response data
            const usernameFromResponse = data.username;
            setUsername(usernameFromResponse);

            // Log the username upon successful password reset
            // console.log('Username:', usernameFromResponse);

            if (login && typeof login === 'function') {
                //! For showing user name if login successful
                login({ username: data.username });
                // console.log(usernameFromResponse);
            } else {
                console.error("login is not a function or not defined");
            }

            history.push('/');
        } catch (error) {
            setError(error.message);
        }

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                <form onSubmit={handleResetPassword} className="space-y-4">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <p className="text-gray-600">We have sent a otp reset code</p>
                    <div className="flex flex-col">
                        <label htmlFor="resetCode" className="text-sm text-gray-600">Enter code:</label>
                        <input
                            type="text"
                            id="resetCode"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="newPassword" className="text-sm text-gray-600">Enter new password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-sm text-gray-600">Confirm new password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Reset my password</button>
                </form>
            </div>
        </div>
    );
};

export default PasswordResetPage;
