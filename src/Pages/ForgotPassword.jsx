import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                {isEmailSent ? (
                    <p className="text-green-500">Check your email for the OTP</p>
                ) : (
                    <div>
                        <label className="block mb-2 text-gray-600">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            defaultValue={email}
                        />
                        {errorMessage && (
                            <p className="text-red-500">{errorMessage}</p>
                        )}
                        {isLoading ? (
                            <div className="flex justify-center mt-4">
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CircularProgress color="secondary" />
                                    <span className="ml-2 text-blue-500">Sending...</span>
                                </Box>
                            </div>
                        ) : (
                            <button
                                onClick={handleEmailSubmit}
                                className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
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