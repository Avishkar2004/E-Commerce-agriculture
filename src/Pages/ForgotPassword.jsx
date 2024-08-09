import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailSubmit = async () => {
        setIsLoading(true);

        // Client-side email format validation
        if (!email || !email.includes("@gmail.com")) {
            setErrorMessage("Please provide a valid Gmail address.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setIsEmailSent(true);
            history.push("/passwordreset");
        } catch (error) {
            console.error('Error:', error.message);
            setErrorMessage("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-500 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {isEmailSent ? (
                    <p className="text-green-600 bg-green-100 p-4 rounded text-center">
                        Check your email for the OTP
                    </p>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                            Forgot Password
                        </h2>
                        <label className="block mb-2 text-gray-600 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            defaultValue={email}
                        />
                        {errorMessage && (
                            <p className="text-red-600 bg-red-100 p-2 rounded mt-2 text-center">
                                {errorMessage}
                            </p>
                        )}
                        {isLoading ? (
                            <div className="flex justify-center mt-6">
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CircularProgress color="secondary" />
                                    <span className="ml-3 text-blue-500">Sending...</span>
                                </Box>
                            </div>
                        ) : (
                            <button
                                onClick={handleEmailSubmit}
                                className="w-full mt-6 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out"
                            >
                                Reset my password
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
