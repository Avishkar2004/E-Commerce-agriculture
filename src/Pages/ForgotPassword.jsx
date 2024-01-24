import React, { useEffect, useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleEmailSubmit = async () => {
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
        } catch (error) {
            console.error('Error:', error.message);
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
                        />
                        <button
                            onClick={handleEmailSubmit}
                            className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Send OTP
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
